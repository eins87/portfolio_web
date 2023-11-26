import Image from 'next/image'
import blob1 from '@/public/assets/shape/blob1.svg'
import blob2 from '@/public/assets/shape/blob2.svg'
import blob3 from '@/public/assets/shape/blob3.svg'

function shape() {
  return (
    <>
    <div className='fixed right-0 w-1/2 h-full top-48 -z-50'>
        <Image
          priority
          fill
          src={blob1}
          alt='blob1'
        />
      </div>
      <div className='fixed w-1/2 right-1/2 top-40 h-1/2 -z-50'>
        <Image
          priority
          fill
          src={blob2}
          alt='blob2'
        />
      </div>
      <div className='fixed w-1/2 h-2/3 left-10 md:left-48 top-1/2 -z-50'>
        <Image
          priority
          fill
          src={blob3}
          alt='blob3'
        />
      </div>
    </>
  )
}

export default shape