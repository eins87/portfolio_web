'use client'

import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

function Description() {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, []);
  
  const slideRight = useSpring({
    from: { opacity: 0, x: -200 },
    to: { opacity: 1, x: 0 },
    config: {
      mass: 4.8,
      tension: 213,
      friction: 60,
      velocity: 0.011
    },
    delay: 200,
  })
  return (
    <animated.div style={slideRight} className='text-lg text-justify rounded-md lg:w-[75%]'>
      <p className='py-3'>
        Hello! I'm Andi Winata, a passionate mobile and web app developer with 4 years of experience in the industry, I've honed my skills in crafting intuitive and responsive applications that seamlessly integrate with modern technologies.
      </p>
    </animated.div>
  )
}

export default Description