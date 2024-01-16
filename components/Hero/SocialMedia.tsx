"use client";

import { animated, useSpring } from '@react-spring/web'
import { GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'
import { useEffect, useState } from 'react';

function SocialMedia() {
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
    delay: 500,
  })
  
  return (
    <animated.div style={slideRight} className="flex flex-row gap-2">
      <GithubIcon size={24} className="cursor-pointer" onClick={() => {window.open("https://github.com/eins87", '_blank')}} />
      <InstagramIcon size={24} className="cursor-pointer" onClick={() => {window.open("https://www.instagram.com/andi.winata87", '_blank')}} />
      <TwitterIcon size={24} className="cursor-pointer" onClick={() => {window.open("https://twitter.com/Eins_Andi", '_blank')}} />
    </animated.div>
  )
}

export default SocialMedia