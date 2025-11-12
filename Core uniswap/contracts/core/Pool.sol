// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Math.sol";

error PoolFactory__NotOwner();
error PoolFactory__InsufficientLiquidity();
error PoolFactory__InsufficientFunds();

contract Pool is ERC20 {
    using Math for uint256;

    address private immutable factory;
    address private tokenA;
    address private tokenB;

    uint256 public constant MINIMUM_LIQUIDITY = 10 ** 3;

    uint256 private reserveA;
    uint256 private reserveB;

    uint256 private totalLpShares;

    constructor() ERC20("LiquidityTokens", "LP") {
        factory = msg.sender;
    }

    function init(address _tokenA, address _tokenB) external {
        if (factory != msg.sender) revert PoolFactory__NotOwner();

        tokenA = _tokenA;
        tokenB = _tokenB;
    }

    function _update(uint256 _balanceA, uint256 _balanceB) private {
        reserveA = _balanceA;
        reserveB = _balanceB;
    }

    function mint(address _to) external returns (uint256 liquidity) {
        (uint256 _reserveA, uint256 _reserveB) = getTokenReserves();
        uint256 _balanceA = IERC20(tokenA).balanceOf(address(this));
        uint256 _balanceB = IERC20(tokenB).balanceOf(address(this));
        uint256 depositOfTokenA = _balanceA - _reserveA;
        uint256 depositOfTokenB = _balanceB - _reserveB;

        uint256 _totalSupply = totalSupply();
        if (_totalSupply == 0) {
            liquidity =
                Math.sqrt(depositOfTokenA * depositOfTokenB) -
                (MINIMUM_LIQUIDITY);
            _mint(address(1), MINIMUM_LIQUIDITY); // permanently lock the first MINIMUM_LIQUIDITY tokens to avoid the pool being drained
        } else {
            liquidity = Math.min(
                (depositOfTokenA * _totalSupply) / _reserveA,
                (depositOfTokenB * _totalSupply) / _reserveB
            );
        }
        if (liquidity <= 0) revert PoolFactory__InsufficientLiquidity();
        _mint(_to, liquidity);
        _update(_balanceA, _balanceB);

        // emit Mint(msg.sender, depositOfTokenA, depositOfTokenB);
    }

    // BURN
    function liquidateLpTokens(
        address to
    ) external returns (uint256 amountA, uint256 amountB) {
        (uint256 _reserve0, uint256 _reserve1) = getTokenReserves();
        address _tokenA = tokenA;
        address _tokenB = tokenB;
        uint balanceA = IERC20(_tokenA).balanceOf(address(this));
        uint balanceB = IERC20(_tokenB).balanceOf(address(this));
        uint liquidity = balanceOf(to);

        uint256 _totalSupply = totalSupply();
        amountA = (liquidity * balanceA) / _totalSupply;
        amountB = (liquidity * balanceB) / _totalSupply;
        if (amountA <= 0 && amountB <= 0)
            revert PoolFactory__InsufficientLiquidity();
        _burn(address(this), liquidity);
        IERC20(_tokenA).transfer(to, amountA);
        IERC20(_tokenB).transfer(to, amountB);
        balanceA = IERC20(_tokenA).balanceOf(address(this));
        balanceB = IERC20(_tokenB).balanceOf(address(this));

        _update(balanceA, balanceB);

        // emit Burn(msg.sender, amount0, amountB, to);
    }

    function swap(
        uint256 amount0Out,
        uint256 amount1Out,
        address to /**bytes calldata data */
    ) external {
        if (amount0Out <= 0 && amount1Out <= 0)
            revert PoolFactory__InsufficientFunds();
        (uint256 _reserve0, uint256 _reserve1) = getTokenReserves();
        if (amount0Out > _reserve0 || amount1Out > _reserve1)
            revert PoolFactory__InsufficientLiquidity();
        uint256 balanceA;
        uint256 balanceB;
        {
            address _tokenA = tokenA;
            address _tokenB = tokenB;
            if (amount0Out > 0) IERC20(_tokenA).transfer(to, amount0Out);
            if (amount1Out > 0) IERC20(_tokenB).transfer(to, amount1Out);
            balanceA = IERC20(_tokenA).balanceOf(address(this));
            balanceB = IERC20(_tokenB).balanceOf(address(this));
        }

        _update(balanceA, balanceB);
    }

    function getTokenReserves() public view returns (uint256, uint256) {
        return (reserveA, reserveB);
    }

    // force reserves to match balances
    function sync() external {
        _update(
            IERC20(tokenA).balanceOf(address(this)),
            IERC20(tokenB).balanceOf(address(this))
        );
    }
}