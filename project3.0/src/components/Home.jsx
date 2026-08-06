import React, { useContext } from 'react'
import Footer from './Footer'
import { contextData } from './Context'
import { Link } from 'react-router-dom'

const Home = () => {

  const {mensFashion}=useContext(contextData)
  const {womensFashion}=useContext(contextData)
  const {kidsFashion} = useContext(contextData)
  const {sports} = useContext(contextData)
  const {living}=useContext(contextData)
  const {elec}=useContext(contextData)
  const count=0
  return (
    
    <div>
        <div className='intro'>
          <h1>Find what fits your style.</h1>
          <p>Explore fashion, electronics, sports, and more — all in one place.</p>
        </div>
        <div className='father'>
          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Men's trending</h4>
                <Link to={'/men'}>View all</Link>
              </div>
              <div className='main-img'>
                {mensFashion.map((el)=>{
                  if(el.state=="trending"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>
          
          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Men's Special</h4>
                <Link to={'/men'}>View all</Link>
              </div>
              <div className='main-img'>
                {mensFashion.map((el)=>{
                  if(el.state=="special"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Women's trending</h4>
                <Link to={'/women'}>View all</Link>
              </div>
              <div className='main-img'>
                {womensFashion.map((el)=>{
                  if(el.state=="trending"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Women's Special</h4>
                <Link to={'/women'}>View all</Link>
              </div>
              <div className='main-img'>
                {womensFashion.map((el)=>{
                  if(el.state=="special"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Kid's trending</h4>
                <Link to={'/kid'}>View all</Link>
              </div>
              <div className='main-img'>
                {kidsFashion.map((el)=>{
                  if(el.state=="trending"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Kid's Special</h4>
                <Link to={'/kid'}>View all</Link>
              </div>
              <div className='main-img'>
                {kidsFashion.map((el)=>{
                  if(el.state=="special"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Sport's trending</h4>
                <Link to={'/sports'}>View all</Link>
              </div>
              <div className='main-img'>
                {sports.map((el)=>{
                  if(el.state=="trending"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Sport's Special</h4>
                <Link to={'/sports'}>View all</Link>
              </div>
              <div className='main-img'>
                {sports.map((el)=>{
                  if(el.state=="special"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Living treding</h4>
                <Link to={'/living'}>View all</Link>
              </div>
              <div className='main-img'>
                {sports.map((el)=>{
                  if(el.state=="trending"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Living Special</h4>
                <Link to={'/living'}>View all</Link>
              </div>
              <div className='main-img'>
                {sports.map((el)=>{
                  if(el.state=="special"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Electronics trending</h4>
                <Link to={'/electronics'}>View all</Link>
              </div>
              <div className='main-img'>
                {sports.map((el)=>{
                  if(el.state=="trending"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

          <div className='for-you'>
            <div className='hero'>
              <div className='hero-header'>
                <h4>Electronics Special</h4>
                <Link to={'/electronics'}>View all</Link>
              </div>
              <div className='main-img'>
                {sports.map((el)=>{
                  if(el.state=="special"){
                    return <>
                      <img src={el.image} id={el.id}></img>
                    </>
                  }
                })}
              </div>
            </div>
          </div>

        </div>

        
      <Footer />
    </div>
  )
}

export default Home
