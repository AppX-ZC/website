import React from "react";
import styles from "../styles/Hero.module.css";

const HeroComponent = () => {
  return (
    <div className={styles.heroContainer}>
      <div className="container">
        <h1 className={styles.title}>Welcome to AppX '20</h1>
        <p className={styles.desc}>
          We love to have you and your team in our Competition. <br></br>
          Prepare yourself well, the atmosphere is burning. The <br></br>
          experience and knowledge to learn are totally worth it!
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
