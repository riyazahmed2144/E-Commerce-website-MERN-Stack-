import React, { useContext } from 'react'
import { Shopcontext } from '../context/shopcontext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../components/breadcrums/breadcrums';
import Displayproduct from '../components/displayproduct/displayproduct';
import Description from '../components/descriptionbox/description';
import Relatedproduct from '../components/relatedproduct/relatedproduct'

const Product = () => {
  const{All_product} = useContext(Shopcontext);
  const{productid} = useParams();
  const product = All_product.find((e)=> e.id === Number(productid));
  return (
    <div>
      <Breadcrums product={product}/>
      <Displayproduct product={product}/>
      <Description />
      <Relatedproduct />
    </div>
  )
}

export default Product;