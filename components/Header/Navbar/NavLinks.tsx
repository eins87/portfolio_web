import React from 'react'
import Link from 'next/link'

function NavLinks() {
  return (
    <>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </>
  )
}

export default NavLinks