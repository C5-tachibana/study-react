import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'
import { Main } from 'src/components/Main'
import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    setCount(count + 1);
  }

  console.log("count",count);
  console.log("setCount",setCount);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <button onClick={handleClick}>
        ボタン
      </button>
      <div>{count}</div>
      <Main page="index"/>

      <Footer />
    </div>
  )
}
