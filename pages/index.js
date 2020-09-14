import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;900&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Scone Heads
        </h1>

        <div className={styles.leftBar}>
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

          <Link href="/">
            <a>
              <h3 className={styles.link}>Examples</h3>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        Made with buttery love by Nan Ransohoff, Sarah Sherman, and Sarah Ransohoff
      </footer>
    </div>
  )
}
