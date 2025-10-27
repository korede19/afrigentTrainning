import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { advantage } from "@/utils/data";

const Advantage = () => {
  return (
    <div className={styles.contain}>
      <h2>
        WHAT YOU&apos;LL GET:
        <br />
        <span className={styles.subHead}> THE AFRIGENT DIGITAL ADVANTAGE</span>
      </h2>
      <p>This Isn&apos;t Just a Class, It&apos;s Your Launchpad</p>
      <div className={styles.row}>
        <div className={styles.colOne}>
          <Image
            src="/assets/image3.jpg"
            width={400}
            height={400}
            alt="image"
          />
          <Image
            src="/assets/image4.jpg"
            width={400}
            height={400}
            alt="image"
          />
        </div>
        <div className={styles.colTwo}>
          {advantage.map((items, index) => {
            return (
              <div key={index} className={styles.contents}>
                {items.icon}
                <div className={styles.texts}>
                  <h3>{items.head}</h3>
                  <p>{items.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advantage;
