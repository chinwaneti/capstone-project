
import Image from 'next/image'
import React from 'react'
import pic from './images/veggies.avif'

export default function page() {
  return (
    <div className=''>
    
    <h2 className='text-center'>Location</h2>
    <div className='text-center'><span></span><h2 >New York, USA <select></select> </h2></div>

    <input type="text" id='search' name='search' placeholder ='Search food, drink, etc' className='w-[30%] ml-[35%] bg-gray-200'/>
    <h2>Categories</h2>
    <div className='grid grid-cols-4 gap-5 '>
      <div className='bg-gray-200 w-32'>
      </div>
      <div className='bg-gray-200 w-32  '>hi</div>
      <div className='bg-gray-200 w-32'>hi</div>
      <div className='bg-gray-200 w-32'>hi</div>
    </div>
    </div>
  
  )
}
