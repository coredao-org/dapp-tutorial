import {
  areUint8ArraysEqual,
  compareUint8Arrays,
  concatUint8Arrays
} from "./chunk-VJOHABJ4.js";
import {
  toUnits
} from "./chunk-UY2SRO54.js";
import {
  ZERO_ADDRESS,
  isNativeTokenAddress
} from "./chunk-673YCYST.js";
import {
  download
} from "./chunk-5CO5G7XZ.js";
import "./chunk-ZNEQLT5Q.js";
import "./chunk-YPFLLHK6.js";
import "./chunk-7EY5MWB2.js";
import {
  encodePacked
} from "./chunk-LO5SQBMX.js";
import {
  keccak256
} from "./chunk-67BSOYLQ.js";
import {
  hexToBytes
} from "./chunk-B7XHB4Z2.js";
import "./chunk-O6UZ65WN.js";
import {
  maxUint256
} from "./chunk-GINVHONX.js";
import "./chunk-O6LGEXJ4.js";
import "./chunk-ME5GAE4N.js";
import "./chunk-3GSJ2FQJ.js";
import "./chunk-P7ZDTV2E.js";
import "./chunk-SNQ54XRM.js";
import {
  uint8ArrayToHex
} from "./chunk-BBNNHC5G.js";
import "./chunk-Y3WKETHV.js";
import "./chunk-SPELR2RL.js";
import "./chunk-SEVZ5PBP.js";

// node_modules/thirdweb/dist/esm/merkletree/MerkleTree.js
var MerkleTree = class {
  constructor(leaves) {
    Object.defineProperty(this, "leaves", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "layers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    this.leaves = leaves.map((el) => el instanceof Uint8Array ? el : hexToBytes(el));
    this.leaves = this.leaves.sort(compareUint8Arrays);
    this.createHashes(this.leaves);
  }
  getHexRoot() {
    return uint8ArrayToHex(this.getRoot());
  }
  getHexProof(leaf, index) {
    return this.getProof(leaf, index).map((item) => uint8ArrayToHex(item.data));
  }
  // private below
  createHashes(nodes) {
    this.layers = [nodes];
    while (nodes.length > 1) {
      const layerIndex = this.layers.length;
      this.layers.push([]);
      const layerLimit = nodes.length;
      for (let i = 0; i < nodes.length; i += 2) {
        if (i >= layerLimit) {
          this.layers[layerIndex].push(...nodes.slice(layerLimit));
          break;
        }
        if (i + 1 === nodes.length) {
          if (nodes.length % 2 === 1) {
            this.layers[layerIndex].push(nodes[i]);
            continue;
          }
        }
        const left = nodes[i];
        const right = i + 1 === nodes.length ? left : nodes[i + 1];
        const combined = [left, right];
        combined.sort(compareUint8Arrays);
        const hash = keccak256(concatUint8Arrays(combined), "bytes");
        this.layers[layerIndex].push(hash);
      }
      nodes = this.layers[layerIndex];
    }
  }
  getRoot() {
    if (this.layers.length === 0) {
      return new Uint8Array();
    }
    return this.layers[this.layers.length - 1][0] || new Uint8Array();
  }
  getProof(leaf, index) {
    if (typeof leaf === "undefined") {
      throw new Error("leaf is required");
    }
    leaf = leaf instanceof Uint8Array ? leaf : hexToBytes(leaf);
    const proof = [];
    if (!Number.isInteger(index)) {
      index = -1;
      for (let i = 0; i < this.leaves.length; i++) {
        if (areUint8ArraysEqual(leaf, this.leaves[i])) {
          index = i;
        }
      }
    }
    if (index <= -1) {
      return [];
    }
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      const isRightNode = index % 2;
      const pairIndex = isRightNode ? (
        // @ts-expect-error - issue from original code
        index - 1
      ) : (
        // Proof Generation for Non-Bitcoin Trees
        // @ts-expect-error - issue from original code
        index + 1
      );
      if (pairIndex < layer.length) {
        proof.push({
          position: isRightNode ? "left" : "right",
          data: layer[pairIndex]
        });
      }
      index = index / 2 | 0;
    }
    return proof;
  }
};

