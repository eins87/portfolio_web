'use client'

import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image';

function TechStack() {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, []);
  
  const slideLeft = useSpring({
    from: { opacity: 0, y: -200 },
    to: { opacity: 1, y: 0 },
    config: {
      mass: 4.8,
      tension: 213,
      friction: 60,
      velocity: 0.011
    },
    delay: 200,
  })
  return (
    <animated.div style={slideLeft}>
        <h2 className='py-5 text-3xl font-semibold'>My Skills</h2>
        <div className='flex flex-wrap justify-center'>
          <div className='flex flex-col items-center p-5'>
            <Image src="/assets/logos/react.svg" alt="React" width={80} height={80} />
            <p className='text-lg'>React</p>
          </div>
          <div className='flex flex-col items-center p-5'>
            <Image src="/assets/logos/nextjs-white.svg" alt="NextJS" width={80} height={80} />
            <p className='text-lg'>NextJS</p>
          </div>
          <div className='flex flex-col items-center p-5'>
            <Image src="/assets/logos/typescript.svg" alt="TypeScript" width={80} height={80} />
            <p className='text-lg'>Typescript</p>
          </div>
          <div className='flex flex-col items-center p-5'>
            <Image src="/assets/logos/javascript.svg" alt="JavaScript" width={80} height={80} />
            <p className='text-lg'>Javascript</p>
          </div>
          <div className='flex flex-col items-center p-5'>
            <Image src="/assets/logos/html.svg" alt="HTML" width={80} height={80} />
            <p className='text-lg'>HTML</p>
          </div>
          <div className='flex flex-col items-center p-5'>
            <Image src="/assets/logos/css.svg" alt="CSS" width={80} height={80} />
            <p className='text-lg'>CSS</p>
          </div>
        </div>
    </animated.div>
  )
}

export default TechStack