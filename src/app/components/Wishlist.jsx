'use client'
import { useState } from 'react'
import React from 'react'
import { GrFavorite } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'


export default function Wishlist() {
  const [wishlist, setWishlist] = useState(false)
    
  return (
    <div>
    <div onClick={() => setWishlist ((prev) => !prev)}> 
    <GrFavorite size={20} className='hover:text-green-500'/>
<div className={
wishlist ? "fixed left-7 top-20 w-[40%] h-[70vh] bg-gray-200 p-10 " 
:  "fixed  left-[-100%] top-100 p-0 ease-in duration-500"
}>
<div className='flex justify-end'>
<div onClick={() => setWishlist ((prev) => !prev)}>
<AiOutlineClose /> </div></div>
<div>
<h1  className='font-bold text-xl'>My Wishlist</h1>
<div>

</div>
</div>
</div>
</div>
</div>
  )
}
