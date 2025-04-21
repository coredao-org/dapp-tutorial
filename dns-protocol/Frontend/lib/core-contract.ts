import { ethers } from "ethers"

// This is a placeholder for the actual contract ABI
// In a real application, you would import the actual ABI from a JSON file
const CORE_DNS_ABI = [
  // Example ABI entries
  "function registerDomain(string name) public",
  "function getOwner(string name) public view returns (address)",
  "function getUserDomains(address owner) public view returns (string[])",
  "function getAllDomains() public view returns (string[])",
]

// Contract address - replace with actual contract address
const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"

export class CoreContract {
  private contract: ethers.Contract | null = null

  constructor(provider: ethers.BrowserProvider, signer: ethers.JsonRpcSigner) {
    this.contract = new ethers.Contract(CONTRACT_ADDRESS, CORE_DNS_ABI, signer)
  }

  async registerDomain(name: string): Promise<ethers.TransactionResponse> {
    if (!this.contract) throw new Error("Contract not initialized")

    // Ensure domain has .core suffix
    const formattedName = this.formatDomainName(name)

    // Call the contract method
    return await this.contract.registerDomain(formattedName)
  }

  async getOwner(name: string): Promise<string> {
    if (!this.contract) throw new Error("Contract not initialized")

    // Ensure domain has .core suffix
    const formattedName = this.formatDomainName(name)

    // Call the contract method
    return await this.contract.getOwner(formattedName)
  }

  async getUserDomains(owner: string): Promise<string[]> {
    if (!this.contract) throw new Error("Contract not initialized")

    // Call the contract method
    return await this.contract.getUserDomains(owner)
  }

  async getAllDomains(): Promise<string[]> {
    if (!this.contract) throw new Error("Contract not initialized")

    // Call the contract method
    return await this.contract.getAllDomains()
  }

  private formatDomainName(name: string): string {
    if (!name) return ""

    const trimmed = name.trim().toLowerCase()
    if (trimmed.endsWith(".core")) return trimmed
    return `${trimmed}.core`
  }
}
