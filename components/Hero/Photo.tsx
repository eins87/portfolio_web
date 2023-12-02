import React from 'react'
import Image from 'next/image'
import me_photo from '@/public/assets/me_photo.png'

function Photo() {
  return (
    <div className='photo-container'>
          <div className='photo'>
            <Image
              priority
              className='border-2 border-gray-400 rounded-full shadow-2xl'
              src={me_photo}
              alt='me' 
            />
          </div>
    </div>
  )
}

export default Photo