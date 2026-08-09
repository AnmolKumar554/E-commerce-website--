import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Nav = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
    <div class='navbar'>
      <h3>Euler Shop</h3>
      <div className='search'>
        <input placeholder='search to find'></input>
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <Link to="/cart" className='sup-cart'>
        <div className='cart'>
          <i className="fa-solid fa-cart-shopping"></i>
          <h4>Cart</h4>
        </div>
      </Link>
    </div>
    
    <div className='navbar2'>
      <div className='ham'>
        <i className="fa-solid fa-bars" onClick={()=>{
          setMenu(true)
        }} ></i>
      </div>
      <Link to={"/men"}>Men's Fashion</Link>
      <Link to={"/women"}>Women's Fashion</Link>
      <Link to={"/kid"}>Kid's Fashion</Link>
      <Link to={"/electronics"}>Electronics</Link>
      <Link to={"/living"}>Living</Link>
      <Link to={'/sports'}>Sports</Link>
      <Link to={"/"}>Home</Link>
    </div>
    {menu && <Login onClose={()=>{setMenu(false)}} />}
    </>
  )
}

export default Nav
