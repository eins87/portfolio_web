import { GraphQLClient } from "graphql-request"
import { cache } from "react"

// export const revalidate = 60 * 60 * 4 // revalidate data setiap 4 jam

// const githubEndpoint = process.env.GITHUB_GRAPHQL_ENDPOINT as string

const requestConfig = {
  headers: {
    authorization: `Bearer ${process.env.GITHUB_GRAPHQL_API_KEY}`,
  },
  fetch: cache(async (url: string, params: any) => fetch(url, {...params, next: {revalidate: 60*60*4}})) as any,
}

const graphqlClient = new GraphQLClient(process.env.GITHUB_GRAPHQL_ENDPOINT as string, requestConfig)

export const getGithubRepos = (async (repos: string) => {
  const data = await graphqlClient.request(repos) as any
  return data.repositoryOwner.repositories.nodes
})

export const getFavoriteRepo = (async (FavoriteRepos: string) => {
  const data = await graphqlClient.request(FavoriteRepos) as any
  return data.repositoryOwner.repository
})