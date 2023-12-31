import React from 'react'
import Link from 'next/link'

function NavLinks() {
  return (
    <>
      <Link href="/about" className='hover:text-blue-300'>About</Link>
      <Link href="/projects" className='hover:text-blue-300'>Projects</Link>
      <Link href="/contact" className='hover:text-blue-300'>Contact</Link>
    </>
  )
}

export default NavLinks