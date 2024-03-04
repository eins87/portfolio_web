'use client'

import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import Image from 'next/image';
import { experiences } from '@/data/experience';

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
    <animated.div style={slideLeft}>
      <ul className="timeline">
        {experiences.map((experience, index) => (
          <li key={index}>
            <div className={`direction-${experience.direction}`}>
              <div className="flag-wrapper">
                <span className="flag">{experience.company}</span>
                <span className="time-wrapper"><span className="time">{experience.time}</span></span>
              </div>
              <div className="desc">
                {experience.description.map((desc, index) => (
                  <div key={index} className='flex flex-row gap-3'>
                    {/* <Image src="/static/bullet.png" alt="bullet" width={24} height={24} className='object-scale-down'/> */}
                    {desc.toString()}
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
        {/* <li>
          <div className="direction-r">
            <div className="flag-wrapper">
              <span className="flag">Freelancer</span>
              <span className="time-wrapper"><span className="time">2023 - present</span></span>
            </div>
            <div className="desc">
              <div className='flex flex-row gap-3'>
                <Image src="/static/bullet.png" alt="bullet" width={24} height={24} className='object-scale-down'/>
                Learned the principles of object-oriented design and implementation.
              </div>
              <div className='flex flex-row gap-3'>
                <Image src="/static/bullet.png" alt="bullet" width={24} height={24} className='object-scale-down'/>
                Developed applications using Java and C++.
              </div>
              <div className='flex flex-row gap-3'>
                <Image src="/static/bullet.png" alt="bullet" width={24} height={24} className='object-scale-down'/>
                Learned the basics of software engineering.
              </div>
            </div>
          </div>
        </li> */}
      </ul>
    </animated.div>
  )
}

export default Experiences