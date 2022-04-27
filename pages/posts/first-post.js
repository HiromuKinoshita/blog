import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
        {/* <a href="/">back to home!</a> */}
        <a>back to home!</a>
        </Link>
      </h2>
      <Image
        src="/images/tenshi-chan.png"
        height={144}
        width={144}
        alt="Icon"
      />
    </Layout>
  )
}
