"use client";

import { useEffect, useState } from 'react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'
import { useSpring, animated } from '@react-spring/web'
import NavLinks from './NavLinks';
import DropdownUI from './DropdownUI';



const Navbar = () => {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, []);

  const spring = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -40px, 0)'},
    to: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    config: { 
      duration: 500,
      mass: 0.1,
      tension: 50,
      friction: 2
     },
    key: key
  });

  
  return (
    <nav className='container'>
      <animated.div style={ spring } className='flex flex-row items-center justify-between px-5 py-2 my-10 border-2 rounded-full bg-slate-600 border-slate-300'>
        {/* desktop */}
        <div className=''>
          <Link className='text-lg font-bold md:text-2xl' href="/">Portfolio</Link>
        </div>
        <div className='hidden md:flex md:flex-row md:items-center md:justify-between md:gap-5'>
          <NavLinks />
        </div>
        <div className='items-center justify-end hidden md:flex md:flex-row'>
          <ModeToggle />
        </div>

        {/* mobile */}
        <div className='md:hidden'>
          <DropdownUI />
        </div>
      </animated.div>
    </nav>
  )
}

export default Navbar