import React, { useContext, useEffect, useState } from 'react'
import { contextData } from './Context'

const Women = () => {

  const {womensFashion}=useContext(contextData)
  // const [newWomnFshn, setNewWomnFshn] = useState(womensFashion.map((e)=>({...e,click:false})))
  const {cart,setCart}=useContext(contextData)
  const {total,setTotal} = useContext(contextData);
  const [count, setCount] = useState(-1)
  

  return (
    <div className='main-div'>
      {womensFashion.map((e)=>{
        return <>
            <div className='card' id={e.id}>
              <div className='card-image'>
                <span className='badge trending'>{e.state}</span>
                <img src={e.image} alt='Product' />
              </div>
              <div className='details'>
                <h4 className='name'>{e.name}</h4>
                <div className='price-row'>
                  <span className='price'>₹{e.price}</span>
                  {/* <span className='old-price'>$79.99</span> */}
                </div>
                <button className={`add-btn`}   onClick={()=>{
                  
                  const newCart=[...cart]
                  newCart.push({
                    id:e.id,
                    name:e.name,
                    qty:e.qty,
                    price:e.price,
                    image:e.image,
                    total:e.price*e.qty
                  })
                  setCart(newCart)
                  setTotal(total+e.price)
                  
                   
                }}
                
                >Add to Cart</button>
              </div>
            </div>
        </>
      })}
    </div>
  )
}

export default Women
