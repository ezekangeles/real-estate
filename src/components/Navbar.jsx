import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [navShow, setNavShow] = useState(false)
  return (
    <div name='nav' className='w-full'>
        <div className='w-full h-20 bg-backgorund'></div>
        <div className='w-full h-20 bg-backgorund fixed top-0 left-0'></div>
        <div className='fixed z-50 top-0 left-[50%] translate-x-[-50%] w-full max-w-[1100px] mx-auto h-20 bg-backgorund flex flex-row items-center justify-between text-text px-2'>
            <Link to='nav' smooth={true} duration={500}><h1 className='text-4xl cursor-pointer'>Keze's</h1></Link>
            <GiHamburgerMenu onClick={()=>setNavShow(!navShow)}
             className='sm:hidden text-2xl hover:scale-110 transition-all cursor-pointer'/>
            <ul className=
            {navShow ? 'sm:hidden absolute top-14 right-0 bg-backgorund w-1/2 p-4 rounded-md transition-all duration-500 opacity-100' : 
            'sm:hidden absolute top-14 -right-1/2 bg-backgorund w-1/3 p-4 rounded-md transition-all duration-500 opacity-0'}>
                <li className='navLi'><Link onClick={()=>setNavShow(false)} to="houses" smooth={true} duration={500}>Residencies</Link></li>
                <li className='navLi'><Link onClick={()=>setNavShow(false)} to="value" smooth={true} duration={500}>Our Value</Link></li>
                <li className='navLi'><Link onClick={()=>setNavShow(false)} to="contact" smooth={true} duration={500}>Contact Us</Link></li>
                <li className='navLi'> <Link onClick={()=>setNavShow(false)} to="getstateted" smooth={true} duration={500}>Get Started</Link></li>
                <button className='navBtn w-full'> <Link onClick={()=>setNavShow(false)} to="footed" smooth={true} duration={500}>Contact</Link></button>
            </ul>
            <ul className='hidden sm:flex flex-row items-center justify-center md:gap-2'>
                <li className='navLi'><Link to="houses" smooth={true} duration={500}>Residencies</Link></li>
                <li className='navLi'><Link to="value" smooth={true} duration={500}>Our Value</Link></li>
                <li className='navLi'><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
                <li className='navLi'> <Link to="getstateted" smooth={true} duration={500}>Get Started</Link></li>
                <button className='navBtn'> <Link to="footed" smooth={true} duration={500}>Contact</Link></button>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
