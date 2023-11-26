import React from 'react'
import Image from 'next/image'
import photo from '@/public/assets/photo.png'

function Photo() {
  return (
    <div className='absolute -right-0 max-w-xl overflow-hidden md:max-w-4xl -z-10 top-48 lg:right-0'>
      <div className='relative max-sm:-right-44 photo-mask photo-bg'>
        <div className='relative max-sm:-right-10 md:-right-56 top-12 md:top-24'>
          <Image
            priority
            className='w-[50%]'
            src={photo}
            alt='me' 
          />
        </div>
      </div>
    </div>
  )
}

export default Photo