import {
  getListing,
  isGetListingSupported,
  isListingValid
} from "./chunk-M3WBOOWW.js";
import "./chunk-QLCPWJYR.js";
import "./chunk-GGVPULQZ.js";
import "./chunk-6RU56BH7.js";
import "./chunk-QVNJVROL.js";
import {
  once,
  prepareContractCall
} from "./chunk-6XF6HOWC.js";
import "./chunk-CXAZLQ2Z.js";
import "./chunk-QC3K2OKT.js";
import "./chunk-UY2SRO54.js";
import {
  isNativeTokenAddress
} from "./chunk-673YCYST.js";
import {
  detectMethod
} from "./chunk-PK5NRJAC.js";
import "./chunk-7VZHRFCE.js";
import "./chunk-CNLOA7AS.js";
import "./chunk-AG4NO6K6.js";
import "./chunk-NPJBMLFY.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import "./chunk-U7TO6S3N.js";
import "./chunk-LO5SQBMX.js";
import "./chunk-EIVAOYE5.js";
import "./chunk-67BSOYLQ.js";
import "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import "./chunk-I5DK3TWY.js";
import "./chunk-NJUWOGZE.js";
import "./chunk-TFBEDS4S.js";
import "./chunk-GOA7IGSB.js";
import "./chunk-QHKZ43P6.js";
import "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/extensions/marketplace/__generated__/IDirectListings/write/buyFromListing.js
var FN_SELECTOR = "0x704232dc";
var FN_INPUTS = [
  {
    type: "uint256",
    name: "_listingId"
  },
  {
    type: "address",
    name: "_buyFor"
  },
  {
    type: "uint256",
    name: "_quantity"
  },
  {
    type: "address",
    name: "_currency"
  },
  {
    type: "uint256",
    name: "_expectedTotalPrice"
  }
];
var FN_OUTPUTS = [];
function isBuyFromListingSupported(availableSelectors) {
  return detectMethod({
    availableSelectors,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS]
  });
}
function buyFromListing(options) {
  const asyncOptions = once(async () => {
    return "asyncParams" in options ? await options.asyncParams() : options;
  });
  return prepareContractCall({
    contract: options.contract,
    method: [FN_SELECTOR, FN_INPUTS, FN_OUTPUTS],
    params: async () => {
      const resolvedOptions = await asyncOptions();
      return [
        resolvedOptions.listingId,
        resolvedOptions.buyFor,
        resolvedOptions.quantity,
        resolvedOptions.currency,
        resolvedOptions.expectedTotalPrice
      ];
    },
    value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.value;
    },
    accessList: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.accessList;
    },
    gas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gas;
    },
    gasPrice: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.gasPrice;
    },
    maxFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxFeePerGas;
    },
    maxPriorityFeePerGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.maxPriorityFeePerGas;
    },
    nonce: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.nonce;
    },
    extraGas: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.extraGas;
    },
    erc20Value: async () => {
      var _a;
      return (_a = (await asyncOptions()).overrides) == null ? void 0 : _a.erc20Value;
    }
  });
}

// node_modules/thirdweb/dist/esm/extensions/marketplace/direct-listings/write/buyFromListing.js
function buyFromListing2(options) {
  return buyFromListing({
    contract: options.contract,
    asyncParams: async () => {
      const listing = await getListing({
        contract: options.contract,
        listingId: options.listingId
      });
      const listingValidity = await isListingValid({
        contract: options.contract,
        listing,
        quantity: options.quantity
      });
      if (!listingValidity.valid) {
        throw new Error(listingValidity.reason);
      }
      return {
        listingId: options.listingId,
        quantity: options.quantity,
        buyFor: options.recipient,
        currency: listing.currencyContractAddress,
        expectedTotalPrice: listing.pricePerToken * options.quantity,
        overrides: {
          value: isNativeTokenAddress(listing.currencyContractAddress) ? listing.pricePerToken * options.quantity : 0n,
          extraGas: 50000n
          // add extra gas to account for router call
        }
      };
    }
  });
}
function isBuyFromListingSupported2(availableSelectors) {
  return isBuyFromListingSupported(availableSelectors) && isGetListingSupported(availableSelectors);
}
export {
  buyFromListing2 as buyFromListing,
  isBuyFromListingSupported2 as isBuyFromListingSupported
};
//# sourceMappingURL=buyFromListing-NAQIOY7I.js.map
