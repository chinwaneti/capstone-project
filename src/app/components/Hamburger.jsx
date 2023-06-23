// "use client"
// import { useState } from 'react'
// import Link from 'next/link'
// import React from 'react'
// import {RxHamburgerMenu} from 'react-icons/rx'

// export default function Hamburger() {
//   const [Nav, setNav] = useState(false)
//   return (
//     <div>
//     <nav className='fixed w-[50%]  h-24 shadow-xl bg-white'>
//     <div>Left Side</div>
//     <div className='flex justify-between items-center h-full w-[50%] px-4'>
//    <button onClick={() => setNav ((prev) => !prev)}>  <Link href='/'> <RxHamburgerMenu /></Link> </button></div>
//     <div className={
//       Nav ? "fixed left-0 top-0 w-[20%] h-screen bg-green-700 p-10 ease-in duration-500" 
//       :  "fixed  left-[-100%] top-100 p-0 ease-in duration-500"  }>
//       <div>
//       <div></div>
//       <div><h1>Wellcome Chidinma</h1></div>
//       <div><p>Your Last Choice</p></div>
//       <div><p>Offer & Promotions  </p></div>
//       <div><p>Order History </p></div>
//       <div><p>Refer & earn</p></div>
//       <div><p>Contact Us</p></div>
//       <div><p>Help Center</p></div>
//       <div><p>Rate Us</p></div>
//       <div><p>About Us</p></div>
//       <div><p>Logout</p></div>
//       </div>
//     </div>
    
//     </nav>
//     </div>
//   )
// }
