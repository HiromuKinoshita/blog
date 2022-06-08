/**
 * list for post
 */
export type resListPost = {
  posts: listPost[]
}

export type listPost = {
  id: string
  slug: string
  title: string
  updatedAt: string!
}

/**
 * slug
 */
export type resSlugPost = {
  posts: slugPost[]
}

export type slugPost = {
  slug: string
}
export type propSlug = {
  params: slugPost
}

/**
 * post
 */
export type resPost = {
  posts: post[]
}

export type post = {
  id: string
  slug: string
  title: string
  content: string!
  updatedAt: string!
}
