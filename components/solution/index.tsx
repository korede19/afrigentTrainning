import React from "react";
import styles from "./styles.module.css";
import { colOne, colTwo } from "@/utils/data";
import Image from "next/image";

const Solution = () => {
  return (
    <div className={styles.sectionContain}>
      <div className={styles.colOne}>
        {colOne.map((items, index) => {
          return (
            <div className={styles.box} key={index}>
              {items.icon}
              <h3>{items.heading}</h3>
              <p>{items.text}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.colTwo}>
        <Image src="/assets/image2.jpg" width={200} height={524} alt="image" />
      </div>
      <div className={styles.colThree}>
        {colTwo.map((items, index) => {
          return (
            <div className={styles.box} key={index}>
              {items.icon}
              <h3>{items.heading}</h3>
              <p>{items.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Solution;
