"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowUp } from 'react-icons/io';
import { GrNext, GrLocation } from 'react-icons/gr';
import { BiChevronDown, BiPhoneCall, BiTime, BiTimeFive } from 'react-icons/bi';
import { BsGlobe2 } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const contact = [
  {
    id: 1,
    email: 'johndoe@example.com',
    phone: '+234-123-456-7890',
    time: '2023-06-17 09:30:00',
    website: 'www.example.com',
    address: '123 Main Street, Lagos, Nigeria'
  },
  {
    id: 2,
    email: 'janesmith@example.com',
    phone: '+234-987-654-3210',
    time: '2023-06-16 14:45:00',
    website: 'www.example.com',
    address: '456 Elm Avenue, Abuja, Nigeria'
  }
];

const contact1 = [
  {
    id: 1,
    email: 'mikejohnson@example.com',
    phone: '+234-555-555-5555',
    time: '2023-06-15 18:20:00',
    website: 'www.example.com',
    address: '789 Oak Lane, Port Harcourt, Nigeria'
  },
  {
    id: 2,
    email: 'johndoe@example.com',
    phone: '+234-123-456-7890',
    time: '2023-06-17 09:30:00',
    website: 'www.example.com',
    address: '123 Main Street, Lagos, Nigeria'
  }
];

const contact2 = [
  {
    id: 1,
    email: 'mikejohnson@example.com',
    phone: '+234-555-555-5555',
    time: '2023-06-15 18:20:00',
    website: 'www.example.com',
    address: '789 Oak Lane, Port Harcourt, Nigeria'
  },
  {
    id: 2,
    email: 'johndoe@example.com',
    phone: '+234-123-456-7890',
    time: '2023-06-17 09:30:00',
    website: 'www.example.com',
    address: '123 Main Street, Lagos, Nigeria'
  }
];

const contact3 = [
  {
    id: 1,
    email: 'mikejohnson@example.com',
    phone: '+234-555-555-5555',
    time: '2023-06-15 18:20:00',
    website: 'www.example.com',
    address: '789 Oak Lane, Port Harcourt, Nigeria'
  },
  {
    id: 2,
    email: 'johndoe@example.com',
    phone: '+234-123-456-7890',
    time: '2023-06-17 09:30:00',
    website: 'www.example.com',
    address: '123 Main Street, Lagos, Nigeria'
  }
];

const contact4 = [
  {
    id: 1,
    email: 'mikejohnson@example.com',
    phone: '+234-555-555-5555',
    time: '2023-06-15 18:20:00',
    website: 'www.example.com',
    address: '789 Oak Lane, Port Harcourt, Nigeria'
  },
  {
    id: 2,
    email: 'johndoe@example.com',
    phone: '+234-123-456-7890',
    time: '2023-06-17 09:30:00',
    website: 'www.example.com',
    address: '123 Main Street, Lagos, Nigeria'
  }
];

const list = contact.map((con) => (
  <div key={con.id}>
    <div>{con.address}</div>
  </div>
));

const list1 = contact1.map((con) => (
  <div key={con.id}>
    <div>{con.phone}</div>
  </div>
));

const list2 = contact2.map((con) => (
  <div key={con.id}>
    <div>{con.website}</div>
  </div>
));

const list3 = contact3.map((con) => (
  <div key={con.id}>
    <div>{con.time}</div>
  </div>
));

const list4 = contact4.map((con) => (
  <div key={con.id}>
    <div>{con.email}</div>
  </div>
));

