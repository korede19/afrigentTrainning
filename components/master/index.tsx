import React from "react";
import styles from "./styles.module.css";
import { modules } from "@/utils/data";

const Master = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.contain}>
        <h2>
          Here&apos;s Exactly What You&apos;ll <br />
          Master <span className={styles.span}>in 2 Weeks</span>
        </h2>
        <div className={styles.modulesList}>
          {modules.map((items, index) => {
            return (
              <div key={index} className={styles.modules}>
                <h4>{items.number}</h4>
                <h5>{items.head}</h5>
                <p>{items.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Master;
