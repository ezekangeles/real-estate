import React from 'react'
import { contact } from '../data/contact'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-gradient-to-b from-slate-500 to-slate-50'>
        <div className='w-full max-w-[1100px] mx-auto'>
            <div className='h-[30rem] w-full relative sm:flex flex-row'>
                <div className='absolute sm:relative sm:w-1/2 sm:px-2 top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-black/80 flex justify-center flex-col px-2'>
                    <p className='text-xl text-yellow-500 font-bold'>Our Contact</p>
                    <h1 className='text-2xl font-bold text-white py-1'>Easy to Contact Us</h1>
                    <p className='text-sm text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quisquam veniam. Eos placeat vitae nisi in temporibus accusantium qui totam.</p>
                    <div className='text-slate-200 grid grid-cols-2 gap-2 my-5'>
                        {contact.map((item,i) =>{
                            return (
                                <div key={i} className='bg-black/50 rounded-md p-2 hover:scale-105 transition-all'>
                                    <div className='flex items-center flex-col w-5/6 mx-auto'>
                                        <div className='flex flex-row items-center gap-3 mb-2'>
                                            <p className='text-2xl'>{item.icon}</p>
                                            <div className='flex flex-col text-xs text-yellow-500'>
                                                <p className='font-bold'>{item.title}</p>
                                                <p>{item.descrition}</p>
                                            </div>
                                        </div>
                                        <button className='hover:bg-primary bg-primary/25 border border-primary text-white text-xs  w-full rounded-md py-1 hover:scale-105 transition-all'>{item.button}</button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <img className='w-full h-full object-cover sm:w-1/2'
                 src="https://images.pexels.com/photos/2194399/pexels-photo-2194399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Contact
