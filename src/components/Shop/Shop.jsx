import React from 'react'
import Hero from './Hero.jsx'
import Products from './Products';

import BackgroundWrapper from '../Back-image/BackgroundWrapper.jsx';
import Advertisement from './../Advertisement/Advertisement';


const Shop = () => {
  return (
    <div className="w-screen h-full overflow-y-hidden">
      <BackgroundWrapper />
        <Hero />
        <Products />
        <Advertisement />
    </div>
  )
}

export default Shop