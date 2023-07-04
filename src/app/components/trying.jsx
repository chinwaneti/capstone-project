import React, { useState, useEffect } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch JSON data or load it from a file
    const jsonData = [
      { id: 1, name: 'Item 1', price: 10 },
      { id: 2, name: 'Item 2', price: 15 },
      { id: 3, name: 'Item 3', price: 20 }
    ];

    // Update the items state
    setItems(jsonData);
  }, []);

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

      <div id="items">
        {items.map(item => (
          <div key={item.id} className="item">
            <span>{item.name}</span>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>

      <div id="cart">
        {cart.length === 0 ? (
          <p>No items in cart.</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="item">
              <span>{item.name} x {item.quantity}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShoppingCart;
