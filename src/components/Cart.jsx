import React, { useContext, useEffect, useState } from 'react'
import { contextData } from './Context'

const Cart = () => {
  
  const {mensFashion} = useContext(contextData)
  const {cart,setCart}=useContext(contextData)
  const {total,setTotal} = useContext(contextData)
  const [newTotal, setNewTotal] = useState(0)


  function update(id,newQty){
    
    setCart(prevCart=>
      prevCart.map(e=>        
        e.id==id?{...e,qty:newQty}:e
      )
    )
  }

  return (
    <div>
      <div className="page">
 
  <header className="header">
    
    <h1 className="header-title">Your cart</h1>
    <span className="header-count" id="item-count">3 items</span>
  </header>
 
  <div className="body">
 
    <section className="list" id="cart-list">
 
      {cart.map((e)=>{
  
        return <>
        
        <div className="row" data-price="550" data-qty="1" id={e.id}>
        <img className="thumb" src={e.image} alt={e.name} />
        <div className="row-main">
          <p className="row-line"><span className="item-name">{e.name}</span>&nbsp;&nbsp;<span className="item-qty">{e.qty}</span>x&nbsp;&nbsp;<span className="item-price">{e.price}</span></p>
          <div className="qty-controls">
            <span className="qty-btn" onClick={()=>{
              setNewTotal(newTotal-e.price)
              update(e.id,e.qty-1)
            }} >-</span>
            <span className="qty-value">{e.qty}</span>
            <span className="qty-btn" onClick={()=>{
              setNewTotal(newTotal+e.price)              
              update(e.id,e.qty+1)
            }}>+</span>
          </div>
        </div>
        <div className="row-right">
          <span className="line-total">{e.price}</span>
          <span className="remove-btn" onClick={()=>{
          
          }} >remove</span>
          
        </div>
      </div>
    
        </>
      })}
        
      <div className="empty-state" id="empty-state">
        <p className="empty-text">Your cart is empty.</p>
      </div>
 
    </section>
 
    <aside className="summary">
      <div className="receipt">
        <p className="receipt-title">Order summary</p>
 
        <div className="receipt-line">
          <span>Subtotal</span>
          <span id="subtotal">{total+newTotal}</span>
        </div>
        <div className="receipt-line">
          <span>Shipping</span>
          <span id="shipping">{Number(total+newTotal)*0.01.toFixed(2)}</span>
        </div>
 
        <div className="dashed-rule"></div>
 
        <div className="receipt-total">
          <span>Total</span>
          <span id="total">₹{total+newTotal+Number(total+newTotal)*0.01.toFixed(2)}</span>
        </div>
 
        <div className="checkout-btn">Checkout</div>
      </div>
    </aside>
 
  </div>
</div>
    </div>
  )
}

export default Cart
