import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Jerome-1010'
export const siteTitle = 'Jerome-1010 blog'

export default function Layout({ children, isHome }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jerome-1010 blog"
        />
        <meta
          property="og:image"
          content="https://jerome1010.com/images/tenshi-chan.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {isHome ? (
          <>
            <img
              src="/images/tenshi-chan.png"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/tenshi-chan.png"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!isHome && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
