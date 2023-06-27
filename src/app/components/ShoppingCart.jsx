import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'
import '../style/shoppingCart.css'
import { AiFillCloseCircle } from 'react-icons/ai'



export default function ShoppingCart( {
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange
  }){
  return (
    <div className='modal' style={{display: visibility
      ? 'block'
      : 'none'
    }}>
    <div className='header'>
      <h2>Shopping Cart</h2>
      <button className='btn close-btn' onClick={onClose}>
      <AiFillCloseCircle /></button>
    </div>
    <div className='cart-products'>{products.length === 0 && (<span className='empty-text'>Your Cart is currently empty</span>) }
      {products.map(product => (
        <div className='cart-product' key={product.id}>
        <div className='product-info'><h1>Product info: {product.name}</h1>
        <span>{product.price * product.count}$ </span>
        </div>
        <select name="count"  value={product.count} onChange={(event) => {
          onQuantityChange(product.cca3, event.target.value)
        }}>
        {[...Array(30).keys(),
        ].map(number => {
          const num = number + 1;
          return <option value={num} key={num}>{num}</option>
        })
        }
        </select>
        <button className='btn remove-btn' onClick={() => onProductRemove(product)}>
        <RiDeleteBin6Line />
        </button>
        </div> 
        ))}
        </div>
    {products.length > 0 && (<button className='btn checkout-btn'>Proceed to checkout</button>)}
    </div>
  )
}
