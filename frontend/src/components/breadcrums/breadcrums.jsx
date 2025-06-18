import React from 'react'
import arrowicon from '../assets/arrow.png'
import './breadcrums.css'
const Breadcrums = ({product}) => {
    if (!product) return null;
  return (
    <div className='breadcrums'>
        HOME <img src={arrowicon} alt="" /> 
        SHOP <img src={arrowicon} alt="" /> 
        {product.category.toUpperCase()} <img src={arrowicon} alt="" />
        {product.name.toUpperCase()}
    </div>
  )
}
export default Breadcrums;