import React from 'react'
import './newsletter.css'
const Newsletter = () => {
  return (
    <div className="newsletter">
        <h1>Get Offers On Your Email</h1>
        <p>Subscribe to our Newletter and stay updated </p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
export default Newsletter