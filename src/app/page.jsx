
"use client"
import Image from 'next/image'
import Link from 'next/link'
import Slider from './components/Slider'
import slides from './components/details.json'
import Navbar from './components/Navbar'
import { useState } from 'react'



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
  <Link href='/categories'> <div> <Image src={detail.image} alt='pics' width={110} height={100} className='mx-auto mt-6'/>
    </div></Link>
    
    </section>
))
    
export default function Page() {
  return (
    <div className='border-solid border-2 mt-5 mb-14 border-gray-100 rounded-lg bg-gray-100'>
    <div><Navbar /> </div>
    <div className='mt-10'>
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
    </select></h2></div>
    
    
   

       <div className='bg-gray-200 h-8 mb-3'><ul className='flex items-center md:space-x-[74%] space-x-[60%] mt-8 mb-2'><li className='font-bold ml-3'>Categories</li>
        <Link href='/categories'><li className='text-green-700 font-bold uppercase'>See all</li></Link>
       </ul></div>
    <div className='grid grid-cols-4 gap-2'>
    {data1}
    </div>
    <div className='grid grid-cols-4 gap-14 ml-5'>
    <div className=' '>Vegetables</div> 
    <div className=''>Fruits</div>
    <div className=''>Milk & Eggs</div>
     <div>Drinks</div></div>
     <div className='h-8 mb-3 bg-gray-200'><ul className='flex items-center md:space-x-[80%] space-x-[70%] mt-8 mb-2'><li className='font-bold ml-3'>Deals</li>
    <Link href='/deals'> <li className='text-green-700 font-bold uppercase'>See all</li></Link>
     </ul></div>
     <div>
     <div className='h-486 ml-3 bg-gray-200 rounded-lg w-[96%] p-8'>
     <div><h2 className='font-bold'>50% OFF</h2>
     <div className='flex space-x-[40%]'>
     <p>On Grocery Combo Packs
     </p>
     <Image src={'https://media.istockphoto.com/id/1320617333/photo/shopping-cart-full-of-food-isolated-on-white-grocery-and-food-store-concept.jpg?s=612x612&w=0&k=20&c=e4O0Gvp-CVd6JGPTg4kh_2REP5GXJRpk7Tvdh_uaGJ0='}alt='picture' width={150} height={50} className=' hover:shadow-xl hover:shadow-black rounded-lg'/></div>
     <div>
     <Link href='/deals'><button className='bg-green-700 text-white text-center active:border-4 active:shadow-xl  active:shadow-black h-10 w-28 rounded-lg'><p className=''></p> Order Now</button></Link>
     </div>
     </div>
     </div>
     </div>
     <div className='h-8 mb-3 bg-gray-200'><ul className='flex items-center md:space-x-[70%] space-x-[55%] mt-8 mb-2'><li className='font-bold ml-3'>Popular Items</li>
     <Link href='/popular-items'><li className='text-green-700 font-bold uppercase'>See all</li></Link>
     </ul></div>
     <div className='grid grid-cols-3 gap-2'>
    
        </div>
       <div><Slider slides={slides}/></div> 


    </div>)


}


