import React from 'react'
import hero from '../assets/hero.webp'
import {HiLocationMarker} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-[30rem] bg-black'>
        <div className='w-full h-full relative sm:flex sm:gap-2 flex-row sm:px-2 max-w-[1100px] mx-auto'>
            <div className='sm:relative sm:w-1/2 w-full h-full z-10 bg-black/40 absolute top-0 left-0 flex justify-center items-center'>
                <div className='w-1/2 relative sm:w-full max-w-lg'>
                    <h1 className='text-4xl font-bold text-yellow-500'>Discover</h1>
                    <h1 className='text-4xl font-bold text-yellow-500'>Most Suitable</h1>
                    <h1 className='text-4xl font-bold text-yellow-500'>Property</h1>
                    <p className='text-sm py-5 text-text'>
                        Find a variety of properties that suit you very easily.
                        Forget all difficulties in finding a residence for you.
                    </p>
                    <div className='w-full bg-text px-2 py-1 rounded-md flex flex-row gap-1 items-center'>
                        <HiLocationMarker className='text-4xl text-blue-500 '/>
                        <input type="text" placeholder='Search' className='w-full outline-none bg-transparent' />
                        <button className='bg-primary text-text p-1 rounded-md hover:scale-105 transition-all cursor-pointer'>Search</button>
                    </div>
                    <div className='text-white w-full text-center p-2 flex items-center justify-around gap-2'>
                        <div className='py-1 '>
                            <p className='text-xl'>9,000<span className='text-yellow-500'>+</span></p>
                            <p className='text-xs'>Premium Products</p>
                        </div>
                        <div className='py-1 '>
                            <p className='text-xl'>2,000<span className='text-yellow-500'>+</span></p>
                            <p className='text-xs'>Happy Customer</p> 
                        </div>
                        <div className='py-1 '>
                            <p className='text-xl'>30<span className='text-yellow-500'>+</span></p>
                            <p className='text-xs'>Award Winnings</p>
                        </div>
                    </div>
                    <div className='absolute -top-10 left-40 w-16 h-16  rounded-full bg-gradient-to-l from-primary to-secondary opacity-70'></div>
                </div>
            </div>
            <img src={hero} alt=""  
            className='w-full h-full object-cover my-auto sm:w-1/2 sm:h-5/6 sm:rounded-t-full sm:border-4'/>
        </div>
    </div>
  )
}

export default Hero
