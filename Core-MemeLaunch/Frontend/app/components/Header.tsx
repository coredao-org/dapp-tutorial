import React from 'react'
import { ethers } from 'ethers';


const Header = ({account, setAccount}: {account: string, setAccount: (address: string) => void}) => {

  async function connectHandler() {
    const accounts = await (window as any).ethereum.request({method: 'eth_requestAccounts'});
    const accoount = ethers.getAddress(accounts[0]);
  
    setAccount(accounts[0]);
  }

  return (
    <header>
      <h1 className='brand'>Pump.Meme</h1>
     { account ? (
      <button className='btn--fancy'>[{account.slice(0, 6) + '...' + account.slice(38, 42)}]</button>
    ) : (
      <button className='btn--fancy' onClick={connectHandler}>[Connect]</button>
    )}
    </header>
  )
}

export default Header
