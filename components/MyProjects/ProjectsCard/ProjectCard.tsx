'use client'

import React, { Suspense, useEffect, useState } from 'react'
import ProjectsCardSkeleton from '../LoadingSkeleton/ProjectsCardSkeleton'
import Image from 'next/image'
import getLogoPath from '@/lib/getLogo'
import viewMore from '@/public/assets/viewMore.svg'
import { Button } from '@/components/ui/button'
import { useSpring, animated } from '@react-spring/web'

function ProjectCard({ name, description, url, languages,  PrimaryLanguage, openGraphImageUrl, index }: { name: string, description: string, url: string, languages: any, PrimaryLanguage: { name: string }, openGraphImageUrl: string, index: number }) {
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setKey(Math.random());
  }, []);
  
  const slideUp = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: {
      mass: 4.8,
      tension: 213,
      friction: 60,
      velocity: 0.011
    },
    delay: index > 0 ? index * 200 : 200,
  })

  // console.log(index)

  return (
    <Suspense fallback={<ProjectsCardSkeleton />}>
      <animated.div style={slideUp} className='parent'>
        <div className="card">
          <div className='card-image'>
            <Image
              className="card-image"
              src={`https://raw.githubusercontent.com/eins87/${name}/main/screenshoots/sc.png?token=GHSAT0AAAAAACJWWPSGQI4AI2RGP67GQ2DAZLKV5IQ`}
              alt={name}
              width={300}
              height={300}
            />
          </div>
          <div className="logo">
              <span className="circle-card circle1"></span>
              <span className="circle-card circle2"></span>
              <span className="circle-card circle3"></span>
              <span className="circle-card circle4"></span>
              <span className="circle-card circle5">
                  <Image 
                    src={getLogoPath(PrimaryLanguage.name)}
                    alt={PrimaryLanguage.name}
                    width={50}
                    height={50}
                  />
              </span>
          </div>
          <div className="glass"></div>
          <div className="content">
              <span className="title">{name.slice(0, 18) + (name.length > 18 ? " ..." : "")}</span>
              <span className="text">{description && description.slice(0, 40) + (name.length > 40 ? "..." : "")}</span>
          </div>
          <div className="bottom"> 
            <div className="logo-container">
              {
                languages && languages.nodes.slice(0, 3).map((language: { name: string, color: string }) => (
                  <div className="flex flex-row logo-button" key={language.name}>
                    <Image 
                      src={getLogoPath(language.name)}
                      alt={language.name}
                      width={20}
                      height={20}
                    />
                  </div>
                ))
              }
            </div>
            <div className="view-more">
              <Button variant={'outline'} onClick={() => {window.open(url, '_blank')}}>
                <p>
                  View More <span>→</span>
                </p>
              </Button>
            </div>
          </div>
        </div>
      </animated.div>
    </Suspense>
  )
}

export default ProjectCard