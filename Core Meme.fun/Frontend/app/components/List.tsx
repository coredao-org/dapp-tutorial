import { ethers } from 'ethers'
import React from 'react'

const List = ({setShowCreate, fee, provider, factory}: {setShowCreate: (create: any) => void, fee: any, provider: any, factory: any}) => {

  async function listHandler(form: any) {
    const name = form.get("name");
    const ticker = form.get("ticker")

    const signer = await provider.getSigner();

    const transaction = await factory.connect(signer).create(name, ticker, {value: fee})
    await transaction.wait();
    
    console.log("Submitted", name, ticker);

    setShowCreate(false)
  }

  return (
    <div className='list'>
      <h2 style={{color: 'aqua'}}>List new token</h2>

      <div className='list_description'>
        <p style={{color: 'aqua'}}>fee: {ethers.formatUnits(fee, 18)} CORE</p>
      </div>

      <form action={listHandler}>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='ticker' placeholder='ticker' />
        <input type='submit' value='[ List ]' />
      </form>

      <button className='btn--fancy' onClick={() => setShowCreate(false)}>[ cancel ]</button>
    </div>
  )
}

export default List
