"use client"
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import Link from 'next/link';
import { newDetails } from '../page';
import Image from 'next/image';

function fetchCat(params) {
  const cats = newDetails.find((cat) => cat.cca3 === params.slug);
  return cats;
}

export default function Page({ params }) {
  const cats = fetchCat(params);

 

  return (
    <div className='bg-gray-100 h-[160vh]  rounded-lg mb-10 border-2 '>
      <div className='flex md:space-x-60 space-x-36'>
        <Link href='/categories'>
          <IoIosArrowBack size={30} className='bg-gray-100 ml-5 mb-4' />
        </Link>
        <h2 className='font-bold'>Details</h2>
      </div>

      <div className='md:ml-[30%] ml-20'>
        <Image src={cats.image} alt='Category' width={300} height={300} className='rounded-lg' />
      </div>

      <div>
        <div className='mt-5 gap-5 px-4 grid grid-cols-2 md:ml-[15%] '>
          {cats.items.map((item, index) => (
            <div key={index}>
              <span className='font-bold'>{`${item.names}  `}</span>
              <div className='flex'>
                {/* Add appropriate icon component here */}
                {`$${item.price} /kg`}
              </div>
              <Image src={item.image} alt='Item' width={200} height={200} className='rounded-lg' />
<div className='w-[70%] rounded-lg ml-1 mt-2 text-center text-white uppercase bg-green-500'>
                {/* Replace cats.cart with appropriate text */}
               <div >{cats.cart}</div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
