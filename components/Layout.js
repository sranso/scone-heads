import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';

import EasterEggScorgy from '../components/EasterEggScorgy'
import styles from '../styles/Layout.module.css'

const Layout = (props) => {
  const [count, setCount] = useState(0)

  return (
	<div className={styles.container} onClick={() => setCount(count + 1)}>
      <Head>
        <title>Scone Heads</title>
        <meta name="description" content="For scone lovers, by scone lovers. Made by Nan Ransohoff, Sarah Ransohoff, and Sarah Sherman."/>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-177913389-3"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-177913389-3');
          `}}>
        </script>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@100;900&display=swap" rel="stylesheet"/>
      </Head>

      <EasterEggScorgy count={count} setCount={setCount} />
	    <Link href="/">
	  	  <a><h1>
          Scone Heads
      	</h1></a>
      </Link>

      {props.children}

      <footer className={styles.footer}>
        <p>Made with buttery love by&nbsp;
          <a href="https://sarahransohoff.com" target="_blank" className={styles.footerLink}>Sarah Ransohoff,</a>
          &nbsp;Nan Ransohoff, and Sarah Sherman.
        </p>
      </footer>
    </div>
	)
 }

export default Layout