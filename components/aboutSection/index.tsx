import React from "react";
import styles from "./styless.module.css";
import { firstItems } from "@/utils/data";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.sectionOne}>
          <h2>TIRED OF NIGERIAN STRUGGLES? LET&apos;S FLIP THE SCRIPT</h2>
          <div className={styles.row}>
            <div className={styles.colOne}>
              {firstItems.map((items, index) => {
                return (
                  <div key={index} className={styles.items}>
                    {items.icon} <p>{items.text}</p>
                  </div>
                );
              })}
            </div>
            <div className={styles.rowTwo}>
              <Image
                src="/assets/imageOne.jpg"
                width={400}
                height={400}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
