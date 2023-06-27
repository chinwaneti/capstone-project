
"use client"
import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {HiOutlineMinus} from 'react-icons/hi'
import {LuPlus} from 'react-icons/lu'
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
// import Sliding from './components/Swiper'


// const [searchValue, setSearchValue] =useState('')
// const [filterResult, setFilterResult] = useState([])

// const text = (e) => {
//     setSearchValue(e)

//     if(searchValue !== '') {const filterData = details.filter{return object.values(item) => item.name == searchValue)}
// }


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
const extra = [
    {
        id:1,
        box:   '25% 0ff',
        icon: <BsFillSuitHeartFill size={30}  style={{color:'red'}}/>,
        name: "Apples",
        image: "https://media.istockphoto.com/id/1365099869/photo/six-apples.jpg?s=612x612&w=0&k=20&c=Kx9jNvEET5ERr7oHNFMxroTc54K1Ngk7R1BW9ICX2PU=",
        price: 2.99,
        icons:  <LuPlus size={30} style={{color: 'white'}}   className='bg-green-700  rounded-l-3xl'/>


    }
    ,
    {
        id:2,
        box:   '20% 0ff',
        icon: <BsFillSuitHeartFill size={30}  style={{color:'red'}}/>,
        name: "Oranges",
        image: "https://media.istockphoto.com/id/1227301369/photo/whole-cross-section-and-quarter-of-fresh-organic-navel-orange-with-leaves-in-perfect-shape-on.webp?b=1&s=170667a&w=0&k=20&c=uimgulwrNTf72rAbIOdLvObEgsJSZoCqWm9Qxojjl7Q=",
        price:  3.99,
        line:  <HiOutlineMinus size={100} style={{color: 'grey'}}/>,
        icons:  <LuPlus size={30} style={{color: 'white'}}  className='bg-green-700 rounded-l-3xl'/>
        

    },
        {
            id:3,
            box:   '15% 0ff',
            icon: <BsFillSuitHeartFill size={30} style={{color:'red'}}/>,
            name: "Pineapples",
            image: "https://media.istockphoto.com/id/838351280/photo/pineapple-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=rkdglo6nP-KNSug9iw_tCTwhgXknL-HdqR2jrY1jpo0=",
            price: 2.99,
            icons:  <LuPlus size={30} style={{color: 'white'}} className='bg-green-700 rounded-l-3xl'/>

        }
    ]
     const list = extra.map(ex=>(
        <section key={ex.id} className='bg-gray-100  rounded-lg h-64 w-4/5 p-0 mx-auto'>
        <Link href='/wishlist'><div className='flex justify-between font-bold w-40'> {ex.box} {ex.icon}</div></Link>
        <Image src={ex.image} alt='pics' width={150} height={80} className='mx-auto hover:shadow-xl rounded-lg hover:shadow-black mt-3'/>
        <Link href='/cart'><div className='font-bold mt-7 text-black  flex justify-between'> {ex.name} {ex.icons}</div></Link>
         <div className='text-green-700'>${ex.price}<span className='text-black'> /kg  </span></div>
        </section>
     ))


