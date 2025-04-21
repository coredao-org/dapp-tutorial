// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./ENS-Registry.sol";
import "./ResolverContract.sol";


/**
 * @title Registrar
 * @notice This contract handles domain registrations and renewals.
 *         It interacts with the ENSRegistry to update domain records.
 */
contract Registrar {

    ENSRegistry public registry;  // The registry contract that keeps domain records.


    uint256 public registrationPeriod = 365 days; // How long a domain remains registered.
    uint256 public registrationFee = 1 ether;    // Fee required for registration or renewal.

    // Event to log domain registrations.
    event DomainRegistered(bytes32 indexed domainHash, address owner, uint256 expiration);

    /**
     * @notice Constructor sets the address of the ENSRegistry contract.
     * @param _registry The deployed ENSRegistry contract address.
     */
    constructor(address _registry) {

        registry = ENSRegistry(_registry);
    }

    /**
     * @notice Registers a new domain.
     * @param domainHash The unique identifier for the domain.
     * Requirements:
     * - The domain must be unregistered or its registration must have expired.
     * - The sender must pay at least the registration fee.
     */
    function register(bytes32 domainHash) external payable {

        require(msg.value >= registrationFee, "Insufficient fee");

        ENSRegistry.Record memory rec = registry.getSpecificRecord(domainHash);
        // Check if the domain is either unregistered or its registration has expired.
        require(rec.owner == address(0) || rec.expiration < block.timestamp, "Domain already registered");

        uint256 expiration = block.timestamp + registrationPeriod;
        registry.setRecord(domainHash, msg.sender, address(0), block.timestamp, expiration);
        emit DomainRegistered(domainHash, msg.sender, expiration);
    }

    /**
     * @notice Renews an existing domain registration.
     * @param domainHash The unique identifier for the domain.
     * Requirements:
     * - The sender must be the current owner.
     * - The sender must pay at least the registration fee.
     */
    function renew(bytes32 domainHash) external payable {
        require(msg.value >= registrationFee, "Insufficient fee");
        ENSRegistry.Record memory rec = registry.getSpecificRecord(domainHash);
        require(rec.owner == msg.sender, "Not the owner");

        uint256 newExpiration;
        // If still active, extend from current expiration; otherwise, start from now.
        if (rec.expiration > block.timestamp) {
            newExpiration = rec.expiration + registrationPeriod;
        } else {
            newExpiration = block.timestamp + registrationPeriod;
        }
        registry.setRecord(domainHash, msg.sender, rec.resolver, block.timestamp, newExpiration);
        emit DomainRegistered(domainHash, msg.sender, newExpiration);
    }
}
