import React from 'react';
import ProjectsCard from './ProjectCard';
import { repo } from '@/lib/types';

const projectsCard = ({ repo }: { repo: repo}, index: number) => {
  return (
    <ProjectsCard 
      key={repo.id}
      name={repo.name}
      description={repo.description}
      url={repo.url}
      languages={repo.languages}
      openGraphImageUrl={repo.openGraphImageUrl}
      PrimaryLanguage={repo.primaryLanguage}
      index={index}
    />
  )
}

async function Projects({ repos }: { repos: repo[]}) {
  let i = 0;
  // console.log(repos)
  return (
    repos && repos.map((repo: repo) => (
      repo.name !== process.env.FAVORITE_REPO && repo.isFork === false && repo.visibility === 'PUBLIC' && projectsCard({ repo }, i++)
    ))
  )
}

export default Projects;
