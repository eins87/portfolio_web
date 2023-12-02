'use client'

import React, { Suspense } from 'react'
import ProjectsCardSkeleton from '../LoadingSkeleton/ProjectsCardSkeleton'
import Image from 'next/image'
import getLogoPath from '@/lib/getLogo'
import viewMore from '@/public/assets/viewMore.svg'

function ProjectCard({ name, description, url, languages,  PrimaryLanguage, openGraphImageUrl}: { name: string, description: string, url: string, languages: any, PrimaryLanguage: { name: string }, openGraphImageUrl: string}) {
  // console.log(name)
  return (
    <Suspense fallback={<ProjectsCardSkeleton />}>
      <div className='parent'>
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
                  <button className="logo-button .logo-button1" key={language.name}>
                    <Image 
                      src={getLogoPath(language.name)}
                      alt={language.name}
                      width={20}
                      height={20}
                    />
                  </button>
                ))
              }
            </div>
            <div className="view-more">
                <button className="view-more-button" onClick={() => {window.open(url, '_blank')}}>View more</button>
                <Image
                  src={viewMore}
                  alt="viewMore"
                />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default ProjectCard