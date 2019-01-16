import gql from 'graphql-tag'
export const userQuery = gql`{
    graphQLHub
       reddit {
      user(username: "kn0thing") {
        username
        commentKarma
        createdISO
      }
      }
    }`


export const subredditQuery = gql`{
    graphQLHub
       reddit {
      subreddit(name: "movies"){
        newListings {
          title
          fullnameId
          score
          numComments
          url
          author {
            username
          }
          
          comments {
            body
            author { 
              username
                commentKarma
            }
          }
        }
      }
    }
  }`    