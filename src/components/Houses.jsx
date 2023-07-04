import React from 'react'
import { houseData } from '../data/data'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { sliderSettings } from '../sliderSettings';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'


const Houses = () => {

  

  return (
    <div name='houses' className='w-full bg-gradient-to-b from-slate-100 to-slate-300'>
        <div className='w-full max-w-[1100px] mx-auto py-5 px-2'>
          <div className='py-5 relative'>
            <p className='text-xl text-yellow-500'>Best Choices</p>
            <h1 className='text-4xl font-bold text-accent py-2 underline underline-offset-8 decoration-yellow-500'>Popular Residencies</h1>
          </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {houseData.map((item,i) => {
            return(
              <SwiperSlide key={i} className='hover:rounded-md hover:bg-slate-200 hover:scale-105 transition-all mt-10'>
                <div className='rounded-md py-2 cursor-default '>
                  <img className='rounded-md w-full' src={item.img} alt="" />
                  <div className='px-3'>
                    <p className='text-primary pt-2'><span className='text-yellow-500'>$</span>{item.price}</p>
                    <p className='font-bold text-secondary text-xl py-2'>{item.name}</p>
                    <p className='text-xs text-accent pb-4'>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
    </div>
  )
}

export default Houses

const SliderButtons = () =>{
  const swiper = useSwiper()
  return (
    <div className='absolute top-1 right-0 z-50'>
      <button onClick={()=>swiper.slidePrev()} className='text-2xl bg-primary text-white mx-1 rounded-md hover:scale-105 transition-all'><AiFillCaretLeft /></button>
      <button onClick={()=>swiper.slideNext()} className='text-2xl bg-primary text-white mx-1 rounded-md hover:scale-105 transition-all'><AiFillCaretRight /></button>
    </div>
)
}