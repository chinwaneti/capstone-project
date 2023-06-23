"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {IoIosArrowBack} from 'react-icons/io'
import {GrNext} from 'react-icons/gr'
import {BiChevronDown} from 'react-icons/bi'
import { BiPhoneCall} from 'react-icons/bi'
import {IoIosArrowUp} from "react-icons/io"
import { GrLocation } from 'react-icons/gr'
import { BsGlobe2 } from 'react-icons/bs'
import { BiTimeFive } from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'

const contact = [
  {
    id: 1,
    email: "johndoe@example.com",
    phone: "+234-123-456-7890",
    time: "2023-06-17 09:30:00",
    website: "www.example.com",
    address: "123 Main Street, Lagos, Nigeria"
  },
  {
    id: 2,
    email: "janesmith@example.com",
    phone: "+234-987-654-3210",
    time: "2023-06-16 14:45:00",
    website: "www.example.com",
    address: "456 Elm Avenue, Abuja, Nigeria"
  }]

  const contact1 =[{
    id: 1,
    email: "mikejohnson@example.com",
    phone: "+234-555-555-5555",
    time: "2023-06-15 18:20:00",
    website: "www.example.com",
    address: "789 Oak Lane, Port Harcourt, Nigeria"
  },  {
    id: 2,
    email: "johndoe@example.com",
    phone: "+234-123-456-7890",
    time: "2023-06-17 09:30:00",
    website: "www.example.com",
    address: "123 Main Street, Lagos, Nigeria"
  },

];
const contact2 =[{
  id: 1,
  email: "mikejohnson@example.com",
  phone: "+234-555-555-5555",
  time: "2023-06-15 18:20:00",
  website: "www.example.com",
  address: "789 Oak Lane, Port Harcourt, Nigeria"
},  {
  id: 2,
  email: "johndoe@example.com",
  phone: "+234-123-456-7890",
  time: "2023-06-17 09:30:00",
  website: "www.example.com",
  address: "123 Main Street, Lagos, Nigeria"
},

];

const contact3 =[{
  id: 1,
  email: "mikejohnson@example.com",
  phone: "+234-555-555-5555",
  time: "2023-06-15 18:20:00",
  website: "www.example.com",
  address: "789 Oak Lane, Port Harcourt, Nigeria"
},  {
  id: 2,
  email: "johndoe@example.com",
  phone: "+234-123-456-7890",
  time: "2023-06-17 09:30:00",
  website: "www.example.com",
  address: "123 Main Street, Lagos, Nigeria"
},

];

const contact4 =[{
  id: 1,
  email: "mikejohnson@example.com",
  phone: "+234-555-555-5555",
  time: "2023-06-15 18:20:00",
  website: "www.example.com",
  address: "789 Oak Lane, Port Harcourt, Nigeria"
},  {
  id: 2,
  email: "johndoe@example.com",
  phone: "+234-123-456-7890",
  time: "2023-06-17 09:30:00",
  website: "www.example.com",
  address: "123 Main Street, Lagos, Nigeria"
},

];


const list = contact.map(con => (
  <section key={con.id}>
  <div>{con.address} </div>
  </section>
))
const list1 = contact1.map(con => (
  <section key={con.id}>
  <div>{con.phone} </div>
  </section>
))
const list2 = contact2.map(con => (
    <section key={con.id}>
    <div>{con.website} </div>
    </section>
  ))
  const list3 = contact3.map(con => (
    <section key={con.id}>
    <div>{con.time} </div>
    </section>
  ))
  const list4 = contact4.map(con => (
    <section key={con.id}>
    <div>{con.email} </div>
    </section>
  ))


export default function page() {
  const [mine, setMine] = useState(false)
  const [mine1, sheMine] = useState(false)
  const [mine2, herMine] = useState(false)
  const [mine3, hisMine] = useState(false)
  const [mine4, heMine] = useState(false)

  return (
    <div className='border-solid rounded-lg bg-gray-50 mt-5'>
    <div className='flex space-x-60'>
    <Link href='/categories'><IoIosArrowBack size={30} className='bg-gray-100 ml-8 rounded-lg border-2 shadow-2xl shadow-black mb-4'/></Link>
    <h2 className=''>Contact</h2>
    <Link href='/my-account'><GrNext size={27} className='bg-gray-100 mr-5 mb-4 rounded-lg border-2'/></Link>
    </div>


    <div  className='border-2 w-[90%] mx-auto flex justify-between font-bold h-14  rounded-lg '><div className='flex space-x-4'><GrLocation size={30} style={{color: 'green'}}/> <h1>Address</h1> </div>
    <div className='fixed w-[46%]'> <button onClick={() => setMine ((prev) => !prev)}>{!mine ? (<BiChevronDown size={30}/>) : (<IoIosArrowUp size={30}/>)}  </button>
    {mine && (<div className='mt-5 flex space-x-10 border-2 rounded-lg w-[90%] bg-gray-100 '>{list}</div>)}
    </div></div>


    <div className='border-2 w-[90%] mx-auto font-bold flex justify-between mt-6 h-14 rounded-lg '><div className='flex space-x-4'><BiPhoneCall size={30} style={{color: 'green'}}/> <h1>phone number</h1> </div>
     <div className='w-[46%] fixed'> <button onClick={() => sheMine ((prev) => !prev)}>{!mine1 ? (<BiChevronDown size={30}/>) : (<IoIosArrowUp size={30}/>)}  </button>
    {mine1 && (<div className='w-[90%] mt-5 mr-8 flex space-x-10 bg-gray-100 rounded-lg border-2 '>{list1}</div>)}
    </div></div>


    <div className='border-2 w-[90%] mx-auto font-bold mt-6 h-14 rounded-lg '><div className='flex space-x-4'><BsGlobe2 size={30} style={{color: 'green'}}/> <h1>web</h1></div>
    <div className='w-[46%] fixed'><button onClick={() => herMine ((prev) => !prev)}> {!mine2 ? (<BiChevronDown size={30} style={{color: 'green'}}/>) : (<IoIosArrowUp size={30}/>)}  </button>
    {mine2 && (<div className=' mt-5 mr-8 flex space-x-10 bg-gray-100 rounded-lg border-2 '>{list2}</div>)}
    </div></div>

    <div>
    <div className='border-2 w-[90%] mx-auto font-bold mt-6 h-14 rounded-lg '><h1>Time</h1></div>
    <div className='w-[46%] fixed'><button onClick={() => hisMine ((prev) => !prev)}> {!mine3 ? (<BiChevronDown size={30} style={{color: 'green'}}/>) : (<IoIosArrowUp size={30}/>)}  </button></div>
    {mine3 && (<div className='  mr-8 flex w-[90%] mx-auto space-x-10 bg-gray-100 rounded-lg border-2 '>{list3}</div>)}
   
    </div>


    <div className='border-2 w-[90%] mx-auto font-bold mt-6 h-14 rounded-lg '><div className='flex space-x-4'><AiOutlineMail size={30} style={{color: 'green'}}/><h1>Email</h1></div>
      <div className='w-[46%] fixed'><button onClick={() => heMine ((prev) => !prev)}> {!mine4 ? (<BiChevronDown size={30} style={{color: 'green'}}/>) : (<IoIosArrowUp size={30}/>)}  </button>
    {mine4 && (<div className=' mt-5 mr-8 flex space-x-10 bg-gray-100 rounded-lg border-2 '>{list4}</div>)}
    </div></div>
   
    </div>
  
  )
}
