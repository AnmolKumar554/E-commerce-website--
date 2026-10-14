import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import Context, { contextData } from './Context'
const Nav = () => {
  
  const [menu, setMenu] = useState(false)
  const {mensFashion}=useContext(contextData)
  const {womensFashion}=useContext(contextData)
  const {kidsFashion} = useContext(contextData)
  const {sports} = useContext(contextData)
  const {living}=useContext(contextData)
  const {elec}=useContext(contextData)
  const [text, setText] = useState("")
  const navigate=useNavigate()

  

  const search=(e)=>{
    if(mensFashion.some((el)=>el.name.includes(e))){
      console.log(e);
      navigate("/men")
    }else if(womensFashion.some((el)=>el.name.includes(e))){
      navigate("/women")
      console.log(e);
    }else if(kidsFashion.some((el)=>el.name.includes(e))){
      navigate("/kid")
    }else if(sports.some((el)=>el.name.includes(e))){
      navigate("/sports")
    }else if(living.some((el)=>el.name.includes(e))){
      navigate("/living")
    }else if(elec.some((el)=>el.name.includes(e))){
      navigate("/electronics")
    }
  }
  const handleSearch = (e) => {
  e.preventDefault();                       
  const value = text.trim();
  if (value === "") {
    alert("nothing to search");
    return;
  }
  search(value);
  setText("");
};
  return (
    <>
    <div className="navbar">
      <div className="logo-name">
        <h3>Euler Shop</h3>
      </div>
 
      <div className="cart-search">
        {/* a <form> handles both Enter key and button click, so no duplicated logic */}
        <form className="search" onSubmit={handleSearch}>
          <input
            placeholder="search to find"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit" aria-label="Search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
 
        <Link to="/cart" className="sup-cart">
          <div className="cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <h4>Cart</h4>
          </div>
        </Link>
      </div>
    </div>
 
    <div className="navbar2">
      <div className="ham">
        <button type="button" aria-label="Open menu" onClick={() => setMenu(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <Link to="/men">Men's Fashion</Link>
      <Link to="/women">Women's Fashion</Link>
      <Link to="/kid">Kid's Fashion</Link>
      <Link to="/electronics">Electronics</Link>
      <Link to="/living">Living</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/">Home</Link>
    </div>
    {menu && <Login onClose={()=>{setMenu(false)}} />}
    </>
  )
}

export default Nav
