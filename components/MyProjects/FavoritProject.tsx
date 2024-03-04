"use client";
import { Suspense, useEffect, useState } from 'react'
import FavoritProjectSkeleton from './LoadingSkeleton/FavoritProjectSkeleton'
import Image from 'next/image'
import getLogoPath from '@/lib/getLogo'
import { Button } from '../ui/button';
import Link from 'next/link';
import { useSpring, animated } from '@react-spring/web';

async function FavoritProject({ favoriteRepo }: { favoriteRepo: any }) {
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
    <Suspense fallback={<FavoritProjectSkeleton />}>
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
        <animated.div style={slideRight} className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div className="relative w-full max-w-lg">
            <div className="relative rounded-2xl glow-box">
              <Image 
                priority
                className="object-cover object-center mx-auto shadow-2xl" 
                alt="favorite_project" 
                src={`https://raw.githubusercontent.com/eins87/${favoriteRepo?.name}/main/screenshoots/sc.png?token=GHSAT0AAAAAACJWWPSGQI4AI2RGP67GQ2DAZLKV5IQ`}
                width={640}
                height={640}
              />
            </div>
          </div>
        </animated.div>
        <animated.div style={slideLeft} className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
          <span className="mb-8 text-xs font-bold tracking-widest uppercase"> My Favorite Project </span>
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">{favoriteRepo.name.replace(/_/g, " ")}</h1>
          <p className="mb-4 text-base leading-relaxed text-justify">{favoriteRepo.description}</p>
          <div className="py-2 mt-4 text-xs font-bold tracking-widest uppercase">Primary Language</div>
          <div className="flex flex-wrap w-full mt-2 -mx-3">
                {
                  favoriteRepo.languages && favoriteRepo.languages.nodes.slice(0, 4).map((language: { name: string, color: string }) => (
                    <div className="flex flex-col items-center justify-center p-3" key={language.name}>
                      <div className="">
                        <Image 
                          src={getLogoPath(language.name.toLowerCase())}
                          alt={language.name}
                          width={50}
                          height={50}
                        />
                      </div> 
                      <div className="py-2 text-center max-sm:text-xs">
                        {language.name}
                      </div>          
                    </div>
                  ))
                }   
          </div>
          <div className="flex flex-wrap w-full mt-4">
            <Button>
              <Link href={favoriteRepo.url} target="_blank" rel='noopener noreferer' className='font-bold'>View Project</Link>
            </Button>
          </div>
        </animated.div>
      </div>
    </Suspense>
  )
}

export default FavoritProject