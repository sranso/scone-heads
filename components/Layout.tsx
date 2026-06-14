import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import type { MouseEvent, ReactNode } from "react";

import EasterEggScorgy from "../components/EasterEggScorgy";
import styles from "../styles/Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = (props: LayoutProps) => {
  const [count, setCount] = useState(0);
  const handleGlobalClick = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLAnchorElement).href) return;
    setCount(count + 1);
  };

  return (
    <div className={styles.container} onClick={handleGlobalClick}>
      <Head>
        <title>Scone Heads</title>
        <meta
          name="description"
          content="For scone lovers, by scone lovers. Made by Nan Ransohoff, Sarah Ransohoff, and Sarah Sherman."
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-177913389-3"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-177913389-3');
          `,
          }}
        ></script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Playfair+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <EasterEggScorgy count={count} setCount={setCount} />
      <header>
        <Link href="/">
          <h1>Scone Heads</h1>
        </Link>
      </header>

      {props.children}

      <footer>
        <p>
          Made with buttery love by&nbsp;
          <a href="https://sarahransohoff.com" target="_blank">
            Sarah Ransohoff,
          </a>
          &nbsp;Nan Ransohoff, Sarah Sherman, and Rebecca Lissner.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
