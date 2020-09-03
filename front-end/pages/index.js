import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.introPage}>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.logoBoxes}>
          <img src="/zewil_city_logo.png" alt="" className={styles.logoImage} />
          <img src="/powered_by.png" alt="" className={styles.logoImage} />
          <img src="/appex_logo.png" alt="" className={styles.logoImage} />
        </div>

        <div className={styles.introContainer}>
          <div className={styles.introLeft}>
            <h2>APPX'20</h2>
            <p>Think, Act, And Change...</p>
            <div className="row">
              <div className=" col-md-6">
                <a href="/hackathon" className="btn btn-primary" style={{backgroundColor: '#18558B'}}>
                  Register for Hackathon
                </a>
              </div>
              <div className=" col-md-6">
                <a href="/summit" className="btn btn-primary" style={{backgroundColor: '#3ABF26'}}>
                  Register for Summit
                </a>
              </div>
            </div>
          </div>
          <div className={styles.introRight}>
            <img src="/intro.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
