import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {



  return (
    <>
    <div className='navbar'>
      <h3>Euler Shop</h3>
      <div className='search'>
        <input placeholder='search to find'></input>
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className='cart'>
        <i class="fa-solid fa-cart-shopping"></i>
        <h4>Cart</h4>
      </div>
    </div>
    <div className='navbar2'>
      <div><i class="fa-solid fa-bars"></i></div>
      <Link to={"/men"}>Men's Fashion</Link>
      <Link to={"/women"}>Women's Fashion</Link>
      <Link to={"/kid"}>Kid's Fashion</Link>
      <Link to={"/electronics"}>Electronics</Link>
      <Link to={"/living"}>Living</Link>
      <Link to={'/sports'}>Sports</Link>
      <Link to={"/"}>Home</Link>
    </div>
    </>
  )
}

export default Nav
