import Quote from '@/components/Hero/Quote'
import Loading from './loading'
import { Suspense } from 'react'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-3">
      <div className='flex flex-row w-full'>
       <Hero />
      </div>
      <Suspense fallback={<Loading />} >
        <Quote />
      </Suspense>
    </div>
  )
}