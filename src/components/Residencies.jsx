import React from 'react'
import firm1 from '../assets/firm1.avif'
import firm2 from '../assets/firm2.avif'
import firm3 from '../assets/firm3.avif'
import firm4 from '../assets/firm4.avif'

const Residencies = () => {
  return (
    <div name='residencies' className='w-full'>
        <div className='w-full max-w-[1100px] mx-auto py-5 px-2'>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-4 py-10'>
                <div className='relative rounded-full flex items-center justify-center'>
                    <img src={firm1} alt="" className='rounded-full w-40'/>   
                </div>
                <div className='relative rounded-full flex items-center justify-center'>
                    <img src={firm2} alt="" className='rounded-full w-40'/>   
                </div>
                <div className='relative rounded-full flex items-center justify-center'>
                    <img src={firm3} alt="" className='rounded-full w-40'/>   
                </div>
                <div className='relative rounded-full flex items-center justify-center'>
                    <img src={firm4} alt="" className='rounded-full w-40'/>   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Residencies
