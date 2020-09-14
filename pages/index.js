import Link from 'next/link'

import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.linkImageContainer}>
          <div className={styles.linkWrapper}>
            <Link href="/art-of-the-scone">
              <a>
                <h3 className={styles.link}>Art of the Scone</h3>
              </a>
            </Link>

            <Link href="/cv">
              <a>
                <h3 className={styles.link}>CV</h3>
              </a>
            </Link>

            <a href="https://www.instagram.com/scone_heads/" target="_blank">
              <h3 className={styles.link}>Examples</h3>
            </a>

            <a href="mailto:team@scone-heads.com" target="_blank">
              <h3 className={styles.link}>Submissions</h3>
            </a>
          </div>

          <div className={styles.imageWrapper}>
            <img src="/scone-hero.jpg"/>
          </div>
        </div>
      </main>
    </Layout>
  )
}
