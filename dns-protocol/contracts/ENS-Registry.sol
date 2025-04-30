// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title ENSRegistry
 * @notice This contract acts as the primary directory for domain names.
 *         It stores ownership information, pointers to resolver contracts, and expiration times.
 */
contract ENSRegistry {
    // A record for each domain name
    struct Record {
        bytes32 domainName;
        address owner;    // The wallet address that owns the domain
        address resolver; // Address of the resolver contract for this domain
        uint256 registration; // When the domain was registered
        uint256 expiration; // When the domain registration expires
    }

    // Mapping from a domain node (e.g., keccak256 hash of the domain name) to its record.
    mapping(bytes32 => Record) public records;

    // Array of all records for iteration purposes
    Record[] private allRecords;

    // Events to log changes in the registry.
    event NewDomain(bytes32 indexed domain, address owner);
    event Transfer(bytes32 indexed domain, address newOwner);
    event SetResolver(bytes32 indexed domain, address resolver);
    event RenewDomain(bytes32 indexed domain, uint256 expiration);

    /**
     * @notice Sets or updates the record for a domain.
     * @param domainHash The unique identifier for the domain.
     * @param owner The wallet address of the domain owner.
     * @param resolver The resolver contract address associated with this domain.
     * @param registration The timestamp when the domain was registered.
     * @param expiration The timestamp when the registration expires.
     */
    function setRecord(
        bytes32 domainHash,
        address owner,
        address resolver,
        uint256 registration,
        uint256 expiration
    ) external {
        // Allow update if the caller is the current owner or if the domain is unregistered.
        require(
            msg.sender == records[domainHash].owner || records[domainHash].owner == address(0),
            "Not authorized"
        );

        Record memory record = Record(domainHash, owner, resolver, registration, expiration);
        records[domainHash] = record;
        allRecords.push(record);

        emit NewDomain(domainHash, owner);
    }

    /**
     * @notice Transfers domain ownership to a new address.
     * @param domainHash The unique identifier for the domain.
     * @param newOwner The wallet address of the new owner.
     */
    function transferOwnership(bytes32 domainHash, address newOwner) external {
        require(msg.sender == records[domainHash].owner, "Not authorized");
        records[domainHash].owner = newOwner;
        emit Transfer(domainHash, newOwner);
    }

    /**
     * @notice Sets or updates the resolver for a domain.
     * @param domainHash The unique identifier for the domain.
     * @param resolver The new resolver contract address.
     */
    function setResolver(bytes32 domainHash, address resolver) external {
        require(msg.sender == records[domainHash].owner, "Not authorized");
        records[domainHash].resolver = resolver;
        emit SetResolver(domainHash, resolver);
    }

    /**
     * @notice Retrieve a specific record by domain hash.
     * @param domainHash The unique identifier for the domain.
     * @return The Record struct for the domain.
     */
    function getSpecificRecord(bytes32 domainHash) external view returns (Record memory) {
        return records[domainHash];
    }


    /**
     * @notice Retrieve all recorded domains.
     * @return An array of all Record structs.
     */
    function getAllRecords() external view returns (Record[] memory) {
        return allRecords;
    }

    /**
     * @notice Retrieve all domain names owned by a particular address.
     * @param ownerAddress The address to query ownership for.
     * @return An array of domain hashes owned by the specified address.
     */
    function getDomainsByOwner(address ownerAddress) external view returns (bytes32[] memory) {
        uint256 total = allRecords.length;
        uint256 count = 0;
        // First count how many domains belong to ownerAddress
        for (uint256 i = 0; i < total; i++) {
            if (allRecords[i].owner == ownerAddress) {
                count++;
            }
        }

        // Populate result array
        bytes32[] memory domains = new bytes32[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < total; i++) {
            if (allRecords[i].owner == ownerAddress) {
                domains[index] = allRecords[i].domainName;
                index++;
            }
        }
        return domains;
    }
}
