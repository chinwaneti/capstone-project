
"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import { LuSettings2} from 'react-icons/lu'
import {LuLogOut} from 'react-icons/lu'
import { BsCardChecklist } from 'react-icons/bs'
import { TfiWallet } from 'react-icons/tfi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import {MdOutlineLocalOffer} from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import {IoIosPeople} from 'react-icons/io'
import {BiPhoneCall} from "react-icons/bi"
import { BiHelpCircle } from 'react-icons/bi'
import {FcRatings} from 'react-icons/fc'
import { BsExclamationCircle } from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import pic from "./images/mine.png"
import Wishlist from './components/Wishlist'
import Slider from './components/Slider'
import slides from './components/details.json'



const details = [
    {
        id:1,
        name: "Vegetables",
        image: "https://media.istockphoto.com/id/121111336/photo/variety-of-raw-vegetables-in-wicker-basket-isolated-on-white.jpg?s=612x612&w=0&k=20&c=oKTl5iRYzNICMZ3rSplP-hjTvB7vqQ_0-n8bb-0Nj0w=",

    }
    ,
    {
        id:2,
        name: "Fruits",
        image: 'https://media.istockphoto.com/id/89481262/photo/miscellaneous-fruits-in-basket.jpg?s=612x612&w=0&k=20&c=No8vaP-juA-WkMjjQb1MX4Hyqk54HI1XUfIjiogMOmQ='
    }
    ,
    {
        id:3,
        name: "milk & eggs",
        image: "https://media.istockphoto.com/id/526637971/photo/eggs-and-milk.jpg?s=612x612&w=0&k=20&c=B8KwUqTprOPl05_EA9nl3SPEz81WIGDqE-bvSc4iZvU=",

    }
    ,
    {
        id:4,
        name: "drinks",
        image: "https://media.istockphoto.com/id/522579945/photo/smoothie-day-time-for-healthy-drink.jpg?s=612x612&w=0&k=20&c=Sy5L5dAuWzJXZIgX1MAq-S6YdU9ApUAoTAes36m06v8=",

    }
]





const data1 = details.map(detail=>(
    <section key={detail.id} className='bg-white rounded-lg h-32 hover:shadow-xl hover:shadow-black w-4/5 p-0 mx-auto '>
   <div> <Image src={detail.image} alt='pics' width={110} height={100} className='mx-auto mt-6'/>
    </div>
    
    </section>
))
    


