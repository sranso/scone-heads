import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scone Heads</title>
        <meta name="description" content="Scone Heads. For scone lovers, by scone lovers. Made by Nan Ransohoff, Sarah Ransohoff, and Sarah Sherman."/>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;900&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Scone Heads
        </h1>

        <div className={styles.linkImageContainer}>
          <div className={styles.linkWrapper}>
            <Link href="/">
              <a>
                <h3 className={styles.link}>Art of the Scone</h3>
              </a>
            </Link>

            <Link href="/">
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

      <footer className={styles.footer}>
        <p>Made with buttery love by
          &nbsp;Nan Ransohoff, Sarah Sherman, and&nbsp;
          <a href="https://sarahransohoff.com" target="_blank">Sarah Ransohoff</a>.
        </p>
      </footer>
    </div>
  )
}
