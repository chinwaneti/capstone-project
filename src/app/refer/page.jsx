import React from 'react'
import { BsGiftFill, BsCoin, BsWhatsapp } from 'react-icons/bs'
import {TbConfetti} from 'react-icons/tb'
import { RxTriangleDown } from 'react-icons/rx'
import {GiPartyPopper, GiPartyFlags} from 'react-icons/gi'
import { BiCopy } from 'react-icons/bi'
import { FaTelegramPlane, FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'
import { IoIosArrowBack } from 'react-icons/io'



export default function page() {
  return (
    <div>
    <div className=''>
    <div className='flex space-x-[35%] mb-10 z-50'><Link href='/'><IoIosArrowBack size={30} className='bg-gray-100 ml-5 mb-4'/></Link>
    <h2 className='font-bold text-xl'>Refer & Earn</h2></div>
    </div>
    <div className='h-[80vh]  bg-green-500 top-0 text-white rounded-b-3xl'> 
    <div className='h-10'></div>
    <h1 className='text-white font-bold  text-center text-xl'>Refer Your Friends and Earn</h1>
    <div className='mt-6'><BsGiftFill style={{color: "yellow"}} size={100} className='mx-auto'/>  </div>
    <div className='flex space-x-2'><TbConfetti style={{color: "yellow"}} size={20} className='ml-[42%]'/> 
    <GiPartyPopper style={{color: "yellow"}} size={20} className='ml-[40%]'/>
    <RxTriangleDown style={{color: "yellow"}} size={20} className='ml-[40%]'/>
    <GiPartyFlags style={{color: "yellow"}} size={20} className='ml-[40%]'/>
    </div>
    <div className='mt-4 flex space-x-2'><BsCoin style={{color: "yellow"}} size={20} className='ml-[45%]'/> 
    <h1 className='font-bold text-2xl '>100</h1></div>
    <h1 className='text-center font-bold'>Loyality Points</h1>
    <div className='text-center mt-4'><h1>Your friend gets 100 Mma points on sign up 
   <br /> and you also get 100 Mma points too every time!!
    </h1></div>
    <div className='border-dotted ml-[30%] mt-4 rounded-lg border-2 h-20 w-60'>
    <div className='text-center'><BiCopy className='ml-48 '/><h1 className=' '>Your referral code </h1>  <h1 className='font-bold text-xl'>   ABCDG123 </h1></div>
    </div>
    <h1 className=' mt-4 text-center font-bold'>share your referral code via</h1>
    <div className='flex space-x-3 mt-5 justify-center'><div className='w-28 h-10 rounded-2xl  bg-purple-900'>
     <FaTelegramPlane style={{color: "yellow"}} size={20} className='mx-auto mt-2'/>  </div>
      <div className='w-28 h-10 rounded-2xl bg-purple-900' >
      <FaFacebookF style={{color: "yellow"}} size={20} className='mx-auto mt-2'/>  </div> 
      <div className='w-28 h-10 rounded-2xl bg-purple-900'>
      <BsWhatsapp style={{color: "yellow"}} size={20} className='mx-auto mt-2' />  </div></div>
    </div>
    <div className='bg-white mb-5  -z-50 rounded-t-2xl'>
    <div className='h-[30vh] '></div>
    <div></div>
    <h1 className='font-bold '> Frequently Asked Questions</h1>
    
    
    </div>
    </div>
  )
}
