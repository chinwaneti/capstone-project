import React from 'react'
import { TfiWallet } from 'react-icons/tfi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineHome } from 'react-icons/ai'
import Link from 'next/link'


export default function Footer() {
  return (
    <div className='footer'>
    <div className=' flex h-10 items-center justify-between px-4  bg-gray-50 border-t hover:border-4 text-black  mb-5'>
    <Link href='/'><div className='hover:text-green-600'><AiOutlineHome />Home</div></Link>
   <div className='hover:text-green-600'><AiOutlineHeart /> Wishlist </div>
    <Link href='/wallet-history'><div className='hover:text-green-600'><TfiWallet />Wallet</div></Link>
   <Link href='/my-account'><div className='hover:text-green-600'><BsPerson size={20} className=''/>Profile</div></Link> 

</div>
</div>
  )
}
