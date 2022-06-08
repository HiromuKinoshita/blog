export type resListPost = {
  posts: listPosts
}

export type listPosts = listPost[]

type listPost = {
  id: string
  slug: string
  title: string
  updatedAt: string!
}

export type resSlugPost = {
  posts: slugPosts
}

export type slugPosts = slugPost[]

export type slugPost = {
  slug: string
}

export type resPost = {
  posts: posts
}

export type posts = post[]

type post = {
  id: string
  slug: string
  title: string
  content: string!
  updatedAt: string!
}
