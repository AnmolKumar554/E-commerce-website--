import React, { useContext } from 'react'
import { contextData } from './Context'

const Women = () => {

  const {womensFashion}=useContext(contextData)

  return (
    <div className='main-div'>
      {womensFashion.map((el)=>{
        return <>
            <div className='card' id={el.id}>
              <div className='card-image'>
                <span className='badge trending'>{el.state}</span>
                <img src={el.image} alt='Product' />
              </div>
              <div className='details'>
                <h4 className='name'>{el.name}</h4>
                <div className='price-row'>
                  <span className='price'>₹{el.price}</span>
                  {/* <span className='old-price'>$79.99</span> */}
                </div>
                <button className='add-btn'>Add to Cart</button>
              </div>
            </div>
        </>
      })}
    </div>
  )
}

export default Women
