import Head from 'next/head'
import { useState } from 'react';

import ScorgyEasterEgg from '../components/ScorgyEasterEgg'
import styles from '../styles/Home.module.css'

const Layout = (props) => {
  const [count, setCount] = useState(0)

  return (
	<div className={styles.container} onClick={() => setCount(count + 1)}>
      <Head>
        <title>Scone Heads</title>
        <meta name="description" content="Scone Heads. For scone lovers, by scone lovers. Made by Nan Ransohoff, Sarah Ransohoff, and Sarah Sherman."/>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;900&display=swap" rel="stylesheet"/>
      </Head>

      <ScorgyEasterEgg count={count} setCount={setCount} />
	  <h1>
        Scone Heads
      </h1>

      {props.children}

      <footer className={styles.footer}>
        <p>Made with buttery love by Nan Ransohoff, Sarah Sherman, and&nbsp;
          <a href="https://sarahransohoff.com" target="_blank">Sarah Ransohoff</a>.
        </p>
      </footer>
    </div>
	)
 }

export default Layout