'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import Image from 'next/image';
import Link from 'next/link';
import { Pagination, Autoplay } from 'swiper';



export default function Slider({slides}) {
    return (
      <Swiper
      modules={[ Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
      {slides.map((slide) =>(
      <SwiperSlide key={slide.image} className='h-52 '>
          <Image src={slide.image} alt='pics' width={200} height={200} className='rounded-lg' title={`Fresh:  ${slide.name}`}/>
      <div className='font-bold mt-7 text-black  flex justify-between'> {slide.name}</div>
       <div className='text-green-700'>${slide.price}<span className='text-black'> /kg  </span></div>
       <Link href='/'> <div className='md:w-[70%]  rounded-lg ml-1 mt-2 text-center text-white uppercase bg-green-500'> {slide.icon}</div></Link>
      </SwiperSlide>

    ))}
     </Swiper>

  )
}
