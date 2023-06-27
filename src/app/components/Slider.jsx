'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from 'swiper';



export default function Slider({slides}) {
    return (
      <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {slides.map((slide) =>(
      <SwiperSlide key={slide.image} className='h-52 '>
          <Image src={slide.image} alt='pics' width={200} height={200} className='rounded-lg' title={`scroll left or right to see more popular items:  ${slide.name}`}/>
      <div className='font-bold mt-7 text-black  flex justify-between'> {slide.name}</div>
       <div className='text-green-700'>${slide.price}<span className='text-black'> /kg  </span></div>
       <Link href='/cart'> <div className='w-[70%] rounded-lg ml-1 mt-2 text-center text-white uppercase bg-green-500'> {slide.icon}</div></Link>
      </SwiperSlide>

    ))}
     </Swiper>

  )
}
