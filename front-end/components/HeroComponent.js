import React from "react";
import styles from "../styles/Hero.module.css";

const HeroComponent = ({ imgUrl }) => {
  return (
    <div
      className={styles.heroContainer}
      style={{ background: `url(${imgUrl})` }}
    >
      <div className="container">
        <h1 className={styles.title}>Welcome to AppX '20</h1>
        <p className={styles.desc}>
          We are very excited to see you in AppeX 20 summit. <br></br>
          Prepare yourself well, the atmosphere is burning. <br></br>The
          experience and knowledge to learn are totally worth it!
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