// node_modules/thirdweb/dist/esm/utils/extensions/drops/convert-quantity.js
function convertQuantity(options) {
  const { quantity, tokenDecimals } = options;
  if (quantity === "unlimited") {
    return maxUint256;
  }
  return toUnits(quantity, tokenDecimals);
}

// node_modules/thirdweb/dist/esm/utils/extensions/drops/hash-entry.js
async function hashEntry(options) {
  const currencyAddress = options.entry.currencyAddress || ZERO_ADDRESS;
  const currencyDecimals = await (async () => {
    if (isNativeTokenAddress(currencyAddress) || currencyAddress === ZERO_ADDRESS) {
      return 18;
    }
    const [{ getContract }, { decimals: getDecimals }] = await Promise.all([
      import("./contract-GEGWMZWS.js"),
      import("./decimals-OWVEHM45.js")
    ]);
    const currencyContract = getContract({
      address: currencyAddress,
      chain: options.chain,
      client: options.client
    });
    return await getDecimals({ contract: currencyContract });
  })();
  return keccak256(encodePacked(["address", "uint256", "uint256", "address"], [
    options.entry.address,
    convertQuantity({
      quantity: options.entry.maxClaimable || "unlimited",
      tokenDecimals: options.tokenDecimals
    }),
    convertQuantity({
      quantity: options.entry.price || "unlimited",
      tokenDecimals: currencyDecimals
    }),
    currencyAddress
  ]));
}

// node_modules/thirdweb/dist/esm/utils/extensions/drops/fetch-proofs-for-claimers.js
async function fetchProofsForClaimer(options) {
  const { contract, merkleTreeUri, claimer } = options;
  const hashEntryFn = options.hashEntry || hashEntry;
  const response = await download({
    client: contract.client,
    uri: merkleTreeUri
  });
  const merkleInfo = await response.json();
  const shardId = claimer.slice(2, 2 + merkleInfo.shardNybbles).toLowerCase();
  const uri = merkleInfo.baseUri.endsWith("/") ? merkleInfo.baseUri : `${merkleInfo.baseUri}/`;
  let shardData;
  try {
    const constructedShardUri = `${uri}${shardId}.json`;
    const shard = await download({
      client: contract.client,
      uri: constructedShardUri
    });
    shardData = await shard.json();
  } catch {
    return null;
  }
  const hashedEntries = await Promise.all(shardData.entries.map(async (entry2) => {
    return hashEntryFn({
      entry: entry2,
      chain: contract.chain,
      client: contract.client,
      tokenDecimals: options.tokenDecimals
    });
  }));
  const tree = new MerkleTree(hashedEntries);
  const entry = shardData.entries.find((i) => i.address.toLowerCase() === claimer.toLowerCase());
  if (!entry) {
    return null;
  }
  const proof = tree.getHexProof(await hashEntryFn({
    entry,
    chain: contract.chain,
    client: contract.client,
    tokenDecimals: options.tokenDecimals
  })).concat(shardData.proofs);
  const currencyAddress = entry.currencyAddress || ZERO_ADDRESS;
  const currencyDecimals = await (async () => {
    if (isNativeTokenAddress(currencyAddress) || currencyAddress === ZERO_ADDRESS) {
      return 18;
    }
    const [{ getContract }, { decimals: getDecimals }] = await Promise.all([
      import("./contract-GEGWMZWS.js"),
      import("./decimals-OWVEHM45.js")
    ]);
    const currencyContract = getContract({
      address: currencyAddress,
      chain: contract.chain,
      client: contract.client
    });
    return await getDecimals({ contract: currencyContract });
  })();
  return {
    proof,
    quantityLimitPerWallet: convertQuantity({
      quantity: entry.maxClaimable || "unlimited",
      tokenDecimals: options.tokenDecimals
    }),
    pricePerToken: convertQuantity({
      quantity: entry.price || "unlimited",
      tokenDecimals: currencyDecimals
    }),
    currency: currencyAddress
  };
}
export {
  fetchProofsForClaimer
};
//# sourceMappingURL=fetch-proofs-for-claimers-NQNU6O2D.js.map
