import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta name="keywords" content="about" />
            </Head>
            <div>
                <h1 className={styles.title}>About</h1>
                <p>This website are using Next.js for front-end and getting data from https://randomuser.me/ api.</p>
                
            </div>
        </>
    );
}

export default About;