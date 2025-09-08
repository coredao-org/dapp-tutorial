import {
  isERC1155,
  isERC721
} from "./chunk-QLCPWJYR.js";
import {
  getCurrencyMetadata
} from "./chunk-GGVPULQZ.js";
import {
  eth_getBlockByNumber
} from "./chunk-CXAZLQ2Z.js";
import {
  toTokens
} from "./chunk-UY2SRO54.js";
import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import {
  readContract
} from "./chunk-AG4NO6K6.js";
import {
  getRpcClient
} from "./chunk-I5DK3TWY.js";

// node_modules/thirdweb/dist/esm/extensions/marketplace/utils.js
async function getNFTAsset(options) {
  const [erc721, erc1155] = await Promise.all([
    isERC721(options),
    isERC1155(options)
  ]);
  switch (true) {
    case erc721: {
      const { getNFT } = await import("./getNFT-T7TVIXIV.js");
      return getNFT(options);
    }
    case erc1155: {
      const { getNFT } = await import("./getNFT-CWYYXL36.js");
      return getNFT(options);
    }
    default: {
      throw new Error("Contract is neither ERC721 nor ERC1155.");
    }
  }
}
function computeStatus(options) {
  switch (options.listingStatus) {
    case 1: {
      if (options.startTimestamp > options.blockTimeStamp) {
        return "CREATED";
      }
      if (options.endTimestamp < options.blockTimeStamp) {
        return "EXPIRED";
      }
      return "ACTIVE";
    }
    case 2: {
      return "COMPLETED";
    }
    case 3: {
      return "CANCELLED";
    }
    default: {
      throw new Error(`Invalid listing status: "${options.listingStatus}"`);
    }
  }
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/utils.js
async function mapDirectListing(options) {
  const { latestBlock, rawListing } = options;
  const status = computeStatus({
    listingStatus: rawListing.status,
    blockTimeStamp: latestBlock.timestamp,
    startTimestamp: rawListing.startTimestamp,
    endTimestamp: rawListing.endTimestamp
  });
  const [currencyValuePerToken, nftAsset] = await Promise.all([
    getCurrencyMetadata({
      contract: getContract({
        ...options.contract,
        address: rawListing.currency
      })
    }),
    getNFTAsset({
      ...options,
      contract: getContract({
        ...options.contract,
        address: rawListing.assetContract
      }),
      tokenId: rawListing.tokenId
    })
  ]);
  return {
    id: rawListing.listingId,
    creatorAddress: rawListing.listingCreator,
    assetContractAddress: rawListing.assetContract,
    tokenId: rawListing.tokenId,
    quantity: rawListing.quantity,
    currencyContractAddress: rawListing.currency,
    currencyValuePerToken: {
      ...currencyValuePerToken,
      value: rawListing.pricePerToken,
      displayValue: toTokens(rawListing.pricePerToken, currencyValuePerToken.decimals)
    },
    pricePerToken: rawListing.pricePerToken,
    asset: nftAsset,
    startTimeInSeconds: rawListing.startTimestamp,
    endTimeInSeconds: rawListing.endTimestamp,
    isReservedListing: rawListing.reserved,
    status,
    type: "direct-listing"
  };
}
async function isListingValid(options) {
  const assetContract = getContract({
    ...options.contract,
    address: options.listing.assetContractAddress
  });
  const [erc721, erc1155] = await Promise.all([
    isERC721({ contract: assetContract }),
    isERC1155({ contract: assetContract })
  ]);
  if (erc721) {
    const [{ isApprovedForAll }, { getApproved }, { ownerOf }] = await Promise.all([
      import("./isApprovedForAll-CG3FQCVQ.js"),
      import("./getApproved-UMVYKWJJ.js"),
      import("./ownerOf-JJ32SN7R.js")
    ]);
    const [approvedForAll, approvedOperator, tokenOwner] = await Promise.all([
      isApprovedForAll({
        contract: assetContract,
        owner: options.listing.creatorAddress,
        // the marketplace contract address has to be approved to transfer the token
        operator: options.contract.address
      }),
      getApproved({
        contract: assetContract,
        tokenId: options.listing.tokenId
      }).catch(() => ""),
      ownerOf({
        contract: assetContract,
        tokenId: options.listing.tokenId
      })
    ]);
    if (!approvedForAll && approvedOperator !== options.contract.address) {
      return { valid: false, reason: "Asset not approved for marketplace." };
    }
    if (tokenOwner !== options.listing.creatorAddress) {
      return {
        valid: false,
        reason: "Listing creator no longer owns this token."
      };
    }
    return {
      valid: true
    };
  }
  if (erc1155) {
    const [{ isApprovedForAll }, { balanceOf }] = await Promise.all([
      import("./isApprovedForAll-JGBKL36G.js"),
      import("./balanceOf-77XLALLF.js")
    ]);
    const [approvedForAll, balance] = await Promise.all([
      isApprovedForAll({
        contract: assetContract,
        owner: options.listing.creatorAddress,
        // the marketplace contract address has to be approved to transfer the token
        operator: options.contract.address
      }),
      balanceOf({
        contract: assetContract,
        owner: options.listing.creatorAddress,
        tokenId: options.listing.tokenId
      })
    ]);
    if (!approvedForAll) {
      return { valid: false, reason: "Asset not approved for marketplace." };
    }
    const quantityWanted = options.quantity || options.listing.quantity;
    if (balance < quantityWanted) {
      return {
        valid: false,
        reason: "Seller does not have enough balance of token to fulfill order."
      };
    }
    return {
      valid: true
    };
  }
  return {
    valid: false,
    reason: "AssetContract must implement ERC 1155 or ERC 721."
  };
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/__generated__/IDirectListings/read/getListing.js
var FN_SELECTOR = "0x107a274a";
var FN_INPUTS = [
  {
    type: "uint256",
    name: "_listingId"
  }
];
var FN_OUTPUTS = [
  {
    type: "tuple",
    name: "listing",
    components: [
      {
        type: "uint256",
        name: "listingId"
      },
      {
        type: "uint256",
        name: "tokenId"
      },
      {
        type: "uint256",
        name: "quantity"
      },
      {
        type: "uint256",
        name: "pricePerToken"
      },
      {
        type: "uint128",
        name: "startTimestamp"
      },
      {
        type: "uint128",
        name: "endTimestamp"
      },
      {
        type: "address",
        name: "listingCreator"
      },
      {
        type: "address",
        name: "assetContract"
      },
      {
        type: "address",
        name: "currency"
      },
      {
        type: "uint8",
        name: "tokenType"
      },
      {
        type: "uint8",
        name: "status"
      },
      {
        type: "bool",
        name: "reserved"
      }
    ]
  }
];
function isGetListingSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
async function getListing(options) {
  return readContract({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: [options.listingId]
  });
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/read/getListing.js
async function getListing2(options) {
  const rpcClient = getRpcClient(options.contract);
  const [rawListing, latestBlock] = await Promise.all([
    getListing(options),
    eth_getBlockByNumber(rpcClient, {
      blockTag: "latest"
    })
  ]);
  return mapDirectListing({
    contract: options.contract,
    latestBlock,
    rawListing
  });
}
function isGetListingSupported2(availableSelectors) {
  return isGetListingSupported(availableSelectors);
}

export {
  isListingValid,
  getListing2 as getListing,
  isGetListingSupported2 as isGetListingSupported
};
//# sourceMappingURL=chunk-M3WBOOWW.js.map
