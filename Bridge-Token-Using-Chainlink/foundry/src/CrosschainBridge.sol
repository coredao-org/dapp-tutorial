// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {CCIPReceiver} from "@chainlink/contracts/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts/src/v0.8/ccip/libraries/Client.sol";
import {IRouterClient} from "@chainlink/contracts/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts/src/v0.8/shared/access/OwnerIsCreator.sol";
import {LinkTokenInterface} from "./LinkTokenInterface.sol";
import {USDC} from "./USDC.sol";

/// @title - A simple cross-chain bridge contract
contract CrossChainBridge is CCIPReceiver, OwnerIsCreator {
    event TokensBridged(
        bytes32 indexed messageId,
        uint64 indexed destinationChainSelector,
        address sender,
        address receiver,
        uint256 amount
    );

    event TokensReceived(
        bytes32 indexed messageId,
        uint64 indexed sourceChainSelector,
        address sender,
        address receiver,
        uint256 amount
    );

    USDC public usdcToken;
    LinkTokenInterface public linkToken;

    constructor(address _router, address _linkToken) CCIPReceiver(_router) {
        linkToken = LinkTokenInterface(_linkToken); // Fix: Pass LINK token address
        usdcToken = new USDC();
        usdcToken.mint(msg.sender, 100000000000000000000);
    }

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
        uint256 amount = tokenAmounts[0].amount;

        usdcToken.mint(receiver, amount); // Mint to receiver (not sender)
        emit TokensReceived(
            messageId,
            sourceChainSelector,
            sender,
            receiver,
            amount
        );
    }

    /// @notice Bridges tokens to another chain
    function bridgeTokens(
        uint64 destinationChainSelector,
        address receiver,
        uint256 amount
    ) external returns (bytes32 messageId) {
        require(
            usdcToken.balanceOf(msg.sender) >= amount,
            "Insufficient balance"
        );
        require(
            usdcToken.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );

        Client.EVMTokenAmount[]
            memory tokenAmounts = new Client.EVMTokenAmount[](1);
        tokenAmounts[0] = Client.EVMTokenAmount({
            token: address(usdcToken),
            amount: amount
        });

        Client.EVM2AnyMessage memory message = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver),
            data: abi.encode(msg.sender),
            tokenAmounts: tokenAmounts,
            feeToken: address(linkToken),
            extraArgs: ""
        });

        IRouterClient router = IRouterClient(this.getRouter());
        uint256 fees = router.getFee(destinationChainSelector, message); // Fix: Use `message` instead of `evm2AnyMessage`

        require(
            linkToken.approve(address(router), fees),
            "LINK approval failed"
        );
        messageId = router.ccipSend(destinationChainSelector, message);

        emit TokensBridged(
            messageId,
            destinationChainSelector,
            msg.sender,
            receiver,
            amount
        );
    }
}
