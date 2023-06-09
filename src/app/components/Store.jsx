'use client'
import { createContext, useReducer } from 'react'

export const StoreContext = createContext()

const initialState = {
  cart: { cartItems: [] },
}

function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find((item) => item.slug === newItem.slug)
      const cartItems = existItem
        ? state.cart.cartItems.map((item) => (item.slug === existItem.slug ? newItem : item))
        : [...state.cart.cartItems, newItem]
      return { ...state, cart: { ...state.cart, cartItems } }
    }
    default:
      return state
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
