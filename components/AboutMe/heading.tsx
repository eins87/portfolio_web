'use client'

import { animated, useSpring } from '@react-spring/web'
import { useEffect, useState } from 'react'

function heading() {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, []);
  
  const slideRight1 = useSpring({
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

  const slideRight2 = useSpring({
    from: { opacity: 0, x: -200 },
    to: { opacity: 1, x: 0 },
    config: {
      mass: 4.8,
      tension: 213,
      friction: 60,
      velocity: 0.011
    },
    delay: 500,
  })

  return (
    <>
      <animated.h1 style={slideRight1} className="font-bold text-gray-500 text-8xl md:text-9xl">About</animated.h1>
      <animated.div style={slideRight2} className="relative w-fit -right-48 md:left-64 -top-14 md:-top-20">
        <h2 className="font-bold text-gray-300 text-8xl md:text-9xl">Me</h2>
      </animated.div>
    </>
  )
}

export default heading