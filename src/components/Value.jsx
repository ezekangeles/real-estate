import React, { useEffect, useState } from 'react'
import { valueData } from '../data/valueData'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Value = () => {

    const [drop, setDrop] = useState(false)
    const [values, setValues] = useState([])

    useEffect(()=>{
        setValues(valueData)
    },[])

    const dropValue = (id) =>{
        setValues(values.map((item) =>{
            if(item.id === id){
                return {...item, isShow: true}
            }else{
                return {...item, isShow: false}
            }
        }))
    }

  return (
    <div name='value' className='w-full bg-gradient-to-b from-slate-50 to-slate-500'>
        <div className='w-full max-w-[1100px] mx-auto'>
           <div className='h-[30rem] w-full relative sm:flex flex-row'>
                <img className='w-full h-full object-cover sm:w-1/2'
                 src="https://images.pexels.com/photos/1022936/pexels-photo-1022936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className='absolute sm:relative sm:w-1/2 sm:px-2 top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-black/80 flex justify-center flex-col px-2'>
                    <p className='text-xl text-yellow-500 font-bold'>Our Value</p>
                    <h1 className='text-2xl font-bold text-white py-1'>Value We Give You</h1>
                    <p className='text-sm text-slate-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quisquam veniam. Eos placeat vitae nisi in temporibus accusantium qui totam.</p>
                    <div className='py-4'>
                        {values.map((item, i) =>{
                            return (
                                <div key={i}>
                                    <div className='flex gap-1 flex-col'>
                                        <div onClick={()=>dropValue(item.id)} className='cursor-pointer flex flex-row items-center justify-between'>
                                            <p className='text-white bg-primary text-xs p-1 rounded-md'>{item.icon}</p>
                                            <h1 className='text-white '>{item.title}</h1>
                                            <p 
                                            className='text-white bg-primary text-xs p-1 rounded-md hover:cursor-pointer hover:scale-105 transition-all'><BsFillCaretRightFill className={item.isShow ? 'rotate-90 transition-all duration-500' : null}/></p>
                                        </div>
                                        {item.isShow ? <p className='text-xs text-slate-300 bg-primary p-2 rounded-md transition-all duration-1000 opacity-100'>{item.description}</p> : <p className='text-xs text-slate-300 bg-primary p-2 rounded-md transition-all duration-100 opacity-0'></p>}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
           </div>
        </div>
    </div>
  )
}

export default Value
