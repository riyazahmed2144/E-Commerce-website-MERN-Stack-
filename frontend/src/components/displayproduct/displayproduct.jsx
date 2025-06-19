import React from 'react'
import './displayproduct.css'
import star from '../assets/star.png'
import dullstar from '../assets/dullstar.png'
const Displayproduct = ({product}) => {
  return (
    <div className='display'>
        <div className="left-product">
            <div className="img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="main-img">
                <img className="mainimg"src={product.image} alt="" />
            </div>
        </div>
        <div className="right-product">
            <h1>{product.name}</h1>
            <div className="star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={dullstar} alt="" />
                <p>(122)</p>
            </div>
            <div className="right-price">
                <div className="old-price">₹{product.old_price}</div>
                <div className="new-price">₹{product.new_price}</div>
            </div>
            <div className="description-des">Stay comfortable and stylish with our classic cotton T-shirt. Made from soft, breathable fabric, it’s perfect for everyday wear.
            </div>
            <div className="size">
                <h1>Select Size</h1>
                <div className="size-section">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className='product-right-category'><span>Category:</span>Womens, T-shirt, Crop Top</p>
            <p className='product-right-category'><span>Tags:</span>Latest, Modern</p>      
        </div>
    </div>
  )
}
export default Displayproduct;