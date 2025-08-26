export interface Token {
  name: string
  symbol: string
  address: string
  decimals: number
  color: string
  maxMint: number
}

export const tokens: Token[] = [
  {
    name: "Test DAI",
    symbol: "tDAI",
    address: "0x7a8eF80C8136862fc7402E8Cfb9Cd1ea9c3BFB4B", // Placeholder address
    decimals: 18,
    color: "#F5AC37",
    maxMint: 10000,
  },
  {
    name: "Test USDC",
    symbol: "tUSDC",
    address: "0x2bE22845339D49E9b296AbA5462D78F2e929DB05", // Placeholder address
    decimals: 6,
    color: "#2775CA",
    maxMint: 10000,
  },
  {
    name: "Test USDT",
    symbol: "tUSDT",
    address: "0x367a5a4C14214BfE67d3C00A97F19Cecd2cf9e87", // Placeholder address
    decimals: 6,
    color: "#26A17B",
    maxMint: 10000,
  },
]

// Easy to extend with more tokens:
// {
//   name: "Test WETH",
//   symbol: "tWETH",
//   address: "0x4567890123456789012345678901234567890123",
//   decimals: 18,
//   color: "#627EEA",
//   maxMint: 100
// }
