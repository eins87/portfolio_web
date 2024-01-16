"use client";

import React from 'react'
import { GithubIcon, InstagramIcon, TwitterIcon, Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className='container'>
      <div className='flex flex-row items-center justify-between w-full py-8'>
          <p className=''>&copy; 2024</p>
          <div className='flex flex-row gap-2'>
            <p><Heart /></p>
            <p>you all</p>
          </div>
          <div className='flex flex-row items-center justify-between gap-2'>
            <GithubIcon size={18} className="cursor-pointer" onClick={() => {window.open("https://github.com/eins87", '_blank')}} />
            <InstagramIcon size={18} className="cursor-pointer" onClick={() => {window.open("https://www.instagram.com/andi.winata87", '_blank')}} />
            <TwitterIcon size={18} className="cursor-pointer" onClick={() => {window.open("https://twitter.com/Eins_Andi", '_blank')}} />
          </div>
      </div>
    </footer>
  )
}

export default Footer