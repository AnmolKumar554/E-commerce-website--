import React, { use, useContext, useEffect, useState } from 'react'
import Context, { contextData } from './Context'

const Men = () => {

  const {mensFashion,setMensFashion}=useContext(contextData);
  const {cart,setCart}=useContext(contextData);
  const {total,setTotal} = useContext(contextData);
  const [vsble, setVsble] = useState(true)
  useEffect(() => {
    console.log(cart);
  }, [cart])
  
  function checkState(value){
    if(value==='normal'){
      return "none"
    }
  }
  

  
  return (
    <div className='main-div'>
      {mensFashion.map((el)=>{

        const checkCart=cart.some((e)=> e.id===el.id)
        return <>
            <div className='card' key={el.id}>
              <div className='card-image'>
                <span className='badge trending' style={{display:checkState(el.state)}}>{el.state}</span>
                <img src={el.image} alt='Product' />
              </div>
              <div className='details'>
                <h4 className='name'>{el.name}</h4>
                <div className='price-row'>
                  <span className='price'>₹{el.price}</span>
                  {/* <span className='old-price'>$79.99</span> */}
                </div>
                <button className='add-btn' id={el.id} disabled={checkCart}  onClick={()=>{ 
                  setTotal(total+el.price)
                  const newCart=[...cart]
                    newCart.push(el)
                  setCart(newCart) 
                }}>{checkCart?"Added to Cart":"Add to Cart"}</button>
              </div>
            </div>
        </>
      })}
      
    </div>
  )
}

export default Men
