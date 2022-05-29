import { GraphQLClient } from 'graphql-request'
import { gql } from 'graphql-request'

export async function getSortedPostsData() {
  const graphcms = new GraphQLClient(
    `https://api-ap-northeast-1.graphcms.com/v2/${process.env.GRAPHCMS_URL_TOKEN}/master`,
  )

  const q = gql`
    {
      posts {
        id
        slug
        title
        updatedAt
      }
    }
  `
  const { posts } = await graphcms.request(q)

  // Sort posts by updatedAt
  return posts.sort(({ updatedAt: a }, { updatedAt: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export async function getAllPostIds() {
  const graphcms = new GraphQLClient(
    `https://api-ap-northeast-1.graphcms.com/v2/${process.env.GRAPHCMS_URL_TOKEN}/master`,
  )

  const q = gql`
    {
      posts {
        slug
      }
    }
  `
  const { posts } = await graphcms.request(q)

  return posts.map((p) => {
    return {
      params: {
        id: p.slug,
      },
    }
  })
}

export async function getPostData(id) {
  const graphcms = new GraphQLClient(
    `https://api-ap-northeast-1.graphcms.com/v2/${process.env.GRAPHCMS_URL_TOKEN}/master`,
  )

  const q = gql`
  {
    posts(slug: ${id}) {
      id
      slug
      title
      content {
        html
      }
      updatedAt
    }
  }
  `

  const { posts } = await graphcms.request(q)
  const post = posts[0]

  return post
}
