import React, { useContext, useEffect, useState } from 'react'
import { contextData } from './Context'

const Women = () => {

  const {womensFashion}=useContext(contextData)
  const {cart,setCart}=useContext(contextData)
  const {total,setTotal} = useContext(contextData);
 
  

  return (
    <div className='main-div'>
      {womensFashion.map((e)=>{

        const checkCart =cart.some((el)=> el.id===e.id)

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
                <button className={`add-btn`} disabled={checkCart}  onClick={()=>{
                  const newCart=[...cart]
                  newCart.push(e)
                  setCart(newCart)
                  setTotal(total+e.price)
                }}
                
                >{checkCart?"Added to Cart":"Add to Cart"}</button>
              </div>
            </div>
        </>
      })}
    </div>
  )
}

export default Women
