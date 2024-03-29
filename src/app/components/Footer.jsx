import React from 'react';
import { TfiWallet } from 'react-icons/tfi';
import { BsPerson, BsDatabaseFillAdd } from 'react-icons/bs';
import {  AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer fixed bottom-0 left-0 right-0 md:w-[47.5%] sm:w-[60%] w-[100%]'>
      <div className='flex h-10 items-center justify-between px-4
       bg-gray-50 border-t border-r-green-600 hover:border-4 z-50 text-black mb-5'>
        <Link href='/'>
          <div className='hover:text-green-600'>
            <AiOutlineHome />Home
          </div>
        </Link>
        
        <Link href='/add-money'>
          <div className='hover:text-green-600'>
            <BsDatabaseFillAdd />Add-Money
          </div>
        </Link>
        <Link href='/wallet-history'>
          <div className='hover:text-green-600'>
            <TfiWallet />Wallet
          </div>
        </Link>
        <Link href='/my-account'>
          <div className='hover:text-green-600'>
            <BsPerson size={20} className='' />Profile
          </div>
        </Link>
        <Link href='/cart'>
          <div className='hover:text-green-600'>
            <AiOutlineShoppingCart size={20} className='' />Cart

          </div>
        </Link>
      </div>
    </div>
  );
}
