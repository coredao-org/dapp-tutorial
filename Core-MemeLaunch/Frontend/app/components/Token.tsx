import { ethers } from 'ethers'
import React from 'react'

const Token = ({setTrade, setToken, token} : {setTrade: any, setToken: any, token: any}) => {
  return (
    <button onClick={() => (setToken(token), setTrade(true))} className='token'>
      <div className='token__details'>
        <img src={token.image} alt='token image' width={256} height={256} />
        <p>created by {token.creator.slice(0, 6) + '...' + token.creator.slice(38, 42)}</p>
        <p>market Cap: {ethers.formatUnits(token.raised, 18)} CORE</p>
        <p className='name'>{token.name}</p>
      </div>
    </button>
  )
}

export default Token
