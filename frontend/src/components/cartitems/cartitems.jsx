import React, { useContext } from 'react'
import './cartitems.css'
import Remove from '../assets/remove.png'
import { Shopcontext } from '../../context/shopcontext'
const Cartitems = () => {
    const{gettotal,All_product,cartitems,removefromcart} = useContext(Shopcontext);
  return (
    <div className='cart-items'>
        <div className="format-main">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {All_product.map((e)=>{
          if(cartitems[e.id] > 0)
            {
            return(
            <div>
            <div className="cart-item format-main">
                <img src={e.image} className='cart-icon-product'alt="" />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className='cart-quantity'>{cartitems[e.id]}</button>
                <p>₹{e.new_price * cartitems[e.id]}</p>
                <img className="remove-icon" src={Remove} onClick={()=>{removefromcart(e.id)}} alt="" />
            </div>
            <hr />  
        </div>
            );
          }
            else{
              return null;
            }
        })}
       <div className="cart-items-down">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-item-total">
              <p>Subtotal</p>
              <p>₹{gettotal()}</p>
            </div>
            <hr />
            <div className="cart-item-total">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-item-total">
              <h3>Total</h3>
              <h3>₹{gettotal()}</h3>
            </div>
          </div>
          <button className='submit-check'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="promocode">
          <p>If you have promo code, Enter it here.</p>
          <div className="promobox">
            <input type="text" placeholder='Promo Code'/>
            <button>Submit</button>
          </div>
        </div>
       </div>
    </div>
  )
}
export default Cartitems;