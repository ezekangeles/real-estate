import React from 'react'

const Footed = () => {
  return (
    <div name='footed' className='w-full'>
        <div className='w-full max-w-[1100px] mx-auto px-2 py-5'>
            <div className='flex flex-col sm:flex-row justify-between gap-2'>
                <div className='sm:w-1/2 md:w-1/3 mb-4 '>
                    <h2 className='text-xl text-yellow-500 font-bold'>Keze's</h2>
                    <p className='text-sm text-slate-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero dignissimos, fugiat sit eum necessitatibus iure.</p>
                </div>
                <div className='sm:w-1/2 md:w-1/3'>
                    <h2 className='text-xl text-yellow-500 font-bold'>Information</h2>
                    <p className='text-sm text-slate-500'>3002 Paombong Bulacan</p>
                    <ul className='flex flex-row justify-between mt-3 font-bold text-sm text-slate-500'>
                        <li className='cursor-pointer hover:scale-105 transition-all'>Property</li>
                        <li className='cursor-pointer hover:scale-105 transition-all'>Services</li>
                        <li className='cursor-pointer hover:scale-105 transition-all'>Product</li>
                        <li className='cursor-pointer hover:scale-105 transition-all'>About Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footed
