import { ethers } from 'ethers'

declare global {
  interface Window {
    ethereum: ethers.Eip6963Provider
  }
}