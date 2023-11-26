import React from 'react';
import ProjectsCard from './ProjectCard';
import { getGithubRepos } from '@/lib/getGithubRepos';
import { repo } from '@/lib/types';

async function Projects() {
  const repos = await getGithubRepos()
  // console.log(repos)
  return (
    repos && repos.map((repo: repo) => (
      repo.name !== process.env.FAVORITE_REPO && repo.isFork === false && repo.visibility === 'PUBLIC' &&
        <ProjectsCard 
          key={repo.id}
          name={repo.name.replace(/_/g, ' ')}
          description={repo.description}
          url={repo.url}
          languages={repo.languages}
          openGraphImageUrl={repo.openGraphImageUrl}
          PrimaryLanguage={repo.primaryLanguage}
        />
    ))
  );
}

export default Projects;
