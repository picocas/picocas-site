const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const { data } = await graphql(`
    {
      allContentfulPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `)

  const postComponent = path.resolve('./src/templates/post.js')

  return data.allContentfulPost.edges.forEach(({ node: { id } }) => {
    createPage({
      path: `posts/${id}`,
      component: postComponent,
      context: { id }
    })
  })
}
