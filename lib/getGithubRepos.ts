import { GraphQLClient } from "graphql-request"
import { repos, FavoriteRepos } from "./gqlQueries"

const graphqlClient = new GraphQLClient(process.env.GITHUB_GRAPHQL_ENDPOINT as string, {
  headers: {
    authorization: `Bearer ${process.env.GITHUB_GRAPHQL_API_KEY as string}`,
  },
})

async function getGithubRepos() {
  const data = await graphqlClient.request(repos) as any
  return data.repositoryOwner.repositories.nodes
}

async function getFavoriteRepo() {
  const data = await graphqlClient.request(FavoriteRepos) as any
  return data.repositoryOwner.repository
}

export { getGithubRepos, getFavoriteRepo}
