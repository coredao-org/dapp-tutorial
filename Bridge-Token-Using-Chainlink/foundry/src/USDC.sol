// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import {ERC20} from "@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/token/ERC20/ERC20.sol";

/**
 * @title Mock USDC for testing
 * @author Fraol Bereket
 * @notice This token is for testing purpose only. the token can be minted by anyone.
 */

contract USDC is ERC20 {
    constructor() ERC20("Test USDC", "tUSDC") {
        // Initial mint for deployer (optional)
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }

    /// @notice Allows anyone to mint test tokens (for testing only!)
    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}
