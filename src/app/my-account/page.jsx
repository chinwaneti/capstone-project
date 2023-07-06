"use client"
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { GrNext } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import pic from '../images/mine.png';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MdPayment } from 'react-icons/md';
import { FaLanguage } from 'react-icons/fa';

export default function Page() {
  const [showProfileForm, setShowProfileForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem('profileName');
    if (savedName) {
      setName(savedName);
    }
  }, []);

  const handleProfileClick = () => {
    setShowProfileForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    setIsSubmitted(true);
    localStorage.setItem('profileName', name);
  };

  const handleCloseForm = () => {
    setShowProfileForm(false);
    setEmail('');
  };

  return (
    <div className="">
      <div className='rounded-lg border-solid bg-gray-300 mt-10 mb-10'>
        <div className='flex space-x-60'>
          <Link href='/'>
            <IoIosArrowBack
              size={30}
              className='bg-gray-100 ml-8 rounded-lg border-2 shadow-2xl shadow-black mb-4'
            />
          </Link>
          <h2 className='font-bold'>Account</h2>
        </div>

        <div className='ml-[45%] mt-20'>
          <Image src={pic} alt='picture' width={100} height={150} className='rounded-full border-solid border-2' />
        </div>
        <h1 className='font-bold text-center'>{isSubmitted ? name : ''}</h1>
        <div className='bg-green-700  rounded-t-2xl mt-20  text-white'>
          <div className='p-5'>
            <p>Account Overview</p>
          </div>
          <div className='p-5 flex space-x-5'>
            <div onClick={handleProfileClick} className='flex space-x-2 cursor-pointer'>
              <CgProfile size={30} style={{ color: 'green' }} className='bg-white rounded-full' />
              <p>My Profile</p>
            </div>
           
          </div>
          <div className='p-5 flex space-x-5'>
            <AiOutlineShoppingCart size={30} style={{ color: 'green' }} className='bg-white rounded-lg' />
            <p>My Order</p>
          </div>
          <div className='p-5 flex space-x-5'>
          <RiLockPasswordLine size={30} style={{ color: 'green' }} className='bg-white rounded-lg' />
          <p>Change Password</p>
          </div>
          <div className='p-5 flex space-x-5'>
            <MdPayment size={30} style={{ color: 'green' }} className='bg-white rounded-lg' />
            <p>Payment</p>
          </div>
          <div className='p-5 flex space-x-5'>
            <FaLanguage size={30} style={{ color: 'green' }} className='bg-white rounded-lg' />
            <p>Change Language</p>
          </div>
        </div>
    
    {showProfileForm && (
      <div className='fixed inset-0 flex justify-center w-[47.5%] items-center bg-gray-800 bg-opacity-50'>
        <div className='bg-white p-8 rounded-lg'>
          <div className='flex justify-between mb-4'>
            <h2 className='text-center'>My Profile</h2>
            <AiOutlineClose size={20} className='cursor-pointer' onClick={handleCloseForm} />
          </div>
          <form onSubmit={handleFormSubmit} className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-1 font-medium'>
                Name:
              </label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-1 font-medium'>
                Email:
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'
              />
            </div>
            <div className='flex justify-center'>
              <button
                type='submit'
                className='px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600'
              >
                Sign In
              </button>
              <button
                type='button'
                onClick={handleCloseForm}
                className='ml-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  </div>
);
}

