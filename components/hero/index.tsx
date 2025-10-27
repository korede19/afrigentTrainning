import React from "react";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <h1>
          JAPA WITH YOUR LAPTOP! EARN IN DOLLARS AS A WORDPRESS PRO IN JUST TWO
          WEEKS
        </h1>
        <p>
          Stop the endless job search. Master an in-demand skill that lets you
          work remotely for international client and get paid in foreign
          currency. Our intensive bootcamp is designed for total beginners to
          launch a high income career.
        </p>
        <button>GET INSTANT ACCESS</button>
        <p>
          Class starts on the 14th of October. Early Bird discount is limited
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
