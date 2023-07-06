"use client"
import Image from 'next/image'
import React from 'react'
import question from '../components/ask.json'
import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';

export default function Page() {
    const [searchValue, setSearchValue] = useState('');
  const [filteredResult, setFilteredResult] = useState([]);

  const text = (e) => {
    setSearchValue(e);
  };

  useEffect(() => {
    if (searchValue !== '') {
      const filteredData = question.filter((item) =>
        Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFilteredResult(filteredData);
    } else {
      setFilteredResult([]);
    }
  }, [searchValue]);

  const myData = (
    <div>
      {filteredResult.length !== 0 ? (
        filteredResult.map((data) => (
          <section key={data.id} className='flex flex-col justify-between p-4'>
            <div >{data.name}</div>
            <div >{data.title}</div>
            <div>{data.content}</div>
          </section>
        ))
      ) : (
        <div>
          <p>call: 08033107*** for further assistance</p>
        </div>
      )}
    </div>
  );
  return (
    <div className='bg-white border-2 rounded-xl '>
    <div className='ml-[40%] md:mt-20 mt-5'>
    <Image src={'https://media.istockphoto.com/id/177059056/vector/question-and-information-with-speech-bubbles.jpg?s=612x612&w=0&k=20&c=Umpkux3HpjduVw8usjaEmdBkUQfwovwvJcHKJfyOSf0='} alt='picture' width={150} height={50} className=''/>
    </div>
    <div className='mt-10  mx-auto'> <h1 className='text-center font-extrabold text-2xl'> How can we help <br /> you today? </h1> </div>
    <div className='mx-auto mt-8'><p className='text-center'>Enter your details to proceed further, <br /> enter more details about your bio</p></div>
    <div className='h-[30%]'></div>
    <div className='mt-16'>
    <form action='' className='w-full '>
    <div className='relative ml-3 flex items-center text-gray-400 focus-within:text-gray-600'>
      <BsSearch
        size={20}
        className='w-5 h-5 absolute ml-3 pointer-events-none'/>
      <input
        type='search'
        name='cap'
        autoComplete='off'
        aria-label='Search food, drinks etc'
        placeholder='Search food, drinks etc'
        className='pr-3 pl-10 h-10 py-2 font-semibold mb-2 cursor-text placeholder-gray-500 text-black rounded-lg border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:right-2 w-full'
        onChange={(e) => text(e.target.value)}/>
    </div>
    <div>
      <Link href='/'>
        <div className='bg-green-500 left-[68px] ml-2 border-2   w-[100%] rounded-xl hover:text-white overflow-auto'>
          {searchValue.length > 1 ? (
            filteredResult.length !== 0 ? (
              myData
            ) : (
              <div>
                <p>call: 0813310**** for further assistance</p>
              </div>
            )
          ) : (
            <div className='hidden'>null</div>
          )}
        </div>
      </Link>
    </div>
  </form>
  </div>

    </div>
  )
}
