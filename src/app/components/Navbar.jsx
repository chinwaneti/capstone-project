"use client"
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Orbitron } from 'next/font/google'
import {LuLogOut} from 'react-icons/lu'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdOutlineLocalOffer} from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import {IoIosPeople} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import pic from '../images/mine.png'
import {BiPhoneCall} from "react-icons/bi"
import { BiHelpCircle } from 'react-icons/bi'
import {FcRatings} from 'react-icons/fc'
import { BsCardChecklist } from 'react-icons/bs'
import { BsExclamationCircle } from 'react-icons/bs'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'



const mine = Orbitron({ subsets: ['latin'], weight: ['400']  })
export default function Navbar() {
  const [Nav, setNav] = useState(false) ;


  return (
    <div className={mine.className} >
    <nav className='bg-green-600 top-0 fixed w-[47.4%]'><ul className='flex justify-between px-5 items-center h-14'>
    <li>
    <div onClick={() => setNav ((prev) => !prev)} className=''> 
    <RxHamburgerMenu size={30} className='z-50 '/></div> 
    <div className={
      Nav ? "fixed left-0 top-0 w-[30%] z-50 h-screen bg-green-500 overscroll-auto p-10 ease-in duration-1000" 
      :  "fixed  left-[-100%] top-100 p-0 ease-in duration-500  "  }>
      <div className='flex  overscroll-auto justify-end'>
      <div onClick={() => setNav ((prev) => !prev)}> <AiOutlineClose /></div>
      </div>
      
      <div className='flex flex-col gap-4 overflow-auto  py-2 text-white '>
      <ul>
      <li> <Image src={pic} alt='mine' width={100} className='rounded-full border-2 hover:border-4'/></li>
      <li onClick={() => setNav(false)}  className='py-2'>Welcome Chidinma!</li>
      <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BsCardChecklist />Your Last Choice</li>
      <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><MdOutlineLocalOffer />Offer & Promotions {} </li>
      <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><IoIosPeople />Refer & earn</li>
      <Link href=''> <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BiPhoneCall />Contact Us</li></Link>
      <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BiHelpCircle />Help Center</li>
      <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><FcRatings />Rate Us</li>
      <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BsExclamationCircle />About Us</li>
      <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><LuLogOut />Logout</li>
      </ul>
      </div>
      </div></li>    
      <Link href='/search'><div className='flex justify-between py-3 px-6  border-b'>
      <form action="" className='w-full '>
      <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
      <BsSearch size={20} className='w-5 h-5 absolute ml-3 pointer-events-none'/>
      <input  type="search" 
      name='cap' 
      autoComplete='off'
      aria-label='Search food, drinks etc'
      placeholder=' Search on Mma Store'
      className='pr-3 pl-10 py-2 font-semibold cursor-text placeholder-gray-500 text-black rounded-lg border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:right-2 w-full'  />
      </div> 
      </form>
      </div></Link>
        <li><AiOutlineShoppingCart size={30} style={{color: 'white'}}/> </li>
    </ul></nav>
    </div>
  )
}
