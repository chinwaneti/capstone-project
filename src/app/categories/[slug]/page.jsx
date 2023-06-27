import React from 'react'
import Image from 'next/image'
import { newDetails } from '../page'
import { IoIosArrowBack } from 'react-icons/io'
import Link from 'next/link'
import { AiOutlineHeart } from 'react-icons/ai'


function fetCat(params){
  const cats = newDetails.find((cat) => cat.cca3 === params.slug)
  return cats
}

export default function page({params}) {
  const cats = fetCat(params)
  return (
    <div className='bg-gray-100 h-[160vh] rounded-lg border-2 '>
    <div className='flex space-x-60'>
    <Link href='/categories'><IoIosArrowBack size={30} className='bg-gray-100 ml-5 mb-4'/></Link>
    <h2 className='font-bold'>Details</h2>
    </div>

    <div className='ml-[30%]  '>
    <Image src={cats.image} width={300} height={300} className='rounded-lg'/>
    </div>
    <div>
    <div className=' mt-5 gap-5 grid grid-cols-2 ml-[15%]'>{cats.items.map((item, index) => (
      
      <div className=''>
      <span className='font-bold '>{`${item.names}  `}</span>
      <div className='flex'>{cats.icon} 
      {`$${item.price} /kg`}</div>
       <Image src={item.image} width={200} height={200} className='rounded-lg'/>
       <div className='w-[70%] rounded-lg ml-1 mt-2 text-center text-white uppercase bg-green-500'>{cats.cart} </div>
      </div>
    ))}</div>
    
      
    </div>
    </div>
  )
}
