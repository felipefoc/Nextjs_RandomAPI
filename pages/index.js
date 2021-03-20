import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Random User Generator API</title>
        <meta name="keywords" content="homepage" />
      </Head>
      <div>
        <h1 className={styles.title}>Random User Generator API</h1>
        <div >
          <img className={styles.display} src={data.picture['large']} />
          <p>Name : <b>{data.titel} {data.name['first']} {data.name['last']}</b></p>
          <p>Gender : <b>{data.gender}</b></p>
          <p>Cell : <b>{data.cell}</b></p>
          <p>Email : <b>{data.email}</b></p>
          <p>Age : <b>{data.registered['age']}</b></p>
          <p>Date : <b>{data.registered['date']}</b></p>
          <p>Login : <b>{data.login['username']}</b></p>
          <p>Password : <b>{data.login['password']}</b></p>        
        </div>
        <br />
        <br />
        
        <p className={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <Link href="#">
          <a className={styles.btn}>Get New User</a>
        </Link>
      </div>
    </>
  )
};

Home.getInitialProps = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  return { data: data.results[0] }
};
