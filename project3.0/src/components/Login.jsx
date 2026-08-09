import React, { useState } from 'react'

const Login = ({onClose}) => {

  const [, setClose] = useState(true)

  return (
    <>
    <div className='login-main'>
      <div class="overlay" id="overlay"></div>

<aside class="sidebar" id="sidebar">
  <div class="sidebar-top"></div>

  <div class="sidebar-header">
    <span class="label">My Account</span>
    <button class="close-btn" id="closeBtn" onClick={onClose}>&times;</button>
  </div>

  <div class="sidebar-body">
    <div class="login-view" id="loginView">
      <div class="field">
        <label>Name</label>
        <input type="text" id="nameInput" placeholder="Anmol Sharma"></input>
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" placeholder="abc@example.com"></input>
      </div>
      <div class="field">
        <label>Password</label>
        <input  placeholder="password"></input>
      </div>
      <button class="primary-btn" id="loginBtn">Log in</button>
      <div class="divider">or</div>
      <button class="ghost-btn">Create an account</button>
      <p class="hint">Forgot your password? <a href="#">Reset it here</a></p>
    </div>
  </div>
</aside>
    </div>

    

  </>
  )
}

export default Login
