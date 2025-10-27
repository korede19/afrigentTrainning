import React from "react";
import styles from "./styles.module.css";
import { regularPrice } from "@/utils/data";
import Little from "@/svg/little";

const Regular = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.header}>
        <h3>Regular Price</h3>
      </div>
      <div className={styles.body}>
        <h2>₦40,000</h2>
        <div>
          {regularPrice.map((item, index) => {
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

export default Regular;