export default function Page() {
  const [mine, setMine] = useState(false);
  const [mine1, sheMine] = useState(false);
  const [mine2, herMine] = useState(false);
  const [mine3, hisMine] = useState(false);
  const [mine4, heMine] = useState(false);


  return (
    <div className="border-solid rounded-lg bg-gray-50 mt-5">
      <div className="flex space-x-60">
        <Link href="/newCategories">
          <IoIosArrowBack size={30} className="bg-gray-100 ml-8 rounded-lg border-2 shadow-2xl shadow-black mb-4" />
        </Link>
        <h2>Contact</h2>
        <Link href="/my-account">
          <GrNext size={27} className="bg-gray-100 mr-5 mb-4 rounded-lg border-2" />
        </Link>
      </div>

      <div className="border-2 w-[90%] mx-auto flex justify-between font-bold h-14  rounded-lg">
        <div className="flex space-x-4">
          <GrLocation size={30} style={{ color: 'green' }} />
          <h1>Address</h1>
        </div>
        <div className="ml-[40%] w-[46%]">
          <button onClick={() => setMine((prev) => !prev)} className='ml-[80%]'>
            {!mine ? <BiChevronDown size={30} style={{ color: 'green' }}/> : <IoIosArrowUp size={30} />}
          </button>
          {mine && (
            <div className="mt-5 fixed left-9 flex space-x-10 border-2 rounded-lg w-[42%] bg-gray-100">{list}</div>
          )}
        </div>
      </div>

      <div className="border-2 w-[90%] mx-auto font-bold flex justify-between mt-10 h-14 rounded-lg">
        <div className="flex space-x-4">
          <BiPhoneCall size={30} style={{ color: 'green' }} />
          <h1>Phone Number</h1>
        </div>
        <div className="w-[46%]  ml-[40%]">
          <button onClick={() => sheMine((prev) => !prev)} className='ml-[80%]'>
            {!mine1 ? <BiChevronDown size={30} style={{ color: 'green' }}/> : <IoIosArrowUp size={30} />}
          </button>
          {mine1 && (
            <div className="w-[42%] fixed mt-5 left-9 flex space-x-10 bg-gray-100 rounded-lg border-2">{list1}</div>
          )}
        </div>
      </div>

      <div className="border-2 w-[90%] mx-auto font-bold flex justify-between mt-10 h-14 rounded-lg">
        <div className="flex space-x-4">
          <BsGlobe2 size={30} style={{ color: 'green' }} />
          <h1>Website</h1>
        </div>
        <div className="w-[46%] ml-[40%]">
          <button onClick={() => herMine((prev) => !prev)}  className='ml-[80%]'>
            {!mine2 ? <BiChevronDown size={30} style={{ color: 'green' }} /> : <IoIosArrowUp size={30} />}
          </button>
          {mine2 && (
            <div className="w-[42%] mt-5 fixed left-9 flex space-x-10 bg-gray-100 rounded-lg border-2">{list2}</div>
          )}
        </div>
      </div>

        <div className="border-2 w-[90%] mx-auto font-bold flex justify-between mt-10 h-14 rounded-lg">
            <div className='flex space-x-4'>
            <BiTime size={30} style={{ color: 'green' }}/>
            <h1>Time</h1>
            </div>
            <div className="w-[46%] ml-[40%]">
            <button onClick={() => hisMine((prev) => !prev)}  className='ml-[80%]'>
            {!mine3 ? <BiChevronDown size={30} style={{ color: 'green' }} /> : <IoIosArrowUp size={30} />}
            </button>
            {mine3 && (
              <div className=" fixed flex w-[42%] mt-5 space-x-10 left-9 bg-gray-100 rounded-lg border-2">{list3}</div>
              )}
              </div>
              </div>

      <div className="border-2 w-[90%] mx-auto font-bold flex justify-between mt-10 h-14 rounded-lg">
        <div className="flex space-x-4">
          <AiOutlineMail size={30} style={{ color: 'green' }} />
          <h1>Email</h1>
        </div>
        <div className="w-[46%] ml-[40%]">
          <button onClick={() => heMine((prev) => !prev)} className='ml-[80%]'>
            {!mine4 ? <BiChevronDown size={30} style={{ color: 'green' }}/> : <IoIosArrowUp size={30} />}
          </button>
          {mine4 && (
            <div className="mt-5 left-9 fixed flex w-[42%] space-x-10 bg-gray-100 rounded-lg border-2">{list4}</div>
          )}
        </div>
      </div>
      </div>
  );
}
