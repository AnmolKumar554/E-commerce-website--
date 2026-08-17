import React, { use, useContext, useEffect, useState } from 'react'
import Context, { contextData } from './Context'

const Men = () => {

  const {mensFashion,setMensFashion}=useContext(contextData);
  const {cart,setCart}=useContext(contextData);
  const {total,setTotal} = useContext(contextData);
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(cart);
  }, [cart])
  
  
  return (
    <div className='main-div'>
      {mensFashion.map((el)=>{
        return <>
            <div className='card' key={el.id}>
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
                <button className='add-btn' id={el.id}   onClick={()=>{ 
                  setTotal(total+el.price)
                  const newCart=[...cart]
                  newCart.push({
                    id:el.id,
                    name:el.name,
                    qty:el.qty,
                    price:el.price,
                    image:el.image,
                    total:el.price*el.qty
                  })
                  
                  setCart(newCart)
                  // Add to Cart
                                   
                }}>Add to Cart</button>
              </div>
            </div>
        </>
      })}
      
    </div>
  )
}

export default Men
