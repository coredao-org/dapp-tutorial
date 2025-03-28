// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {CCIPReceiver} from "@chainlink/contracts/src/v0.8/ccip/applications/CCIPReceiver.sol";
import {Client} from "@chainlink/contracts/src/v0.8/ccip/libraries/Client.sol";
import {IRouterClient} from "@chainlink/contracts/src/v0.8/ccip/interfaces/IRouterClient.sol";
import {OwnerIsCreator} from "@chainlink/contracts/src/v0.8/shared/access/OwnerIsCreator.sol";
import {IERC20} from "@chainlink/contracts/src/v0.8/vendor/openzeppelin-solidity/v4.8.0/contracts/token/ERC20/IERC20.sol";
import {LinkTokenInterface} from "./LinkTokenInterface.sol";
import {USDC} from "./USDC.sol";

/**
 * @title A simple cross-chain bridge contract
 * @author Fraol Bereket
 * @notice The smart contract is built to show a simple example of USDC token bridge between Core network and Eth Sepolia. Currently there is no bridgeable token between Core and Sepolia so in the example usdc token is created.
 */
contract CrossChainBridge is CCIPReceiver, OwnerIsCreator {
    event MessageSent(
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

    struct TransferData {
        address sender;
        uint256 amount;
    }

    USDC public usdcToken;
    LinkTokenInterface public linkToken;
    IRouterClient private s_router;

    constructor(address _router, address _linkToken) CCIPReceiver(_router) {
        s_router = IRouterClient(_router);
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

        // Decode the received data into TransferData struct
        TransferData memory transferData = abi.decode(
            any2EvmMessage.data,
            (TransferData)
        );

        require(transferData.amount > 0, "Invalid transfer amount");

        // Mint tokens to the sender (the original sender of the transaction)
        usdcToken.mint(transferData.sender, transferData.amount);

        emit TokensReceived(
            messageId,
            sourceChainSelector,
            sender,
            transferData.sender, // The original sender who should receive the tokens
            transferData.amount
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

        sendMessage(destinationChainSelector, receiver, amount);
    }

    function sendMessage(
        uint64 destinationChainSelector,
        address receiver,
        uint256 transferAmount
    ) internal returns (bytes32 messageId) {
        address sender = msg.sender;

        TransferData memory transferData = TransferData({
            sender: sender,
            amount: transferAmount
        });

        // Encode the struct for transmission
        bytes memory encodedData = abi.encode(transferData);

        Client.EVM2AnyMessage memory evm2AnyMessage = Client.EVM2AnyMessage({
            receiver: abi.encode(receiver), // ABI-encoded receiver address
            data: encodedData, // ABI-encoded string message
            tokenAmounts: new Client.EVMTokenAmount[](0),
            extraArgs: Client._argsToBytes(
                Client.EVMExtraArgsV2({
                    gasLimit: 200_000, // Gas limit for the callback on the destination chain
                    allowOutOfOrderExecution: true // Allows the message to be executed out of order relative to other messages from the same sender
                })
            ),
            feeToken: address(linkToken) // Setting feeToken to LinkToken address, indicating LINK will be used for fees
        });

        // Get the fee required to send the message
        uint256 fees = s_router.getFee(
            destinationChainSelector,
            evm2AnyMessage
        );

        // approve the Router to send LINK tokens on contract's behalf. I will spend the fees in LINK
        linkToken.approve(address(s_router), fees);

        require(
            IERC20(usdcToken).approve(address(s_router), transferAmount),
            "Failed to approve router"
        );

        // Send the message through the router and store the returned message ID
        messageId = s_router.ccipSend(destinationChainSelector, evm2AnyMessage);

        // Emit an event with message details
        emit MessageSent(
            messageId,
            destinationChainSelector,
            sender,
            receiver,
            transferAmount
        );

        // Return the message ID
        return messageId;
    }
}
