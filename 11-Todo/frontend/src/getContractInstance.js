

import contractABI from "./abi.json";

import {createWalletClient, custom, getAddress, getContract} from "viem";
import {coreTestnet2} from "viem/chains";

const client = async() => {
  const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' }) 
  return createWalletClient({
    chain: coreTestnet2,
    transport: custom(window.ethereum),
    account: account
  });
};
// 0xE04352c40BE99c24971940494Bc96B7Fc495A6A1

// 0xf4Cc3E6A0EFE70c007243591B9d500760361Bad2 formal

const getContractInstance = async() => {
  return getContract({
    abi: contractABI,
    address: getAddress("0xf4Cc3E6A0EFE70c007243591B9d500760361Bad2"),
    client: await client()
  })
}

export default getContractInstance;

