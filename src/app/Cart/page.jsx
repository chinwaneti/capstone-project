"use client"
import React, { useState } from 'react'


const cartDatabaseFromLocalStorage =
    typeof window !== undefined?
    JSON.parse(
        localStorage.getItem('Cart') ||
        `[{}]`
    ): null


export default function Cart() {
    const [cartItems, setCartItems] = useState([])



  return (
    <div>
    CART PAGE
    </div>
  )
}
