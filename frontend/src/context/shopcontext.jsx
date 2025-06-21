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
  const gettotal = () => {
  let totalamount = 0;
  for(const item in cartitems){
    if(cartitems[item] > 0){
      let iteminfo = All_product.find((product)=>product.id === Number(item));
      if (iteminfo) {
        totalamount += iteminfo.new_price * cartitems[item];
      }
    }
  }
  return totalamount;
}

const gettotalcart = () => {
  let totalcart=0;
  for(const item in cartitems){
    totalcart += cartitems[item]
  }
  return totalcart;
}

  console.log(cartitems);
  const removefromcart = (itemid) =>{
    setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
  }
  const contexvalue = {gettotalcart,gettotal,All_product,cartitems,addtocart,removefromcart};
  return(
    <Shopcontext.Provider value={contexvalue}>
        {props.children}
    </Shopcontext.Provider>
  )
}
export default Shopcontextprovider;