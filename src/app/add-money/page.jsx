"use client"
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [add, setAdd] = useState(0);
  const [addMoney, setAddMoney] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);

  useEffect(() => {
    const storedBalance = localStorage.getItem('walletBalance');
    if (storedBalance) {
      setAddMoney(parseFloat(storedBalance));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('walletBalance', addMoney.toString());
  }, [addMoney]);

  const handleButtonClick = (buttonAmount) => {
    setAdd(buttonAmount);
    setAddMoney(addMoney + buttonAmount);
  };

  const inputChange = (e) => {
    setInputAmount(parseFloat(e.target.value));
  };

  const handleMoney = () => {
    setAddMoney(addMoney + inputAmount);
    setInputAmount('');
  };

  return (
    <div className='bg-gray-100'>
      <div className='h-[20vh]'></div>
      <div className='bg-green-100 w-[90%] ml-[6%]'>
        <p>Wallet Balance</p>
        <div>
          <p>$ {addMoney}</p>
        </div>
        <div>
          <p>Add Money</p>
        </div>
        <div className='grid grid-cols-4 gap-2 py-2 ml-8 text-center'>
          <button onClick={() => handleButtonClick(100)} className='rounded-lg w-20 bg-white'>
            $100
          </button>
          <button onClick={() => handleButtonClick(200)} className='rounded-lg w-20 bg-white'>
            $200
          </button>
          <button onClick={() => handleButtonClick(500)} className='rounded-lg w-20 bg-white'>
            $500
          </button>
          <button onClick={() => handleButtonClick(1000)} className='rounded-lg w-20 bg-white'>
            $1000
          </button>
          <button onClick={() => handleButtonClick(2000)} className='rounded-lg w-20 bg-white'>
            $2000
          </button>
          <button onClick={() => handleButtonClick(3000)} className='rounded-lg w-20 bg-white'>
            $3000
          </button>
          <button onClick={() => handleButtonClick(4000)} className='rounded-lg w-20 bg-white'>
            $4000
          </button>
          <button onClick={() => handleButtonClick(5000)} className='rounded-lg w-20 bg-white'>
            $5000
          </button>
        </div>
        <div>
          <input
            type="number"
            placeholder='Enter Amount'
            className='w-[86%] py-2 ml-8'
            value={inputAmount}
            onChange={inputChange}
          />
        </div>
        <div
          className='w-[86%] py-2 ml-8 h-12 rounded-lg mt-4 font-bold text-white bg-green-600 text-center'
          onClick={handleMoney}
        >
          Add Money
        </div>
      </div>
    </div>
  );
}
