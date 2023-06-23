import React from 'react'
import {TfiWallet} from 'react-icons/tfi'
import {IoIosArrowBack} from 'react-icons/io'
import {GrNext} from 'react-icons/gr'
import Link from 'next/link'

export default function page() {
  return (
    <div className='bg-gray-100'>
    <div className='flex space-x-64'>
    <Link href='/my-account'><IoIosArrowBack size={30} className='bg-gray-100 ml-5 rounded-lg border-2 shadow-2xl shadow-black mb-4'/></Link>
    <h2 className='font-bold'>Wallet</h2>
    <Link href='/add-money'><GrNext size={27} className='bg-gray-100  mb-4 rounded-lg border-2'/></Link>
    </div>
    <div className='rounded-lg bg-green-100 p-4 font-extrabold '>
    <div className=' flex justify-between '><p>Wallet Balance</p> <TfiWallet style={{color: 'green'}}/></div>
    <span className='text-green-700'>$ 500.00</span>
    <div className='rounded-lg bg-green-700 h-14 mt-3'><p className='text-center py-3 font-bold text-white hover:shadow-lg hover:shadow-green-950'>Add Money</p></div>
    </div>
    <div className='p-4'>
    <p className='font-bold mt-3'>Today</p>
    <div className=' border-2 rounded-lg h-16   px-4 '>
    <div className='flex justify-between'> <p className='font-bold'>Money Added to Wallet</p> <span className='text-green-700 font-bold'>+$500.00</span></div>
    <div className='flex justify-between'> <p>24 April / 7:30 AM</p> <p>Balance $12,000.00</p></div>
    </div>

    <p className='font-bold mt-3'>Yesterday</p>
    <div  className=' border-2 rounded-lg h-16   px-4  '>
    <div className='flex justify-between'> <p className='font-bold'>Order No 34526</p> <span className='text-red-700 font-bold'>-$500.00</span></div>
    <div className='flex justify-between'> <p>23 April / 9:30 AM</p> <p>Balance $7,000.00</p></div>
    </div>


    <p className='font-bold mt-3'>22 April 2023</p>
    <div  className=' border-2 rounded-lg h-16   px-4'>
    <div className='flex justify-between'> <p className='font-bold'>Refund for Order 45378</p> <span className='text-green-700 font-bold'>+$500.00</span></div>
    <div className='flex justify-between'> <p>24 April / 7:30 AM</p> <p>Balance $12,000.00</p></div>
    </div>


    <div  className=' border-2 rounded-lg h-16   px-4 py-2 '>
    <div className='flex justify-between'> <p className='font-bold'>Money Added to Wallet</p> <span className='text-green-500 font-bold'>+$500.00</span></div>
    <div className='flex justify-between'> <p>24 April / 7:30 AM</p> <p>Balance $12,000.00</p></div>
    </div>

    <div  className=' border-2 rounded-lg h-16   px-4 py-2 '>
    <div className='flex justify-between'> <p className='font-bold'>Money Added to Wallet</p> <span className='text-green-700 font-bold'>+$500.00</span></div>
    <div className='flex justify-between'> <p>24 April / 7:30 AM</p> <p>Balance $12,000.00</p></div>
    </div>
    </div>
    </div>
  )
}
