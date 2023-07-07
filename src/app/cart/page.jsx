"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

export default function Page() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart'));
    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []);

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const getTotalItems = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.quantity || 0;
    });
    return total;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += (item.price || 0) * (item.quantity || 0);
    });
    return totalPrice;
  };

  return (
    <div className='bg-'>
      <h2 className='font-extrabold text-2xl text-center text-green-600'>Cart Items</h2>
      {cartItems.map((item, index) => {
        const isFirstInstance = cartItems.findIndex((cartItem) => cartItem.id === item.id)
         === index;
        return (
          <div key={item.id} className="flex space-x-4 border-2 border-gray-400 rounded-lg p-5">
          <Image src={item.image} alt={item.name} width={150} height={150} />
          <div className=" space-x-4 mt-4 flex items-center">
          <button onClick={() => decreaseQuantity(item.id)} className='w-5 bg-red-600 '>-</button>
          <p>{item.quantity || 0}</p>
          <button onClick={() => increaseQuantity(item.id)} className='w-5 bg-green-600'>+</button>
            <div className='flex flex-col'>
          {isFirstInstance && <h3 className='font-bold'>{item.name}</h3>}
          {isFirstInstance && <p className='mt-4 font-bold'>{`Price: $${item.price}`}</p>}
          </div>
          <div className=''>
          <button className="" onClick={() => removeItem(item.id)}>
          <AiOutlineDelete size={20} className='ml-12'/>
          </button></div>
          </div>
          </div>
        );
      })}
      <div className=" font-bold bg-gray-300 ">
        <h3 className='text-center text-2xl text-green-600'>Checkout</h3>
       <div className=' flex justify-between p-5 text-xl '> <p>Total Items: </p> <p className='text-xl'>{getTotalItems()}</p></div>
       <div className=' flex justify-between p-5 text-xl '>  <p>Total Price:</p> <p className='text-xl'> ${getTotalPrice()}</p></div>
      </div>
    </div>
  );
}
