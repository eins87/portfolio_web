import Loading from './loading'
import { Suspense } from 'react'
import Photo from '@/components/Hero/Photo'
import SocialMedia from '@/components/Hero/SocialMedia'
import Quote from '@/components/Hero/Quote'
import DownloadCV from '@/components/Hero/DownloadCV'

export default function Home() {
  return (
    <section className="flex flex-col justify-between gap-3">
      <div className='flex flex-col items-start justify-start w-[70%] sm:w-[53%]'>
        <p className='text-base md:text-2xl lg:text-3xl'>Mobile & Web App Developer</p>
        <h2 className='text-5xl md:text-6xl lg:text-8xl'>Andi Winata</h2>
        <div className='py-4 mt-2 text-sm text-justify rounded-md lg:w-full'>
          <p className='text-base md:text-lg'>About Me</p>
          <p className='py-3'>
            Hello! I'm Andi Winata, a passionate mobile and web app developer with 3 years of experience in the industry, I've honed my skills in crafting intuitive and responsive applications that seamlessly integrate with modern technologies.
          </p>
          <div className='flex flex-row gap-4 py-3'>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className='w-full md:w-[50%]'>
        <DownloadCV />
      </div>
      <div className='photo-container'>
        <Photo />
      </div>
      <Suspense fallback={<Loading />} >
        <Quote />
      </Suspense>
    </section>
  )
}