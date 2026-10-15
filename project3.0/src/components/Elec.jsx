import React, { useContext } from 'react'
import { contextData } from './Context'

const Elec = () => {

  const {elec}=useContext(contextData)
  const {cart,setCart} = useContext(contextData)
  const {total,setTotal} = useContext(contextData);

  function checkState(value){
    if(value==='normal'){
      return "none"
    }
  }

  return (
    <div className='main-div'>
      {elec.map((el)=>{
        const checkCart=cart.some((e)=> el.id==e.id)
        return <>
            <div className='card' id={el.id}>
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
                <button className='add-btn' disabled={checkCart} onClick={()=>{
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

export default Elec
