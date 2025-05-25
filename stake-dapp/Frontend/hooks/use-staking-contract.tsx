"use client"

import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { useWallet } from "@/components/wallet-provider"
import { STAKING_CONTRACT_ABI, STAKING_CONTRACT_ADDRESS } from "@/constants/constansts"

export const useStakingContract = () => {
  const { address, isConnected } = useWallet()
  const [contract, setContract] = useState<ethers.Contract | null>(null)
  const [stakedBalance, setStakedBalance] = useState("0")
  const [rewards, setRewards] = useState("0")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initContract = async () => {
      if (typeof window.ethereum !== "undefined" && isConnected && address) {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum)
          const signer = await provider.getSigner()

          const stakingContract = new ethers.Contract(STAKING_CONTRACT_ADDRESS, STAKING_CONTRACT_ABI, signer)

          setContract(stakingContract)
          console.log(stakingContract)

          // In a real app, you would fetch actual data from the contract
          // const balance = await stakingContract.balanceOf(address)
          // setStakedBalance(ethers.formatEther(balance))

          // const rewardsAmount = await stakingContract.currentEarned(address)
          // setRewards(ethers.formatEther(rewardsAmount))

          // For demo purposes, we're setting mock values
          setStakedBalance("22.5")
          setRewards("1.32")

          setIsLoading(false)
        } catch (error) {
          console.error("Error initializing contract:", error)
          setIsLoading(false)
        }
      } else {
        setContract(null)
        setStakedBalance("0")
        setRewards("0")
        setIsLoading(false)
      }
    }

    initContract()
  }, [address, isConnected])

  const stake = async (amount: string) => {
    console.log("In here")
    if (!contract) return null

    try {
      console.log("Staking");
      const tx = await contract.stake({
        value: ethers.parseEther(amount),
      })

      return await tx.wait()
    } catch (error) {
      console.error("Error staking:", error)
      throw error
    }
  }

  const withdraw = async (amount: string) => {
    if (!contract) return null

    try {
      const tx = await contract.withdraw(ethers.parseEther(amount))
      return await tx.wait()
    } catch (error) {
      console.error("Error withdrawing:", error)
      throw error
    }
  }

  const claimRewards = async () => {
    if (!contract) return null

    try {
      const tx = await contract.claimRewards()
      return await tx.wait()
    } catch (error) {
      console.error("Error claiming rewards:", error)
      throw error
    }
  }

  return {
    contract,
    stakedBalance,
    rewards,
    isLoading,
    stake,
    withdraw,
    claimRewards,
  }
}
