import React from 'react'
import './shoppingCart.module.css'
import {FiPlusSquare} from "react-icons/fi"


export default function page() {
  return (
    <div className='nav_box'>
    <span className='my_shop'>My Shopping </span>
    <div className='cart'>
    <span><FiPlusSquare /></span>
    <span>0</span>
    </div>
    </div>
  )
}
