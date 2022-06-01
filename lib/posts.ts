import { gql, GraphQLClient } from 'graphql-request'

export async function getSortedPostsData() {
  const q = `
    {
      posts(orderBy: updatedAt_DESC) {
        id
        slug
        title
        updatedAt
      }
    }
  `
  const { posts } = await queryGraphCms(q)
  return posts
}

export async function getAllPostIds() {
  const q = `
    {
      posts {
        slug
      }
    }
  `
  const { posts } = await queryGraphCms(q)

  return posts.map((p) => {
    return {
      params: {
        id: p.slug,
      },
    }
  })
}

export async function getPostData(id) {
  const q = `
  {
    posts(where: { slug: "${id}" }) {
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

  const { posts } = await queryGraphCms(q)
  const post = posts[0]

  return post
}

async function queryGraphCms(q) {
  const graphcms = new GraphQLClient(
    `https://api-ap-northeast-1.graphcms.com/v2/${process.env.GRAPHCMS_URL_TOKEN}/master`,
  )
  return await graphcms.request(gql`${q}`)
}
