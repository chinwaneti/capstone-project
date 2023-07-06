
"use client"
import React, { useState, useEffect } from 'react';
import { TfiWallet } from 'react-icons/tfi';
import { IoIosArrowBack } from 'react-icons/io';
import { GrNext } from 'react-icons/gr';
import Link from 'next/link';

const WalletHistoryPage = () => {
  const [balance, setBalance] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedBalance = localStorage.getItem('balance');
      return savedBalance ? parseFloat(savedBalance) : 500.0; // Initial wallet balance
    }
    return 500.0; // Fallback value for server-side rendering
  });

  const [transactions, setTransactions] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTransactions = localStorage.getItem('transactions');
      return savedTransactions ? JSON.parse(savedTransactions) : [];
    }
    return []; // Fallback value for server-side rendering
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('balance', balance.toFixed(2));
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [balance, transactions]);

  const addMoney = () => {
    const amount = prompt('Enter the amount to add:');
    if (amount && !isNaN(amount)) {
      const newBalance = parseFloat(balance) + parseFloat(amount);
      setBalance(newBalance);
      const date = new Date().toLocaleDateString();
      const newTransaction = {
        description: `Money Added to Wallet`,
        amount: parseFloat(amount),
        date,
      };
      setTransactions([newTransaction, ...transactions]);
    }
  };

  return (
    <div className='bg-gray-100'>
      <div className='flex md:space-x-64 space-x-32'>
        <Link href='/my-account'>
          <IoIosArrowBack
            size={30}
            className='bg-gray-100 ml-5 rounded-lg border-2 shadow-2xl shadow-black mb-4'
          />
        </Link>
        <h2 className='font-bold'>Wallet History</h2>
       
      </div>
      <div className='rounded-lg bg-green-100 p-4 font-extrabold'>
        <div className='flex justify-between'>
          <p>Wallet Balance</p>
          <TfiWallet style={{ color: 'green' }} />
        </div>
        <span className='text-green-700'>$ {balance.toFixed(2)}</span>
        <div className='rounded-lg bg-green-700 h-14 mt-3'>
          <div onClick={addMoney} className='text-center py-3 font-bold text-white hover:shadow-lg hover:shadow-green-950'>
            Add Money
          </div>
        </div>
      </div>
      <div className='p-4'>
        <p className='font-bold mt-3'>Transaction History</p>
        {transactions.map((transaction, index) => (
          <div key={index} className='border-2 rounded-lg h-16 px-4 my-3'>
            <div className='flex justify-between'>
              <p className='font-bold'>{transaction.description}</p>
              <span
                className={`${
                  transaction.amount >= 0 ? 'text-green-700' : 'text-red-700'
                } font-bold`}
              >
                {transaction.amount >= 0 ? '+': '-'}$
                {Math.abs(transaction.amount).toFixed(2)}
              </span>
            </div>
            <div className='flex justify-between'>
              <p>{transaction.date}</p>
              <p>Balance $ {balance.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
   </div>
  );
};

export default WalletHistoryPage;
