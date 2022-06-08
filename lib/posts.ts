import { gql, GraphQLClient } from 'graphql-request'

export async function getSortedPostsData(): Promise<any> {
  const q: string = `
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

export async function getAllPostIds(): Promise<any> {
  const q: string = `
    {
      posts {
        slug
      }
    }
  `
  const { posts } = await queryGraphCms(q)

  return posts.map((p: any) => {
    return {
      params: {
        id: p.slug,
      },
    }
  })
}

export async function getPostData(slugs: string[] | string): Promise<any> {
  const q: string = `
  {
    posts(where: { slug: "${slugs}" }) {
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

async function queryGraphCms(q: string): Promise<any> {
  const graphcms = new GraphQLClient(
    `https://api-ap-northeast-1.graphcms.com/v2/${process.env.GRAPHCMS_URL_TOKEN}/master`,
  )
  return await graphcms.request(gql`${q}`)
}
