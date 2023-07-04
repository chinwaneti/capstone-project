'use client'
import { useState, useEffect } from 'react'
import info from '../components/details.json'



export default function ShoppingCart() {

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setItems(info);

    // Check if cart data exists in localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    // Update localStorage when cart changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (itemId) => {
    const selectedItem = items.find(item => item.id === itemId);

    if (!selectedItem) {
      return;
    }

    const existingItem = cart.find(item => item.id === itemId);

    if (existingItem) {
      setCart(prevCart => {
        const updatedCart = prevCart.map(item => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;

        });
        return updatedCart;
      });
    } else {
      setCart(prevCart => [...prevCart, { ...selectedItem, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div className='grid grid-cols-3 rounded-lg bg-cyan-50 gap-6'>
        {items.map(item => (
          <div key={item.id}>
            <div>{item.name}</div>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>

      <div>
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="item">
              <div>{item.name} x {item.quantity}</div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
    }
