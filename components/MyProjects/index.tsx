import React from 'react'
import FavoritProject from './FavoritProject'
import Projects from './Projects';

async function MyProjects() {
  
  return (
    <div>
      <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6">
        <FavoritProject />
      </div>
      <div className="flex items-center justify-between w-full gap-5 max-sm:flex-col md:object-center md:flex-wrap">
        <Projects />
      </div>
    </div>
  )
}

export default MyProjects