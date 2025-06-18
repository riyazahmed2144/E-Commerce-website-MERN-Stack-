import React, { createContext } from 'react'
import All_product from '../components/assets/all_product';
export const Shopcontext = createContext(null);
const Shopcontextprovider = (props) => {
  const contexvalue = {All_product};

  return(
    <Shopcontext.Provider value={contexvalue}>
        {props.children}
    </Shopcontext.Provider>
  )
}
export default Shopcontextprovider;