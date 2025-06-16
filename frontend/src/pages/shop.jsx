import React from 'react'
import Hero from '../components/hero/hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import New_collections from '../components/new collections/newcollections'
import Newsletter from '../components/newletter/newsletter'
const shop = () => {
  return (
    <div>
       <Hero/>
       <Popular/>
       <Offers />
       <New_collections />
       <Newsletter />
    </div>
  )
}

export default shop;
