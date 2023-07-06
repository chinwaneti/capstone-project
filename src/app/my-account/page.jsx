import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {GrNext} from 'react-icons/gr'
import Link from 'next/link'
import Image from 'next/image'
import pic from '../images/mine.png'
import {CgProfile} from 'react-icons/cg'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'
import {MdPayment} from 'react-icons/md'
import {FaLanguage} from 'react-icons/fa'


export default function page() {
  return (
    <div>
    <div className='rounded-lg border-solid  bg-grey-50  mt-10'>
    <div className='flex space-x-60'>
    <Link href='/'><IoIosArrowBack size={30} className='bg-gray-100 ml-8 rounded-lg border-2 shadow-2xl shadow-black mb-4'/></Link>
    <h2 className='font-bold'>Account</h2>
    </div>

    <div className='ml-[45%] mt-20 '>
    <Image src={pic} alt='picture' width={100} height={150} className='rounded-full border-solid border-2'/>
    </div>
    <h1 className='font-bold text-center '> Chidinma Augusta Nwaneti</h1>
    <div className='bg-green-700 rounded-t-2xl mt-20 ml-6 text-white'>
    <div className='p-5'> <p>Account Overview</p></div>
    <div className='p-5 flex space-x-5'><CgProfile size={30} style={{color: 'green'}} className='bg-white rounded-full'/><p>My Profile</p></div>
    <div className='p-5 flex space-x-5'><AiOutlineShoppingCart size={30} style={{color: 'green'}} className='bg-white rounded-lg'/>  <p>My order</p></div>
    <div className='p-5 flex space-x-5'><RiLockPasswordLine size={30} style={{color: 'green'}}className='bg-white rounded-lg'/> <p>Change Password</p></div>
    <div className='p-5 flex space-x-5'><MdPayment size={30} style={{color: 'green'}}className='bg-white rounded-lg'/> <p>Payment</p></div>
    <div className='p-5 flex space-x-5'><FaLanguage size={30} style={{color: 'green'}}className='bg-white rounded-lg'/> <p>change Language</p></div>
    </div>
    </div>
    </div>
  )
}
