import React from "react";
import styles from "./styles.module.css";
import { earlyBird } from "@/utils/data";
import Little from "@/svg/little";

const EarlyBird = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.header}>
        <h3>EARLY BIRD</h3>
      </div>
      <div className={styles.body}>
        <h2>₦25,000</h2>
        <div>
          {earlyBird.map((item, index) => {
            return (
              <div key={index} className={styles.items}>
                <Little />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.payNow}>SECURE NOW</button>
    </div>
  );
};

export default EarlyBird;
