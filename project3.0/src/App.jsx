import React, { useState } from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Men from './components/Men'
import Women from './components/Women'
import Kid from './components/Kid'
import Elec from './components/Elec'
import Living from './components/Living'
import Sports from './components/Sports'
import Home from './components/Home'
import Login from './components/Login'
const App = () => {

  

  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path='/men' element={<Men />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/kid' element={<Kid />}></Route>
        <Route path='/electronics' element={<Elec />}></Route>
        <Route path="/living" element={<Living />}></Route>
        <Route path='/sports' element={<Sports />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
      {/* <Login></Login> */}
      
    </div>
  )
}

export default App