export default function Home() {
    const [Nav, setNav] = useState(false);
    
  return (
    <div className='border-solid border-2 border-gray-100 rounded-lg mb-10 bg-gray-100 top-0'>
    <div className='flex justify-between items-center py-4 h-full w-[50%] px-4'>
    <div onClick={() => setNav ((prev) => !prev)}> 
    <RxHamburgerMenu size={30}/></div> 
    </div>
    <div className={
        Nav ? "fixed left-0 top-0 w-[30%] h-[70%] z-50 bg-green-500 overscroll-auto p-10 ease-in duration-1000" 
        :  "fixed  left-[-100%] top-100 p-0 ease-in duration-500  "  }>
        <div className='flex  overscroll-auto justify-end'>
            <div onClick={() => setNav ((prev) => !prev)}> <AiOutlineClose /></div>
        </div>
        
        <div className='flex flex-col gap-4 overflow-auto  py-2 text-white '>
        <ul>
        <li> <Image src={pic} alt='mine' width={100} className='rounded-full border-2 hover:border-4'/></li>
        <li onClick={() => setNav(false)}  className='py-2'>Welcome Chidinma!</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BsCardChecklist />Your Last Choice</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><MdOutlineLocalOffer />Offer & Promotions {} </li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><IoIosPeople />Refer & earn</li>
       <Link href=''> <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BiPhoneCall />Contact Us</li></Link>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BiHelpCircle />Help Center</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><FcRatings />Rate Us</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BsExclamationCircle />About Us</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><LuLogOut />Logout</li>
        </ul>
        </div>
      </div>
    
   
   
    <h2 className='text-center'>Location</h2>
    <h2 className='text-center'>New York, USA 
     <select name="cap" id="cap">
    <option value="a">Select</option>
    <option value="a">Texas</option>
    <option value="b">Ohio</option>
    <option value="c">Alaska</option>
    <option value="d">California</option>
    <option value="e">Florida</option>
    <option value="f">Georgia</option>
    </select></h2>
    
    
    <Link href='/search'><div className='flex justify-between py-3 px-6  border-b'>
    <form action="" className='w-full '>
    <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
    <BsSearch size={20} className='w-5 h-5 absolute ml-3 pointer-events-none'/>
    <LuSettings2 size={20} style={{color: 'white'}} className='w-8 h-9 absolute ml-[94%] rounded-r-lg border-r-green-600  bg-green-600 pointer-events-none'/>
    <input  type="search" 
     name='cap' 
     autoComplete='off'
     aria-label='Search food, drinks etc'
      placeholder=' Search food, drinks etc'
       className='pr-3 pl-10 py-2 font-semibold cursor-text placeholder-gray-500 text-black rounded-lg border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:right-2 w-full' 

        onChange={(e)=> text(e.target.value)} />
        </div> 
        </form>
        </div></Link>

       <div className=''><ul className='flex space-x-[70%] mt-8 mb-2'><li className='font-bold ml-3'>Categories</li>
        <Link href='/newCategories'><li className='to-green-700'>See all</li></Link>
       </ul></div>
    <div className='grid grid-cols-4 gap-2'>
    {data1}
    </div>
    <div className='grid grid-cols-4 gap-14 ml-5'>
    <div className=' '>Vegetables</div> 
    <div className=''>Fruits</div>
    <div className=''>Milk & Eggs</div>
     <div>Drinks</div></div>
     <div className=''><ul className='flex space-x-[65%] mt-8 mb-2'><li className='font-bold ml-3'>Deals</li>
    <Link href='/combo-packs'> <li className='text-green-700'>See all</li></Link>
     </ul></div>
     <div>
     <div className='h-486 ml-3 bg-gray-200 rounded-lg w-[96%] p-8'>
     <div><h2 className='font-bold'>50% OFF</h2>
     <div className='flex space-x-[40%]'>
     <p>On Grocery Combo Packs
     </p>
     <Image src={'https://media.istockphoto.com/id/1320617333/photo/shopping-cart-full-of-food-isolated-on-white-grocery-and-food-store-concept.jpg?s=612x612&w=0&k=20&c=e4O0Gvp-CVd6JGPTg4kh_2REP5GXJRpk7Tvdh_uaGJ0='}alt='picture' width={150} height={50} className=' hover:shadow-xl hover:shadow-black rounded-lg'/></div>
     <div>
     <Link href='/combo-packs'><button className='bg-green-700 text-white text-center active:border-4 active:shadow-xl  active:shadow-black h-10 w-28 rounded-lg'><p className=''></p> Order Now</button></Link>
     </div>
     </div>
     </div>
     </div>
     <div className=''><ul className='flex space-x-[65%] mt-8'><li className='font-bold ml-3'>Popular Items</li>
     <Link href='/popular-items'><li className='text-green-700'>See all</li></Link>
     </ul></div>
     <div className='grid grid-cols-3 gap-2'>
    
        </div>
       <div><Slider slides={slides}/></div> 
     <div className='container mt-5 text-light'>
     </div>
     <div>
     <div>
        <div className=' flex space-x-20 h-20 rounded-3xl p-5 bg-green-500 hover:border-4 text-black hover:text-white mb-5'>
            <Link href=''><div className=''><AiOutlineHome /><div className=''>Home</div></div></Link>
            <div className=''><Wishlist className=''/> <div className=''>Wishlist</div> </div>
            <Link href=''><div className=''><AiOutlineShoppingCart /><div className=''>Cart</div></div></Link>
            <Link href=''><div className=''><TfiWallet /><div className=''>Wallet</div></div></Link>
            <div className='flex justify-between items-center h-full w-[50%] px-4'>
           <Link href=''><BsPerson size={20} className=''/><p className=''>Profile </p></Link> 
    
        </div>
        </div>
        </div>
    </div>
    </div>

    

  )
}


