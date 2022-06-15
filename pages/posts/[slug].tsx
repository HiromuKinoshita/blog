import { GetStaticProps, GetStaticPaths } from 'next'
import type { ReactElement } from 'react'
import Date from '../../components/date'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }): ReactElement {
  return (
    <>
      <Head>{postData.title}</Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.updatedAt} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.content.html }} />
      </article>
    </>
  )
}

Post.getLayout = (page: ReactElement): ReactElement => {
  return (
    <Layout isHome={false}>{page}</Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.slug)
  return { props: { postData } }
}
