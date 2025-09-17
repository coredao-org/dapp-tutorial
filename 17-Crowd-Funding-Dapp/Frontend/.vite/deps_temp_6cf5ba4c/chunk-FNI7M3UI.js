import {
  getAddress
} from "./chunk-EIVAOYE5.js";
import {
  getThirdwebDomains
} from "./chunk-QHKZ43P6.js";

// node_modules/thirdweb/dist/esm/wallets/smart/lib/constants.js
var DEBUG = false;
var DUMMY_SIGNATURE = "0xfffffffffffffffffffffffffffffff0000000000000000000000000000000007aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa1c";
var DEFAULT_ACCOUNT_FACTORY_V0_6 = "0x85e23b94e7F5E9cC1fF78BCe78cfb15B81f0DF00";
var DEFAULT_ACCOUNT_FACTORY_V0_7 = "0x4be0ddfebca9a5a4a617dee4dece99e7c862dceb";
var ENTRYPOINT_ADDRESS_v0_6 = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789";
var ENTRYPOINT_ADDRESS_v0_7 = "0x0000000071727De22E5E9d8BAf0edAc6f37da032";
var MANAGED_ACCOUNT_GAS_BUFFER = 50000n;
var getDefaultAccountFactory = (entryPointAddress) => {
  const version = getEntryPointVersion(entryPointAddress || ENTRYPOINT_ADDRESS_v0_6);
  if (version === "v0.7") {
    return DEFAULT_ACCOUNT_FACTORY_V0_7;
  }
  return DEFAULT_ACCOUNT_FACTORY_V0_6;
};
var getDefaultBundlerUrl = (chain) => {
  const domain = getThirdwebDomains().bundler;
  if (domain.startsWith("localhost:")) {
    return `http://${domain}/v2?chain=${chain.id}`;
  }
  return `https://${chain.id}.${domain}/v2`;
};
var getEntryPointVersion = (address) => {
  const checksummedAddress = getAddress(address);
  if (checksummedAddress === ENTRYPOINT_ADDRESS_v0_6) {
    return "v0.6";
  }
  if (checksummedAddress === ENTRYPOINT_ADDRESS_v0_7) {
    return "v0.7";
  }
  throw new Error("Unknown paymaster version");
};

export {
  DEBUG,
  DUMMY_SIGNATURE,
  ENTRYPOINT_ADDRESS_v0_6,
  ENTRYPOINT_ADDRESS_v0_7,
  MANAGED_ACCOUNT_GAS_BUFFER,
  getDefaultAccountFactory,
  getDefaultBundlerUrl,
  getEntryPointVersion
};
//# sourceMappingURL=chunk-FNI7M3UI.js.map
