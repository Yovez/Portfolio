import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {

  const Highlight = (props) => {
    return <span style={{ color: 'yellow' }}>{props.text}</span>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>andrew Bean{"'"}s Portfolio</title>
        <meta name="description" content="andrew Bean's Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          andrewBean<span style={{ color: 'green' }}>.dev</span>
        </h1>
        <h2 className={styles.subtitle}>
          A brief summary of my experience and past projects.
        </h2>

        <p className={styles.description}>
          I am a 24 year old college student that&apos;s studying Computer Science.
          I started programming in <Highlight text="2015" /> by learning to make plugins for Minecraft Java servers.
          I learned the ins and outs of plugin development using Java with a vast number of APIs and Libraries.
          <br />
          <br />
          In February of <Highlight text="2021" /> I stopped persuing Minecraft plugin development
          and focused on learning a new set of skills to advance in a career, web development.
          I started relearning the basics of HTML, CSS, and JS. Then I quickly dived into learning React, Node.js, and Express.js.
          The next set of goals I have planned are to relearn the basics of Python for the backend of web development, to use React and Python together.
        </p>

        <div className={styles.skills}>
          <h1 className={styles.skill}>Java - 5 years</h1>
          <h1 className={styles.skill}>HTML, CSS, JS - 3 years</h1>
          <h1 className={styles.skill}>MySQL - 2 years</h1>
          <h1 className={styles.skill}>Node.js - 1 year</h1>
          <h1 className={styles.skill}>Express.js - 1 year</h1>
          <h1 className={styles.skill}>React.js - 1 year</h1>
          <h1 className={styles.skill}>Mongoose.js - 1 year</h1>
          <h1 className={styles.skill}>PostgreSQL - 1 year</h1>
          <h1 className={styles.skill}>Python - &#60; 1 year</h1>
          <h1 className={styles.skill}>C# - &#60; 1 year</h1>
          <h1 className={styles.skill}>C++ - &#60; 1 year</h1>
        </div>

        <footer className={styles.footer}>
          Powered by{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </main>
    </div>
  )
}
