import React, { createContext, useState } from 'react'
import All_product from '../components/assets/all_product';
export const Shopcontext = createContext(null);
const defaultcart =()=>{
  let cart = {}
  for(let index=0; index < All_product.length+1 ;index++){
    cart[index] = 0;
  }
  return cart;
}

const Shopcontextprovider = (props) => {
  const [cartitems,setcartitems] = useState(defaultcart());
  
  const addtocart = (itemid) =>{
    setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
  }
  console.log(cartitems);
  const removefromcart = (itemid) =>{
    setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }
  const contexvalue = {All_product,cartitems,addtocart,removefromcart};
  return(
    <Shopcontext.Provider value={contexvalue}>
        {props.children}
    </Shopcontext.Provider>
  )
}
export default Shopcontextprovider;