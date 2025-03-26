// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import {CCIPReceiver} from "@chainlink/contracts/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts/src/v0.8/ccip/libraries/Client.sol";
import {IRouterClient} from "@chainlink/contracts/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts/src/v0.8/shared/access/OwnerIsCreator.sol";
import {IERC20} from "@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/token/ERC20/IERC20.sol";

/// @title - A simple cross-chain bridge contract
contract CrossChainBridge is CCIPReceiver, OwnerIsCreator {
    // Event emitted when tokens are bridged to another chain.
    event TokensBridged(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address sender,
        address receiver,
        address token,
        uint256 amount
    );

    // Event emitted when tokens are received from another chain.
    event TokensReceived(
        bytes32 indexed messageId,
        uint64 indexed sourceChainSelector,
        address sender,
        address receiver,
        address token,
        uint256 amount
    );

    constructor(address _router) CCIPReceiver(_router) {}

    /// @notice Handles incoming CCIP messages
    function _ccipReceive(
        Client.Any2EVMMessage memory any2EvmMessage
    ) internal override {
        bytes32 messageId = any2EvmMessage.messageId;
        uint64 sourceChainSelector = any2EvmMessage.sourceChainSelector;
        address sender = abi.decode(any2EvmMessage.sender, (address));
        address receiver = abi.decode(any2EvmMessage.data, (address));
        Client.EVMTokenAmount[] memory tokenAmounts = any2EvmMessage
            .destTokenAmounts;

        require(tokenAmounts.length > 0, "No tokens received");
        address token = tokenAmounts[0].token;
        uint256 amount = tokenAmounts[0].amount;

        IERC20(token).transfer(receiver, amount);

        emit TokensReceived(
            messageId,
            sourceChainSelector,
            sender,
            receiver,
            token,
            amount
        );
    }

    /// @notice Bridges tokens to another chain
    function bridgeTokens(
        uint64 destinationChainSelector,
        address receiver,
        address token,
        uint256 amount
    ) external returns (bytes32 messageId) {
        require(
            IERC20(token).balanceOf(msg.sender) >= amount,
            "Insufficient balance"
        );
        require(
            IERC20(token).allowance(msg.sender, address(this)) >= amount,
            "Insufficient allowance"
        );

        IERC20(token).transferFrom(msg.sender, address(this), amount);

        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        tokenAmounts[0] = Client.EVMTokenAmount({token: token, amount: amount});

        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encode(msg.sender),
            tokenAmounts: tokenAmounts,
            feeToken: address(0)
        });

        messageId = IRouterClient(this.getRouter()).ccipSend(
            destinationChainSelector,
            message
        );
        emit TokensBridged(
            messageId,
            destinationChainSelector,
            msg.sender,
            receiver,
            token,
            amount
        );
    }
}
