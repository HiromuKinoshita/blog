import { gql, GraphQLClient } from 'graphql-request'
import {
  resListPost,
  listPosts,
  resSlugPost,
  slugPost,
  resPost,
  post,
  propSlug,
} from './posts.d'

export async function getSortedPostsData(): Promise<listPosts> {
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
  const { posts }: resListPost = await queryGraphCms(q)
  return posts
}

export async function getAllPostSlugs(): Promise<propSlug[]> {
  const q: string = `
    {
      posts {
        slug
      }
    }
  `
  const { posts }: resSlugPost = await queryGraphCms(q)

  return posts.map((p: slugPost) => {
    return {
      params: {
        slug: p.slug,
      },
    }
  })
}

export async function getPostData(slugs: string[] | string): Promise<post> {
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

  const { posts }: resPost = await queryGraphCms(q)
  const post: post = posts[0]

  return post
}

async function queryGraphCms(q: string): Promise<any> {
  const graphcms = new GraphQLClient(
    `https://api-ap-northeast-1.graphcms.com/v2/${process.env.GRAPHCMS_URL_TOKEN}/master`,
  )
  return await graphcms.request(gql`${q}`)
}
