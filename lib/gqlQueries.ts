import { gql } from "graphql-request"

const repos = gql`
      query {
        repositoryOwner (login: "${process.env.GITHUB_USERNAME as string}") {
          repositories (isFork: false, first: 10) {
            nodes {
              name
              description
              url
              openGraphImageUrl
              visibility
              isFork
              createdAt
              updatedAt
              languages(first: 10) {
                nodes {
                  name
                }
              }
              primaryLanguage {
                name
                color
              }
              collaborators(first: 10) {
                nodes {
                  name
                  login
                  avatarUrl
                  url
                }
              }
            }
          }
        }
      }
    `

    const FavoriteRepos = gql`
      query {
        repositoryOwner (login: "${process.env.GITHUB_USERNAME as string}") {
          repository (name: "${process.env.FAVORITE_REPO as string}") {
            name
            description
            url
            openGraphImageUrl
            visibility
            createdAt
            updatedAt
            languages(first: 10) {
              nodes {
                name
              }
            }
            primaryLanguage {
              name
            }
            collaborators(first: 10) {
              nodes {
                name
                login
                avatarUrl
                url
              }
            }
          }
        }
      }
    `

    

    export { repos, FavoriteRepos }