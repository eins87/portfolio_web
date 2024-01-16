'use client'

import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

function Experiences() {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, []);
  
  const slideLeft = useSpring({
    from: { opacity: 0, x: 200 },
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
    <animated.div style={slideLeft}>experiences</animated.div>
  )
}

export default Experiences