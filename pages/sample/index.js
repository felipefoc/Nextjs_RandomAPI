import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Sample = () => {
    return ( 
        <>
            <Head>
                <title>GitHub</title>
                <meta name="keywords" content="github" />
            </Head>
            <div>
                <h1 className={styles.title}>GItHub</h1>
                <p className={styles.text}>Link for this project ! </p>
                <br /><br />
                <Link href="#"><a className={styles.btn}>Click Here !</a></Link >
            </div>
        </>
    );
}
 
export default Sample;