'use client'
import React, { useState, useEffect } from 'react';
import { newDetails } from '../newCategories/page';


const Cart = () => {
    const [cartItems, setCartItems] =useState([])

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const renderCartItems = () => {
    return cartItems.map((item) => {
      return (
        <div key={item.cca3}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      );
    });
  };
  

  return (
    <div>
      <h1>Cart</h1>
      <div>{renderCartItems()} </div>
    </div>
  );
};

export default Cart;
