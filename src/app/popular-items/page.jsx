"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack, IoIosCart } from 'react-icons/io';
import Link from 'next/link';
import slides from '../components/details.json';


export default function Popular() {
  const [cartItems, setCartItems] = useState([]);
  const [showItemAdded, setShowItemAdded] = useState(false);

  const handleAddToCart = (item) => {
    const updatedCartItems = [...cartItems, item];
    setCartItems(updatedCartItems);
    setShowItemAdded(true);
    setTimeout(() => {
      setShowItemAdded(false);
    }, 2000);
  };

  const data = slides.map((item) => (
    <section key={item.id} className="bg-gray-100 rounded-lg h-64 p-0 mx-auto">
      <Link href="/wishlist">
        <div className="flex justify-between font-bold w-40">{item.box}</div>
      </Link>
      <Image
        src={item.image}
        alt="pics"
        width={150}
        height={80}
        className="mx-auto hover:shadow-xl rounded-lg hover:shadow-black mt-3"
        title=""
      />
      <Link href="/cart">
        <div className="font-bold mt-7 text-black flex justify-between">{item.name}</div>
      </Link>
      <div className="text-green-700">
        ${item.price}
        <span className="text-black"> /kg </span>
      </div>
      <button
        className="w-[70%] rounded-lg ml-1 mt-2 text-center text-white uppercase bg-green-500"
        onClick={() => handleAddToCart(item)}
      >
        Add to Cart
      </button>
    </section>
  ));

  return (
    <div className="border-solid border-2 bg-gray-100 mt-5">
      <div>
        <div className="flex space-x-[35%]">
          <Link href="/">
            <IoIosArrowBack size={30} className="bg-gray-100 ml-5 mb-4" />
          </Link>
          <h2 className="font-bold text-xl">Popular Items</h2>
          <Link href="/cart">
            <div className="relative">
              <IoIosCart size={30} className="bg-gray-100 mr-5 mb-4 cursor-pointer" />
              {showItemAdded && (
                <div className="absolute top-[-10px] right-[-10px] bg-green-600 text-white px-2 py-1 rounded-full">
                  Item Added
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-10">{data}</div>
    </div>
  );
}
