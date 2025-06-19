import React from 'react'
import './relatedproduct.css'
import All_product from '../assets/all_product'
import Productcard from '../popular/product-card'

const getrandomproduct = (products, count) =>{
    const shuffled = [...products].sort(()=> 0.5 - Math.random());
    return shuffled.slice(0,count);
}
const Relatedproduct = () => {
    const randomproduct = getrandomproduct(All_product, 4);
  return (
    <div className='relatedproduct'>
        <h1>RELATED PRODUCT</h1>
        <hr />
        <div className="related-product-item">
            {randomproduct.map((item,i)=>(
                <Productcard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
        </div>
    </div>
  )
}
export default Relatedproduct;