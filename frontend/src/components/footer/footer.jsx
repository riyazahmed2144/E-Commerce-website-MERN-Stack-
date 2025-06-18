import React from 'react'
import './footer.css'
import insta from "../assets/insta.png";
import wa from "../assets/wa.png";
import pin from "../assets/pin.png";
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <p>NEMO</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="insta">
                <img src={insta} alt="" />
            </div>
            <div className="wa">
                <img src={wa} alt="" />
            </div>
            <div className="pin">
                <img src={pin} alt="" />
            </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}
export default Footer;