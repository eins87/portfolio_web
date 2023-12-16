"use client";

import React from 'react'
import Photo from './Photo'
import SocialMedia from './SocialMedia'

function Hero() {
  return (
    <>
      <div className='flex flex-col items-start justify-start w-[53%] py-3 md:mt-20'>
        <p className='text-base md:text-2xl lg:text-3xl'>Mobile & Web App Developer</p>
        <h2 className='text-5xl md:text-6xl lg:text-8xl'>Andi Winata</h2>
        <div className='py-4 mt-2 text-sm text-justify rounded-md lg:w-full '>
          <p className='text-base md:text-lg'>About Me</p>
          <p className='py-3'>
            Hello! I'm Andi Winata, a passionate mobile and web app developer with 3 years of experience in the industry, I've honed my skills in crafting intuitive and responsive applications that seamlessly integrate with modern technologies.
          </p>
          <div className='flex flex-row gap-4'>
            <SocialMedia />
          </div>
        </div>
        <div className='items-center justify-center py-3'>
          <div className='cursor-pointer button-shockwave' onClick={() => {}} >
            <p className='text-xs text-center'>Download CV</p>
          </div>
        </div>
      </div>
      <Photo />
    </>
  )
}

export default Hero