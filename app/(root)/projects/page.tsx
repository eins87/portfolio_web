import FavoritProject from '@/components/MyProjects/FavoritProject';
import ProjectsCard from '@/components/MyProjects/ProjectsCard';
import { getFavoriteRepo, getGithubRepos } from '@/lib/getGithubRepos';
import { FavoriteRepos, githubRepos } from '@/lib/gqlQueries';

async function Projects() {
  const favoriteRepo = await getFavoriteRepo(FavoriteRepos);
  const repos = await getGithubRepos(githubRepos)
  return (
    <section className='flex flex-col'>
      <div className="max-w-7xl">
        <FavoritProject favoriteRepo={favoriteRepo} />
      </div>
      <div className="py-4 mt-4 text-xs font-bold tracking-widest uppercase">My Projects</div>
      <div className="flex items-center justify-between w-full gap-10 max-sm:flex-col md:object-center md:flex-wrap md:mt-8">
        <ProjectsCard repos={repos} />
      </div>
    </section>
  )
}

export default Projects;