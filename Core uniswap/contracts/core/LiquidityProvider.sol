// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IFactory.sol";
import "./interfaces/IPool.sol";
import "./interfaces/IWCore.sol";
import "./libraries/Library.sol";

error LiquidityProvider__InsufficientAmount();
error LiquidityProvider__InsufficientOutputAmount();
error LiquidityProvider__CoreTransferFailed();
error LiquidityProvider__CoreTransferFailed();

contract LiquidityProvider {
    address private immutable factoryAddress;
    address private immutable WCORE;

    constructor(address _factoryAddress, address _WCore) {
        factoryAddress = _factoryAddress;
        WCore = _WCore;
    }

    function _addLiquidity(
        address _tokenA,
        address _tokenB,
        uint256 amountOfTokenADesired,
        uint256 amountOfTokenBDesired,
        uint256 minTokenA,
        uint256 minTokenB
    ) internal returns (uint256 amountA, uint256 amountB) {
        address pair = IFactory(factoryAddress).getTokenPairs(_tokenA, _tokenB);
        if (pair == address(0))
            pair = IFactory(factoryAddress).createPool(_tokenA, _tokenB);

        (uint256 reserveA, uint256 reserveB) = IPool(pair).getTokenReserves();

        if (reserveA == 0 && reserveB == 0) {
            (amountA, amountB) = (amountOfTokenADesired, amountOfTokenBDesired);
        } else {
            uint256 optimalAmountOfTokenB = quote(
                amountOfTokenADesired,
                reserveA,
                reserveB
            );
            if (optimalAmountOfTokenB <= amountOfTokenBDesired) {
                if (optimalAmountOfTokenB < minTokenB)
                    revert LiquidityProvider__InsufficientAmount();
                (amountA, amountB) = (
                    amountOfTokenADesired,
                    optimalAmountOfTokenB
                );
            } else {
                uint256 amountAOptimal = quote(
                    amountOfTokenBDesired,
                    reserveB,
                    reserveA
                );
                assert(amountAOptimal <= amountOfTokenADesired);
                if (amountAOptimal < minTokenA)
                    revert LiquidityProvider__InsufficientAmount();
                (amountA, amountB) = (amountAOptimal, amountOfTokenBDesired);
            }
        }
    }

    function addLiquidity(
        address tokenA,
        address tokenB,
        uint256 amountOfTokenADesired,
        uint256 amountOfTokenBDesired,
        uint256 minTokenA,
        uint256 minTokenB
    ) external returns (uint256 amountA, uint256 amountB, uint256 liquidity) {
        (amountA, amountB) = _addLiquidity(
            tokenA,
            tokenB,
            amountOfTokenADesired,
            amountOfTokenBDesired,
            minTokenA,
            minTokenB
        );
        address pair = IFactory(factoryAddress).getTokenPairs(tokenA, tokenB);
        IERC20(tokenA).transferFrom(msg.sender, pair, amountA);
        IERC20(tokenB).transferFrom(msg.sender, pair, amountB);
        liquidity = IPool(pair).mint(msg.sender);
    }

    // function addLiquidityCore(
    //     address tokenA
    // ) external returns (uint256 amountA, uint256 amountCore, uint256 liquidity) {
    //    (amountA, amountCore) = _addLiquidity();
    //     address pair = IFactory(factoryAddress).getTokenPairs(tokenA, WCore);
    //     IERC20(tokenA).transferFrom(msg.sender, pair, amountA);
    //     IWCore(WCore).deposit{value: amountCore}();
    //     assert(IWCore(WCore).transfer(pair, amountCore));
    //     liquidity = IPool(pair).mint(msg.sender);

    //     if (msg.value > amountCore)
    //         (bool success, ) = msg.sender.call{value: value}("");
    //     if (!success) revert LiquidityProvider__CoreTransferFailed();
    // }

    // TODO: Remove liquidity & liquidityCore

    // Swapppp

    function _swap(
        uint256[] memory amounts,
        address[] memory path,
        address _pair,
        address _to
    ) internal {
        for (uint i; i < path.length - 1; i++) {
            (address input, address output) = (path[i], path[i + 1]);
            (address token0, ) = DefiLibrary.sortTokens(input, output);
            uint256 amountOut = amounts[i + 1];
            (uint256 amount0Out, uint256 amount1Out) = input == token0
                ? (amountOut, uint256(0))
                : (uint256(0), amountOut);
            /**TODO: In case of multiple hops */
            IPool(_pair).swap(amountOut, amounts[i], _to);
        }
    }

    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path
    )
        external
        returns (
            /**address to*/
            uint[] memory amounts
        )
    {
        address pair = IFactory(factoryAddress).getTokenPairs(path[0], path[1]);

        amounts = getAmountsOut(pair, amountIn, path);
        if (amounts[amounts.length - 1] < amountOutMin)
            revert LiquidityProvider__InsufficientOutputAmount();

        IERC20(path[0]).transferFrom(msg.sender, pair, amounts[0]);
        _swap(amounts, path, pair, msg.sender);
    }

    function quote(
        uint amountA,
        uint reserveA,
        uint reserveB
    ) internal pure returns (uint amountB) {
        require(amountA > 0, "insufficient input");
        require(
            reserveA > 0 && reserveB > 0,
            "insufficient liquidity"
        );
        amountB = (amountA * reserveB) / reserveA;
    }

    // function getAmountsOut() public view returns (uint256) {}

    function getAmountsOut(
        address pair,
        uint amountIn,
        address[] memory path
    ) public view returns (uint[] memory amounts) {
        require(path.length >= 2, "invalid number of array");
        amounts = new uint[](path.length);
        amounts[0] = amountIn;
        for (uint i; i < path.length - 1; i++) {
            (uint reserveIn, uint reserveOut) = IPool(pair).getTokenReserves();
            amounts[i + 1] = DefiLibrary.getAmountOut(
                amounts[i],
                reserveIn,
                reserveOut
            );
        }
    }
}