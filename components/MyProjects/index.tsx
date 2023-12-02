import React from 'react'
import FavoritProject from './FavoritProject'
import Projects from './Projects';

async function MyProjects() {
  
  return (
    <>
      <div className="max-w-7xl">
        <FavoritProject />
      </div>
      <div className="flex items-center justify-between w-full gap-5 max-sm:flex-col md:object-center md:flex-wrap md:mt-16">
        <Projects />
      </div>
    </>
  )
}

export default MyProjects