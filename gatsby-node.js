const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const { data } = await graphql(`
    {
      allContentfulPost {
        edges {
          next {
            id
            title
          }
          previous {
            id
            title
          }
          node {
            id
          }
        }
      }
    }
  `)

  const postComponent = path.resolve('./src/templates/post.js')

  return data.allContentfulPost.edges.forEach(
    ({ node: { id }, next, previous }) => {
      createPage({
        path: `posts/${id}`,
        component: postComponent,
        context: { id, next, previous }
      })
    }
  )
}
