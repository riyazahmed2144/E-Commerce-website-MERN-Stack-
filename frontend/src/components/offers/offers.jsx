import React from 'react'
import './offers.css'
import offerimg from '../assets/offerspng.png'
const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For </h1>
            <p>Only One Best Seller Products</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={offerimg} alt="" className='off'/>
        </div>
    </div>
  )
}
export default Offers;