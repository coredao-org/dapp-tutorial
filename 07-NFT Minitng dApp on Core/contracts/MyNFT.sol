// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

// OpenZeppelin Contracts
import {ERC721} from "@openzeppelin/contracts@5.3.0/token/ERC721/ERC721.sol";
import {ERC721Pausable} from "@openzeppelin/contracts@5.3.0/token/ERC721/extensions/ERC721Pausable.sol";
import {Ownable} from "@openzeppelin/contracts@5.3.0/access/Ownable.sol";
import {ERC2981} from "@openzeppelin/contracts@5.3.0/token/common/ERC2981.sol";

contract Arokyl is ERC721, ERC721Pausable, ERC2981, Ownable {
    uint256 public constant MAX_SUPPLY = 10000;
    uint256 public totalMinted;

    bool public publicMintPhase;
    bool public allowListMintPhase;

    uint256 public constant PUBLIC_PRICE = 0.01 ether;
    uint256 public constant ALLOWLIST_PRICE = 0.001 ether;

    string private _baseTokenURI;

    mapping(address => bool) public allowList;
    mapping(address => uint256) public mintedPerWallet;

    uint256 public constant MAX_PER_WALLET = 5;

    constructor(address initialOwner, string memory baseURI) 
        ERC721("Arokyl", "ARY")
        Ownable(initialOwner)
    {
        _baseTokenURI = baseURI;
        // Set default royalty (5%)
        _setDefaultRoyalty(initialOwner, 500); // 500 basis points = 5%
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function setBaseURI(string calldata newBaseURI) external onlyOwner {
        _baseTokenURI = newBaseURI;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function togglePublicMint(bool status) external onlyOwner {
        publicMintPhase = status;
    }

    function toggleAllowListMint(bool status) external onlyOwner {
        allowListMintPhase = status;
    }

    function addToAllowList(address[] calldata addresses) external onlyOwner {
        for (uint256 i = 0; i < addresses.length; i++) {
            allowList[addresses[i]] = true;
        }
    }

    function publicMint() external payable returns (uint256 tokenId) {
        require(publicMintPhase, "Public mint closed");
        require(msg.value == PUBLIC_PRICE, "Incorrect ETH");
        require(mintedPerWallet[msg.sender] < MAX_PER_WALLET, "Wallet limit exceeded");
        tokenId = _mintToken(msg.sender);
    }

    function allowListMint() external payable returns (uint256 tokenId) {
        require(allowListMintPhase, "Allowlist mint closed");
        require(allowList[msg.sender], "Not on allowlist");
        require(msg.value == ALLOWLIST_PRICE, "Incorrect ETH");
        require(mintedPerWallet[msg.sender] < MAX_PER_WALLET, "Wallet limit exceeded");
        tokenId = _mintToken(msg.sender);
    }

    function airdrop(address to, uint256 amount) external onlyOwner {
        for (uint256 i = 0; i < amount; i++) {
            _mintToken(to);
        }
    }

   function burn(uint256 tokenId) external {
    address owner = ownerOf(tokenId);
    require(
        msg.sender == owner ||
        getApproved(tokenId) == msg.sender ||
        isApprovedForAll(owner, msg.sender),
        "Not owner nor approved"
    );
    _burn(tokenId);
}


    function withdraw(address payable to) external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "Nothing to withdraw");
        (bool success, ) = to.call{value: balance}("");
        require(success, "Transfer failed");
    }

    function _mintToken(address to) internal returns (uint256 tokenId) {
        require(totalMinted < MAX_SUPPLY, "Max supply reached");
        tokenId = ++totalMinted;
        mintedPerWallet[to]++;
        _safeMint(to, tokenId);
    }

  // Overrides for ERC721 and ERC721Pausable
function _update(address to, uint256 tokenId, address auth)
    internal
    override(ERC721, ERC721Pausable)
    returns (address)
{
    return super._update(to, tokenId, auth);
}

// Overrides for ERC721 and ERC2981
function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC2981)
    returns (bool)
{
    return super.supportsInterface(interfaceId);
}
}