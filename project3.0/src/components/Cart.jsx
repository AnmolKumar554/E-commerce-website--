import React, { useContext, useState } from 'react'
import { contextData } from './Context'

const Cart = () => {
  const [show, setShow] = useState(true)
  const {mensFashion} = useContext(contextData)
  const {cart,setCart}=useContext(contextData)
  const {total,setTotal} = useContext(contextData)
  
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
        
        <div className="row" data-price="550" data-qty="1" >
        <img className="thumb" src={e.image} alt={e.name} />
        <div className="row-main">
          <p className="row-line"><span className="item-name">{e.name}</span>&nbsp;&nbsp;<span className="item-qty">{e.qty}</span>x&nbsp;&nbsp;<span className="item-price">{e.price}</span></p>
          <div className="qty-controls">
            <span className="qty-btn" >-</span>
            <span className="qty-value">{e.qty}</span>
            <span className="qty-btn" onClick={()=>{
              const newCart=[...cart]
              newCart.qty+=1
              setCart(newCart)
            }} >+</span>
          </div>
        </div>
        <div className="row-right">
          <span className="line-total">{e.price}</span>
          <span className="remove-btn" onClick={()=>{
            setShow(!show)
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
          <span id="subtotal">{total}</span>
        </div>
        <div className="receipt-line">
          <span>Shipping</span>
          <span id="shipping">{0.01*total.toFixed(2)}</span>
        </div>
 
        <div className="dashed-rule"></div>
 
        <div className="receipt-total">
          <span>Total</span>
          <span id="total">₹{total+0.01*total.toFixed(2)}</span>
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
