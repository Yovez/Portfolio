import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {

  const Highlight = (props) => {
    return <span style={{ color: 'yellow' }}>{props.text}</span>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>andrew Bean{"'"}s Portfolio</title>
        <meta name="description" content="andrew Bean's Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          andrewBean<span style={{ color: 'green' }}>.dev</span>
        </h1>
        <h2 className={styles.subtitle}>
          A brief summary of my experience and past projects.
        </h2>

        <div className={styles.contact}>
          <span className={styles.github}><img src="Github-Mark-Light-32px.png" /> <a href="https://github.com/Yovez" target="_blank" rel="noopener noreferrer">Github.com/Yovez</a></span>
          <span className={styles.discord}><img src="Discord-Icon-32px.png" width="48px" /> Yovez#6874</span>
          <span className={styles.twitter}><img src="twitter-icon.png" /> <a href="https://twitter.com/itsYovez" target="_blank" rel="noopener noreferrer">@itsYovez</a></span>
        </div>

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
          <br />
          <br />
          My short term goal is to have a solid understanding of web development practices and a great understanding of a number of web technologies.
          <br />
          My long term goal is to be a professional web developer that either works as a Full-Stack developer in a company, or running a company of my own.
        </p>

        <hr className={styles.hr} />

        <h1 className={styles.subttitle}>Projects</h1>
        <p>
          <span style={{color: 'greenyellow'}}>On-going/WIP</span> - <span style={{color: 'orangered'}}>Finished/Abandoned</span>
        </p>

        <div className={styles.projects}>
          <div className={styles.project + ' ' + styles.ongoing}>
            <h1 className={styles.title}>andrewBean.dev | Portfolio</h1>
            <Link href={"https://github.com/Yovez/Portfolio"}><a target="_blank" className={styles.source}>Source Code</a></Link>
            <iframe src="/" width="400px" height="300px" style={{borderStyle: "none"}}></iframe>
          </div>
          <div className={styles.project + ' ' + styles.ongoing}>
            <Link href={"https://should-you-ride.herokuapp.com"}><a target="_blank" className={styles.title}>ShouldYouRide | Motorcycle focused Weather App</a></Link>
            <Link href={"https://github.com/Yovez/ShouldYouRide"}><a target="_blank" className={styles.source}>Source Code</a></Link>
            <Link href="https://should-you-ride.herokuapp.com"><a className={styles.preview} target={"_blank"}><Image src="/ShouldYouRide_preview.png" width={"320"} height={"320"} /></a></Link>
          </div>
          <div className={styles.project + ' ' + styles.ended}>
            <Link href={"https://www.spigotmc.org/resources/islandrate-askyblock-bentobox.53519/"}><a target="_blank" className={styles.title}>IslandRate | Minecraft Server Plugin</a></Link>
            <Link href={"https://github.com/Yovez/IslandRate"}><a target="_blank" className={styles.source}>Source Code</a></Link>
            <Link href={"https://www.spigotmc.org/resources/islandrate-askyblock-bentobox.53519/"}><a target="_blank"><Image src="/IslandRate_stats.png" width={"320"} height={"320"} /></a></Link>
          </div>
        </div>

        <hr className={styles.hr} />

        <h1 className={styles.subtitle}>Skills & Experience</h1>

        <div className={styles.skills}>
          <h1 className={styles.skill}>Java - 5 years</h1>
          <h1 className={styles.skill}>HTML, CSS, JS - 3 years</h1>
          <h1 className={styles.skill}>SQL - 2 years</h1>
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
          <div>
            <a className={styles.source} href="https://github.com/Yovez/Portfolio"
              target="_blank"
              rel="noopener noreferrer">Source code for this Website</a>
          </div>
          <div>
            Powered by{' '}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a></div>
        </footer>
      </main>
    </div>
  )
}
