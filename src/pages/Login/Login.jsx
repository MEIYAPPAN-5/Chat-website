import React, { useState } from 'react'
import './login.css'
import assets from '../../assets/assets'

const login = () => {
  const[currState,setCurrState] = useState("Sign up")
  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className="logo" />
      <form  className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ?<input type="text" placeholder='Username' className="form-input" required/>:null }
        {currState === "Login" ? <input type="email" placeholder='Username or Email Address' className="form-input" required/>:<input type="email" placeholder='Email Address' className="form-input" required/>}
        <input type="password" placeholder='Password' className="form-input" required />
        {currState === "Login" ? <button type='submit'>Login</button> : <button type='submit'>Create account</button> }
        <div className='login-term'>
          <input type="checkbox" />
          <p>Agree to the terms and policy</p>

        </div>
        <div className='login-forgot'>
          {
            currState === "Sign up" 
            ? <p className='login-toggle'>Already have an account. <span onClick={()=>setCurrState("Login")}>Login</span></p>
            :<p className='login-toggle'>Dont have a account. <span onClick={()=>setCurrState("Sign up")}>Sign up</span></p>}

          
        </div>
      </form>
    </div>
  )
}

export default login