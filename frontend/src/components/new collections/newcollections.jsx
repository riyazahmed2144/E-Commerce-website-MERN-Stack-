import React from 'react'
import './newcollections.css';
import All_product from '../assets/all_product'
import Productcard from '../popular/product-card'
const New_collections = () => {
  return (
    <div className="new_collections">
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="new">
            {All_product.slice(2,5).map((item,i)=>(
                <Productcard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
             {All_product.filter(item=> item.category=='Womens').slice(2,4).map((item,i)=>(
                <Productcard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
             {All_product.filter(item=> item.category=='Kids').slice(4,7).map((item,i)=>(
                <Productcard key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            ))}
        </div>
    </div>
  )
}
export default New_collections;