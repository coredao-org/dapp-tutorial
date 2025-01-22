import React, {useEffect, useState} from 'react'
import { ethers } from 'ethers'

const Trade = ({token, setTrade, provider, factory} : {token: any, setTrade: any, provider: any, factory: any}) => {


  const [target, setTarget] = useState(0);
  const [limit, setLimit] = useState(0);
  const [cost, setCost] = useState(0);

  async function buyHandler(form: any) {


    const formValue: any = ethers.parseEther(form.get("amount"));

    const value = BigInt(cost * formValue) / ethers.parseEther("1");

    const signer = await provider.getSigner();
    console.log(signer)

    const transaction = await factory.connect(signer).buyToken(token.token, formValue, {value: value})
    await transaction.wait();

    setTrade(false);
  }

  async function getSaleDetails() {
    const target = await factory.TARGET();
    setTarget(target);

    const limit = await factory.TOKEN_LIMIT();
    setLimit(limit);

    const cost = await factory.getCost(token.sold);
    setCost(cost);
  }

  useEffect(() => {
    getSaleDetails();
  }, [])


  return (
    <div className='trade'>
      <h2 style={{color: 'aqua'}}>Trade</h2>

      <div className='token__details'>
        <p className='name'>{token.name}</p>
        <p>created by {token.creator.slice(0, 6) + '...' + token.creator.slice(38, 42)}</p>
        <img src={token.image} alt='token image' width={110} height={110} />
        <p>market Cap: {ethers.formatUnits(token.raised, 18)} CORE</p>
        <p>base cost: {ethers.formatUnits(cost, 18)} CORE</p>
      </div>

      
      {token.sold >= limit || token.raised >= target ? (
        <p className='disclaimer'>Target reached!</p>
      ) : (
        <form action={buyHandler}>
        <input type="number" name="amount" min={1} max={10000} placeholder="1" />
        <input type='submit' value='[ Buy ]' />
      </form>
      )}

      <button className='btn--fancy' onClick={() => setTrade(false)}>[ cancel ]</button>
    </div>
  )
}

export default Trade
