import FavoritProject from '@/components/MyProjects/FavoritProject';
import ProjectsCard from '@/components/MyProjects/ProjectsCard';
import React, { useRef } from 'react';

function Projects() {
  return (
    <section className='flex flex-col'>
      <div className="max-w-7xl">
        <FavoritProject />
      </div>
      <div className="py-4 mt-4 text-xs font-bold tracking-widest uppercase">My Projects</div>
      <div className="flex items-center justify-between w-full gap-10 max-sm:flex-col md:object-center md:flex-wrap md:mt-8">
        <ProjectsCard />
      </div>
    </section>
  )
}

export default Projects;