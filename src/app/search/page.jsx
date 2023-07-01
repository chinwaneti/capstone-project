'use client'
import { useState, useEffect } from 'react';
import React from 'react'
import info from '../components/details.json'
import Link from 'next/link';
import { LuSettings2 } from 'react-icons/lu';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';


export default function page() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredResult, setFilterResult] = useState([])



const text = (e) => {
    setSearchValue(e)
    console.log(searchValue);

    if (searchValue !== ''){
        const filteredData = info.filter((item)=>{
            return Object.values(item)
            .join('').toLowerCase().includes(searchValue.toLowerCase())
        });
        setFilterResult(filteredData)
    }
  
}
useEffect(() => {
    searchValue === '' ? setFilterResult ([]) : myData
})


const myData = filteredResult.map(data => (
    <section key={data.id} className='flex justify-between p-4 '>
    <div>{data.name}</div>
    
    </section>
))
  return (
    <div>  <div className='flex justify-between py-3 px-6 bg-gray-200 h-screen border-b' >
    <Link href='/'><div className='h-10 py-3'><AiOutlineArrowLeft size={25}/></div></Link>
    <form action="" className='w-full '>
    <div className='relative ml-3 flex items-center text-gray-400 focus-within:text-gray-600'>
    <BsSearch size={20} className='w-5 h-5 absolute ml-3 pointer-events-none'/>
    <input  type="search" 
     name='cap' 
     autoComplete='off'
     aria-label='Search food, drinks etc'
      placeholder=' Search food, drinks etc'
       className='pr-3 pl-10 h-10 py-2 font-semibold cursor-text placeholder-gray-500 text-black rounded-lg border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:right-2 w-full' 

        onChange={(e)=> text(e.target.value)} />
        <div>
    
       <Link href='/popular-items'><div className='bg-green-500 left-[68px] fixed   border-2 w-[40%] mt-10 rounded-xl hover:text-white overflow-auto' >
        {searchValue.length > 1 ? (
            filteredResult.length != 0 ? (myData) : (
                <div><p> Oops! Item not Found</p></div>
            ) 
        ) : <div className='hidden'>null</div>  }
        </div></Link> 
        </div>
        </div> 
        </form>
        </div>
        </div>
  )
}
