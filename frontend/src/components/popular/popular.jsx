import React from 'react'
import './popular.css';
import All_product from '../assets/all_product'
import Productcard from '../popular/product-card'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-items">
            {All_product.filter(item=>item.category=='Womens').slice(2,6).map((item,i)=>(
                <Productcard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
        </div>
    </div> )
}
export default Popular;