export default function page() {
  const [Nav, setNav] = useState(false)
  const [profile, setProfile] = useState(false)

  return (
    <div className='border-solid border-2 border-gray-100 rounded-lg mb-10 bg-gray-100 top-0'>
    <div className='flex justify-between items-center h-full w-[50%] px-4'>
    <div onClick={() => setNav ((prev) => !prev)}> 
    <RxHamburgerMenu size={30}/></div></div>
    <div className={
        Nav ? "fixed left-0 top-0 w-[30%] h-screen bg-green-500 p-10 ease-in duration-1000" 
        :  "fixed  left-[-100%] top-100 p-0 ease-in duration-500  overflow-scroll"  }>
        <div className='flex  justify-end'>
            <div onClick={() => setNav ((prev) => !prev)}> <AiOutlineClose /></div>
        </div>
        
        <div className='flex flex-col gap-4 py-2 text-white '>
        <ul>
        <li> <Image src={pic} alt='mine' width={100} className='rounded-full border-2 hover:border-4'/></li>
        <li onClick={() => setNav(false)}  className='py-2'>Welcome Chidinma!</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BsCardChecklist />Your Last Choice</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><MdOutlineLocalOffer />Offer & Promotions {} </li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><IoIosPeople />Refer & earn</li>
       <Link href='/contact-us'> <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BiPhoneCall />Contact Us</li></Link>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BiHelpCircle />Help Center</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><FcRatings />Rate Us</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><BsExclamationCircle />About Us</li>
        <li onClick={() => setNav(false)} className='py-2 flex space-x-4'><LuLogOut />Logout</li>
        </ul>
        </div>
        
      </div>
    
   
   
    <h2 className='text-center'>Location</h2>
    <h2 className='text-center'>New York, USA <select name="cap" id="cap"></select></h2>
    <div className='' > <BsSearch /> <input  type="text" name='cap' id='cap'  placeholder='Search food, drinks etc'  className='bg-gray-50  border-2 ml-4 rounded-r-lg w-[95%] border-solid ' /></div>
    <div className=''><ul className='flex space-x-[70%] mt-8 mb-2'><li className='font-bold ml-3'>Categories</li>
    <Link href='/categories'><li className='text-green-700'>See all</li></Link> 
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
     <Link href='/'><li className='text-green-700'>See all</li></Link>
     </ul></div>
     <div className='grid grid-cols-3 gap-2'>
        {list}
     </div>
     <div className='container mt-5 text-light'>
     </div>
     <div>
     <div>
        <div className=' flex space-x-20 h-20 rounded-3xl p-5 bg-green-500 hover:border-4 text-black hover:text-white mb-5'>
            <Link href='/'><div className=''><AiOutlineHome /><div className=''>Home</div></div></Link>
            <div className=''><Wishlist className=''/> <div className=''>Wishlist</div> </div>
            <Link href=''><div className=''><AiOutlineShoppingCart /><div className=''>Cart</div></div></Link>
            <Link href='/add-money'><div className=''><TfiWallet /><div className=''>Wallet</div></div></Link>
            <div className='flex justify-between items-center h-full w-[50%] px-4'>
            <div onClick={() => setProfile ((prev) => !prev)}> 
            <BsPerson size={20} className=''/><p className=''>Profile </p>
    <div className={
        profile ? "fixed left-7 top-20 w-[40%] h-[70vh] bg-gray-100 p-10 " 
        :  "fixed  left-[-100%] top-100 p-0 ease-in duration-500"
    }>
        <div className='flex justify-end'>
        <div onClick={() => setProfile ((prev) => !prev)}>
        <AiOutlineClose /> </div></div>
        <div>
        <h1  className='font-bold text-xl'>Login</h1>
        <p className='mt-3'>Get  Access To Your Orders</p>
        <div>
        <div onClick={() => setProfile(false)}><input type='email' placeholder='Enter Username/Email' className='border-2 rounded-lg h-10 w-full'/></div>
        <div onClick={() => setProfile(false)}><input type='password' placeholder='Enter Password' className='border-2 rounded-lg h-10 w-full mt-5'/></div>
        <div >
        <div onClick={() => setProfile(false)}><input type="checkbox" id='Rem' />
        <label id="Rem">Remember Me</label></div>
        <p className='text-right'>Lost your Password?</p>
        </div>
        <div onClick={() => setProfile(false)} className='border-2 cursor-pointer rounded-lg h-10 mt-5'><p className='text-center py-3'>NEW TO FOODIE? SIGN UP</p></div>
        <div onClick={() => setProfile(false)} className='border-2  cursor-pointer rounded-lg h-10 mt-5 bg-green-500'><p className='text-center py-3'>LOG IN</p></div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div></div>
    </div>

    

  )
}


