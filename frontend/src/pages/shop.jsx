import React from 'react'
import Hero from '../components/hero/hero'
const shop = () => {
  return (
    <div>
       <Hero/> {/* ✅ This is what you're missing */}
      {/* ...other components like product listings etc. */}
    </div>
  )
}

export default shop;
