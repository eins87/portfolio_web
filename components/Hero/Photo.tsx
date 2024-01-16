'use client';

import { useEffect, useState } from 'react'
import Image from 'next/image'
import me_photo from '@/public/assets/me_photo_1.png'
import { animated, useSpring } from '@react-spring/web';

function Photo() {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, []);
  
  const slideLeft = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: {
      mass: 4.8,
      tension: 213,
      friction: 40,
      velocity: 0.011
    },
    delay: 300,
  })
  return (
    <animated.div style={slideLeft} className='photo'>
      <Image
        priority
        className='border-2 border-gray-400 rounded-full shadow-2xl'
        src={me_photo}
        alt='me' 
      />
    </animated.div>
  )
}

export default Photo