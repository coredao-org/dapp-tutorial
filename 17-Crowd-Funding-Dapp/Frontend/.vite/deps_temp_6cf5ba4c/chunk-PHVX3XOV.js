import {
  approve
} from "./chunk-TTOANXGP.js";
import {
  estimateGas,
  getDefaultGasOverrides
} from "./chunk-JZC47WAY.js";
import {
  resolvePromisedValue
} from "./chunk-QC3K2OKT.js";
import {
  toEther
} from "./chunk-UY2SRO54.js";
import {
  getContract
} from "./chunk-7VZHRFCE.js";
import {
  stringify
} from "./chunk-NJUWOGZE.js";
import {
  defineChain,
  getCachedChain
} from "./chunk-TFBEDS4S.js";
import {
  getThirdwebDomains
} from "./chunk-QHKZ43P6.js";
import {
  getClientFetch
} from "./chunk-3GSJ2FQJ.js";

// node_modules/thirdweb/dist/esm/chains/chain-definitions/base-sepolia.js
var baseSepolia = defineChain({
  id: 84532,
  name: "Base Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  blockExplorers: [
    {
      name: "Basescan",
      url: "https://sepolia.basescan.org",
      apiUrl: "https://api-sepolia.basescan.org/api"
    }
  ],
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/base.js
var base = defineChain({
  id: 8453,
  name: "Base",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  blockExplorers: [
    {
      name: "Basescan",
      url: "https://basescan.org",
      apiUrl: "https://api.basescan.org/api"
    }
  ]
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/optimism-sepolia.js
var optimismSepolia = defineChain({
  id: 11155420,
  name: "OP Sepolia",
  nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
  blockExplorers: [
    {
      name: "Blockscout",
      url: "https://optimism-sepolia.blockscout.com",
      apiUrl: "https://optimism-sepolia.blockscout.com/api"
    }
  ],
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/optimism.js
var optimism = defineChain({
  id: 10,
  name: "OP Mainnet",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  blockExplorers: [
    {
      name: "Optimism Explorer",
      url: "https://optimistic.etherscan.io",
      apiUrl: "https://api-optimistic.etherscan.io"
    }
  ]
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/zora-sepolia.js
var zoraSepolia = defineChain({
  id: 999999999,
  name: "Zora Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Zora Sepolia",
    symbol: "ETH"
  },
  blockExplorers: [
    {
      name: "Zora Sepolia Explorer",
      url: "https://sepolia.explorer.zora.energy/",
      apiUrl: "https://sepolia.explorer.zora.energy/api"
    }
  ],
  testnet: true
});

// node_modules/thirdweb/dist/esm/chains/chain-definitions/zora.js
var zora = defineChain({
  id: 7777777,
  name: "Zora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH"
  },
  blockExplorers: [
    {
      name: "Explorer",
      url: "https://explorer.zora.energy",
      apiUrl: "https://explorer.zora.energy/api"
    }
  ]
});

// node_modules/thirdweb/dist/esm/chains/constants.js
var opChains = [
  base.id,
  baseSepolia.id,
  optimism.id,
  optimismSepolia.id,
  zora.id,
  zoraSepolia.id,
  34443,
  // mode
  919,
  // mode testnet
  42220,
  // celo
  44787,
  // celo testnet
  204,
  // opBNB
  5611
  // opBNB testnet
];
function isOpStackChain(chain) {
  return opChains.includes(chain.id);
}

// node_modules/thirdweb/dist/esm/transaction/actions/estimate-gas-cost.js
async function estimateGasCost(options) {
  var _a;
  const { transaction } = options;
  const from = options.from ?? ((_a = options.account) == null ? void 0 : _a.address) ?? void 0;
  const gasLimit = await resolvePromisedValue(transaction.gas) || await estimateGas({ transaction, from });
  const fees = await getDefaultGasOverrides(transaction.client, transaction.chain);
  const gasPrice = fees.maxFeePerGas || fees.gasPrice;
  if (!gasPrice) {
    throw new Error(`Unable to determine gas price for chain ${transaction.chain.id}`);
  }
  let l1Fee;
  if (isOpStackChain(transaction.chain)) {
    const { estimateL1Fee } = await import("./estimate-l1-fee-B2LECVR2.js");
    l1Fee = await estimateL1Fee({
      transaction
    });
  } else {
    l1Fee = 0n;
  }
  const wei = gasLimit * gasPrice + l1Fee;
  return {
    ether: toEther(wei),
    wei
  };
}

// node_modules/thirdweb/dist/esm/pay/utils/definitions.js
var getPayBaseUrl = () => {
  const payDomain = getThirdwebDomains().pay;
  return payDomain.startsWith("localhost") ? `http://${payDomain}` : `https://${payDomain}`;
};
var getPayBuyWithCryptoStatusUrl = () => `${getPayBaseUrl()}/buy-with-crypto/status/v1`;
var getPayBuyWithCryptoQuoteEndpoint = () => `${getPayBaseUrl()}/buy-with-crypto/quote/v1`;
var getPayBuyWithCryptoTransferEndpoint = () => `${getPayBaseUrl()}/buy-with-crypto/transfer/v1`;
var getPayBuyWithFiatQuoteEndpoint = () => `${getPayBaseUrl()}/buy-with-fiat/quote/v1`;
var getPayBuyWithFiatStatusEndpoint = () => `${getPayBaseUrl()}/buy-with-fiat/status/v1`;
var getPayBuyWithFiatHistoryEndpoint = () => `${getPayBaseUrl()}/buy-with-fiat/history/v1`;
var getPayBuyWithCryptoHistoryEndpoint = () => `${getPayBaseUrl()}/buy-with-crypto/history/v1`;
var getPaySupportedDestinations = () => `${getPayBaseUrl()}/destination-tokens/v1`;
var getPaySupportedSources = () => `${getPayBaseUrl()}/buy-with-crypto/source-tokens/v1`;
var getPayBuyHistoryEndpoint = () => `${getPayBaseUrl()}/wallet/history/v1`;

// node_modules/thirdweb/dist/esm/pay/buyWithCrypto/getQuote.js
async function getBuyWithCryptoQuote(params) {
  var _a;
  try {
    const clientFetch = getClientFetch(params.client);
    const response = await clientFetch(getPayBuyWithCryptoQuoteEndpoint(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: stringify({
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        fromChainId: params.fromChainId.toString(),
        fromTokenAddress: params.fromTokenAddress,
        toChainId: params.toChainId.toString(),
        toTokenAddress: params.toTokenAddress,
        fromAmount: params.fromAmount,
        toAmount: params.toAmount,
        maxSlippageBPS: params.maxSlippageBPS,
        intentId: params.intentId,
        purchaseData: params.purchaseData
      })
    });
    if (!response.ok) {
      const errorObj = await response.json();
      if (errorObj && "error" in errorObj) {
        throw errorObj;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()).result;
    const swapRoute = {
      transactionRequest: {
        chain: getCachedChain(data.transactionRequest.chainId),
        client: params.client,
        data: data.transactionRequest.data,
        to: data.transactionRequest.to,
        value: BigInt(data.transactionRequest.value),
        gas: BigInt(data.transactionRequest.gasLimit),
        gasPrice: BigInt(data.transactionRequest.gasPrice)
      },
      approval: data.approval ? approve({
        contract: getContract({
          client: params.client,
          address: data.approval.tokenAddress,
          chain: getCachedChain(data.approval.chainId)
        }),
        spender: (_a = data.approval) == null ? void 0 : _a.spenderAddress,
        amountWei: BigInt(data.approval.amountWei)
      }) : void 0,
      swapDetails: {
        fromAddress: data.fromAddress,
        toAddress: data.toAddress,
        fromToken: data.fromToken,
        toToken: data.toToken,
        fromAmount: data.fromAmount,
        fromAmountWei: data.fromAmountWei,
        toAmountMinWei: data.toAmountMinWei,
        toAmountMin: data.toAmountMin,
        toAmountWei: data.toAmountWei,
        toAmount: data.toAmount,
        estimated: data.estimated,
        maxSlippageBPS: data.maxSlippageBPS
      },
      paymentTokens: data.paymentTokens,
      processingFees: data.processingFees,
      client: params.client
    };
    return swapRoute;
  } catch (error) {
    console.error("Error getting buy with crypto quote", error);
    throw error;
  }
}

// node_modules/thirdweb/dist/esm/pay/buyWithCrypto/getStatus.js
async function getBuyWithCryptoStatus(buyWithCryptoTransaction) {
  var _a;
  try {
    if (!buyWithCryptoTransaction.transactionHash) {
      throw new Error("Transaction hash is required");
    }
    const queryString = new URLSearchParams({
      transactionHash: buyWithCryptoTransaction.transactionHash
    }).toString();
    const url = `${getPayBuyWithCryptoStatusUrl()}?${queryString}`;
    const response = await getClientFetch(buyWithCryptoTransaction.client)(url);
    if (!response.ok) {
      (_a = response.body) == null ? void 0 : _a.cancel();
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()).result;
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw new Error(`Fetch failed: ${error}`);
  }
}

// node_modules/thirdweb/dist/esm/pay/buyWithCrypto/getTransfer.js
async function getBuyWithCryptoTransfer(params) {
  try {
    const clientFetch = getClientFetch(params.client);
    const response = await clientFetch(getPayBuyWithCryptoTransferEndpoint(), {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: stringify({
        fromAddress: params.fromAddress,
        toAddress: params.toAddress,
        chainId: params.chainId,
        tokenAddress: params.tokenAddress,
        amount: params.amount,
        purchaseData: params.purchaseData
      })
    });
    if (!response.ok) {
      const errorObj = await response.json();
      if (errorObj && "error" in errorObj) {
        throw errorObj;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()).result;
    const transfer = {
      transactionRequest: {
        chain: getCachedChain(data.transactionRequest.chainId),
        client: params.client,
        data: data.transactionRequest.data,
        to: data.transactionRequest.to,
        value: BigInt(data.transactionRequest.value),
        gas: BigInt(data.transactionRequest.gasLimit)
      },
      approval: data.approval ? approve({
        contract: getContract({
          client: params.client,
          address: data.approval.tokenAddress,
          chain: getCachedChain(data.approval.chainId)
        }),
        spender: data.approval.spenderAddress,
        amountWei: BigInt(data.approval.amountWei)
      }) : void 0,
      fromAddress: data.fromAddress,
      toAddress: data.toAddress,
      paymentToken: data.paymentToken,
      processingFee: data.processingFee,
      estimatedGasCostUSDCents: data.estimatedGasCostUSDCents,
      client: params.client
    };
    return transfer;
  } catch (error) {
    console.error("Error getting buy with crypto transfer", error);
    throw error;
  }
}

export {
  estimateGasCost,
  getPayBuyWithFiatQuoteEndpoint,
  getPayBuyWithFiatStatusEndpoint,
  getPayBuyWithFiatHistoryEndpoint,
  getPayBuyWithCryptoHistoryEndpoint,
  getPaySupportedDestinations,
  getPaySupportedSources,
  getPayBuyHistoryEndpoint,
  getBuyWithCryptoQuote,
  getBuyWithCryptoStatus,
  getBuyWithCryptoTransfer
};
//# sourceMappingURL=chunk-PHVX3XOV.js.map
