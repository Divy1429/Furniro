import React from 'react';
import Advertisement from './../Advertisement/Advertisement';
import BackgroundWrapper from './../Back-image/BackgroundWrapper';
import CartDetails from './CartDetails.jsx'; 

const Cart = () => {
  return (
    <div>
      <BackgroundWrapper />
      <CartDetails />
      <Advertisement />
    </div>
  );
};

export default Cart;
