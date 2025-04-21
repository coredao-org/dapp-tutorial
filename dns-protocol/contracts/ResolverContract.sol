// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title EnhancedResolver
 * @notice This contract stores multiple types of records for a domain.
 *         It allows a domain owner to set details such as a wallet address, IPFS hash, email, and social media link.
 */
contract Resolver {
    
    // Structure that holds various details for a domain.
    struct Records {
        address wallet;       // A wallet address (for payments or identification)
        string ipfsHash;      // IPFS hash pointing to content (e.g., decentralized website)
        string email;         // Contact email address
        string socialMedia;   // Social media link or profile
    }
    
    // Mapping from the domain node to its set of records.
    mapping(bytes32 => Records) public records;
    
    // Event to notify when a domain's records are updated.
    event RecordsUpdated(
        bytes32 indexed node,
        address wallet,
        string ipfsHash,
        string email,
        string socialMedia
    );
    
    /**
     * @notice Sets the records for a domain.
     * @param node The unique identifier for the domain.
     * @param wallet The wallet address to associate with the domain.
     * @param ipfsHash The IPFS hash for content related to the domain.
     * @param email The email address associated with the domain.
     * @param socialMedia The social media link related to the domain.
     *
     * Note: In a full implementation, access control should be enforced so that only the domain owner can update records.
     */
    function setRecordsDetails(
        bytes32 node,
        address wallet,
        string memory ipfsHash,
        string memory email,
        string memory socialMedia
    ) public {
        // Access control should be added here (e.g., check with ENSRegistry for ownership)
        records[node] = Records(wallet, ipfsHash, email, socialMedia);
        emit RecordsUpdated(node, wallet, ipfsHash, email, socialMedia);
    }
    
    /**
     * @notice Retrieves all records associated with a domain.
     * @param node The unique identifier for the domain.
     * @return wallet The wallet address, ipfsHash The IPFS hash,
     *         email The email address, socialMedia The social media link.
     */
    function getRecordDetails(bytes32 node)
        public
        view
        returns (
            address wallet,
            string memory ipfsHash,
            string memory email,
            string memory socialMedia
        )
    {
        Records memory rec = records[node];
        return (rec.wallet, rec.ipfsHash, rec.email, rec.socialMedia);
    }
}
