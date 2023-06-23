import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {GrNext} from 'react-icons/gr'

export let newDetails = []

const details = [
  {
    "id":   1,
    "name": "Vegetables",
    "image": "https://images.unsplash.com/photo-1418669112725-fb499fb61127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhY2thZ2VkJTIwdmVnZXRhYmxlcyUyMG1hcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    "price": 1.29
  }
  ,
  {
    "id":   2,
    "name": "Fruits",
    "image": 'https://images.unsplash.com/photo-1452693051753-f0acd4cfe723?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhY2thZ2VkJTIwZnJ1aXRzJTIwbWFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60',
    "price": 3.29
    
  },
  {
    "id": 3,
    "name": "Milk & Eggs",
    "image": "https://images.unsplash.com/photo-1617049092088-8771a80edde2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    "price": 1.25
    
  }]
   newDetails = details.slice()
  const data = newDetails.map(detail=>(
    <section key={detail.id} className='bg-gray-200 rounded-lg h-32 w-4/5 p-0 mx-auto'>
    <Link href={`/categories/${detail.id}`} title={`click to see more ${detail.name}`}>
    <Image src={detail.image} alt='pics' width={100} height={80} className='mx-auto mt-6'/></Link>
    </section>

    ))
  
  const cat =[{
    "id": 1,
    "name": "Drinks",
    "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=957&q=80",
    "price": 1.29
    
  },
  {
    "id": 2,
    "name": "Cakes",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "price": 1.29
    
  },
  {
    "id": 3,
    "name": "Ice-cream",
    "image": "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aWNlJTIwY3JlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    "price": 5.29

  }]
  const data1 = cat.map(cart=>(
    <section key={cart.id} className='bg-gray-200 rounded-lg h-32 w-4/5 p-0 mx-auto'>
    <Link href={`/categories/${cart.id}`} title={`click to see more ${cart.name}`}>
    <Image src={cart.image} alt='pics' width={100} height={80} className='mx-auto mt-6'/></Link>
    </section>
  ))

  const gories =[{
    "id": 1,
    "name": "Bakery",
    "image": "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    "price": 5.34
    
  },
  {
    "id": 2,
    "name": "Snacks",
    "image": "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxzbmFja3MlMjBpbiUyMGElMjBiYXNrZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    "price": 7.29
    
  },
  {
    "id": 3,
    "name": "Grain",
    "image": "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYWluc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "price": 8.29
   
  }]
  const data2 = gories.map(glory=>(
    <section key={glory.id} className='bg-gray-200 rounded-lg h-32 w-4/5 p-0 mx-auto'>
    <Link href={`categories/${glory.id}`} title={`click to see more ${glory.name}`}><Image src={glory.image} alt='pics' width={100} height={80} className='mx-auto mt-6'/></Link>
    </section>
  ))

  const mine =[{
    "id": 1,
    "name": "Cheese",
    "image": "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "price": 1.69
    
  },
  {
    "id": 2,
    "name": "Cleaning Stuff",
    "image": "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGNsZWFuaW5nJTIwc3R1ZmZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    "price": 1.59
   
  },
  {
    "id": 3,
    "name": "Biscuit",
    "image": "https://images.unsplash.com/photo-1665355987633-ed9d3b0caa17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JlbyUyMGJpc2N1aXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
    "price": 1.99
    
  }
]
const data3 = mine.map(min=>(
  <section key={min.id} className='bg-gray-200 rounded-lg h-32 w-4/5 p-0 mx-auto'>
  <Link href={`/categories/${min.id}`} title={`click to see more ${min.name}`}>
  <Image src={min.image} alt='pics' width={100} height={80} className='mx-auto mt-6'/></Link>
  </section>
))

export default function page() {
  return (
    <div className='border-solid rounded-lg bg-gray-50 mt-5'>
    <div className='flex space-x-60'>
    <Link href='/'><IoIosArrowBack size={30} className='bg-gray-100 ml-5 mb-4'/></Link>
    <h2 className='font-bold'>Categories</h2>
    <Link href='/contact-us'><GrNext size={30} className='bg-gray-100 ml-2 mb-4'/></Link>
    </div>
    <div className='grid grid-cols-3 gap-1'>
    {data}
    </div>
    <div className='grid grid-cols-3 gap-14 ml-5 mt-3'>
    <div className=' '>Vegetables</div> 
    <div className=''>Fruits</div>
    <div className=''>Milk & Eggs</div>
    </div>
    
    <div className='grid grid-cols-3 gap-1 mt-5'>
    {data1}</div>
    <div className='grid grid-cols-3 gap-14 ml-5 mt-3'>
    <div className=' '>Drinks</div> 
    <div className=''>Cakes</div>
    <div className=''>Ice-cream</div>
    </div>
    <div className='grid grid-cols-3 gap-1 mt-5'>
    {data2}</div>
    <div className='grid grid-cols-3 gap-14 ml-5 mt-3'>
    <div className=''>Baking</div> 
    <div className=''>Snacks</div>
    <div className=''>Grains</div>
    </div>
    <div className='grid grid-cols-3 gap-1 mt-5 mb-8'>
    {data3}</div>
    <div className='grid grid-cols-3 gap-14 ml-5 mt-3'>
    <div className=''>Cheese</div> 
    <div className=''>Cleaning</div>
    <div className=''>Biscuit</div>
    </div>
    </div>
  )
}

