import React from 'react'
import { GithubIcon, InstagramIcon, TwitterIcon, Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className='container'>
      <div className='flex flex-row items-center justify-between w-full py-8'>
          <p className=''>&copy; 2023</p>
          <div className='flex flex-row gap-2'>
            <p><Heart /></p>
            <p>you all</p>
          </div>
          <div className='flex flex-row items-center justify-between gap-2'>
            <GithubIcon size={18} />
            <InstagramIcon size={18} />
            <TwitterIcon size={18} />
          </div>
      </div>
    </footer>
  )
}

export default Footer