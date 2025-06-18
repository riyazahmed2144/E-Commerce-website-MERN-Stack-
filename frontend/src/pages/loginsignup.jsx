import React from 'react'
import  './loginsignup.css'
const loginsignup = () => {
  return (
    <div className='login-signup'>
      <div className="logincontainer">
        <h1>Sign Up</h1>
        <div className="name-field">
          <input type="text" placeholder='Name'/>
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Password'/>
        <button>Continue</button>
        <p>Already Have an Account? <span>Login Here</span></p>
      </div>
      <div className="login-check">
        <input type="checkbox"/>
        <p>By Continuing, I Agree to the Terms of use & privacy.</p>
      </div>
    </div>
  </div>
  )
}

export default loginsignup;