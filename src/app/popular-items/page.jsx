import Image from 'next/image';
import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import slides from '../components/details.json'



export default function page() {
  const data = slides.map(item=>(
    <section key={item.id} className='bg-gray-100  rounded-lg h-64 p-0 mx-auto'>
    <Link href='/wishlist'><div className='flex justify-between font-bold w-40'> {item.box}</div></Link>
    <Image src={item.image} alt='pics' width={150} height={80} className='mx-auto hover:shadow-xl rounded-lg hover:shadow-black mt-3' title=''/>
    <Link href='/cart'><div className='font-bold mt-7 text-black  flex justify-between'> {item.name} </div></Link>
     <div className='text-green-700'>${item.price}<span className='text-black'> /kg  </span></div>
     <Link href='/cart'> <div className='w-[70%] rounded-lg ml-1 mt-2 text-center text-white uppercase bg-green-500'>{item.icon}</div></Link>
    </section>
 ))
  return (
    <div className='border-solid  border-2 mb-10 bg-gray-100 mt-5'>
    <div className=''>
    <div className='flex space-x-[35%]'><Link href='/'><IoIosArrowBack size={30} className='bg-gray-100 ml-5 mb-4'/></Link>
    <h2 className='font-bold text-xl'>Popular Items</h2></div>
    </div>
    <div className='grid grid-cols-3 gap-3 mt-10'>{data}</div>
    <div className='flex space-x-60'>
    </div>
    </div>
  )
}
