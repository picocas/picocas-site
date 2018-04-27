import React from 'react'

export default ({ data }) => {
  const post = data.contentfulPost
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.date}</div>
      <div>{post.body.body}</div>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      date
      body {
        body
      }
    }
  }
`
