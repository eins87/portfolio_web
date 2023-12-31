"use client";

import React from 'react'
import { GithubIcon, InstagramIcon, TwitterIcon } from 'lucide-react'

function SocialMedia() {
  return (
    <>
      <GithubIcon size={24} className="cursor-pointer" onClick={() => {window.open("https://github.com/eins87", '_blank')}} />
      <InstagramIcon size={24} className="cursor-pointer" onClick={() => {window.open("https://www.instagram.com/andi.winata87", '_blank')}} />
      <TwitterIcon size={24} className="cursor-pointer" onClick={() => {window.open("https://twitter.com/Eins_Andi", '_blank')}} />
    </>
  )
}

export default SocialMedia