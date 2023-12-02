import { Suspense } from 'react'
import FavoritProjectSkeleton from './LoadingSkeleton/FavoritProjectSkeleton'
import { getFavoriteRepo }  from '@/lib/getGithubRepos'
import { FavoriteRepos } from "@/lib/gqlQueries"
import Image from 'next/image'
import squareCard  from '@/public/assets/squareCard.png'
import getLogoPath from '@/lib/getLogo'

async function FavoritProject() {
  const favoriteRepo = await getFavoriteRepo(FavoriteRepos)
  return (
    <Suspense fallback={<FavoritProjectSkeleton />}>
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div>
            <div className="relative w-full max-w-lg">
              {/* <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute rounded-full bg-fuchsia-300 -bottom-16 right-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div> */}
              <div className="relative glow-box">
                <Image 
                  priority
                  className="object-cover object-center mx-auto rounded-lg shadow-2xl" 
                  alt="favorite_project" 
                  src={favoriteRepo.openGraphImageUrl || squareCard}
                  width={1280}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
          <span className="mb-8 text-xs font-bold tracking-widest uppercase"> My Favorite Project </span>
          <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter md:text-7xl lg:text-5xl">{favoriteRepo.name.replace(/_/g, " ")}</h1>
          <p className="mb-4 text-base leading-relaxed text-justify">{favoriteRepo.description}</p>
          <div className="py-2 mt-4 text-xs font-bold tracking-widest uppercase">Primary Language</div>
          <div className="flex flex-wrap w-full mt-2 -mx-4">
                {
                  favoriteRepo.languages && favoriteRepo.languages.nodes.slice(0, 4).map((language: { name: string, color: string }) => (
                    <div className="flex flex-col items-center justify-center p-4" key={language.name}>
                      <div className="">
                        <Image 
                          src={getLogoPath(language.name.toLowerCase())}
                          alt={language.name}
                          width={50}
                          height={50}
                        />
                      </div> 
                      <div className="py-2 text-center max-sm:text-xs">
                        {language.name}
                      </div>          
                    </div>
                  ))
                }   
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default FavoritProject