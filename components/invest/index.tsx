import React from "react";
import styles from "./styles.module.css";
import { include } from "@/utils/data";
import Checked from "@/svg/checked";
import Regular from "../regularPrice";
import EarlyBird from "../earlyBird";

const Invest = () => {
  return (
    <div className={styles.contain}>
      <div className={styles.container}>
        <h2>
          Invest in Your Freedom. <br />
          The Return is Priceless.
        </h2>
        <div className={styles.pricing}>
          <div className={styles.colOne}>
            <h4>What&apos;s Included</h4>
            {include.map((items, index) => {
              return (
                <div key={index}>
                  <Checked />
                  <p>{items.text}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.colTwo}>
            <Regular />
            <EarlyBird />
          </div>
        </div>
        <p className={styles.otherText}>
          &quot;Your investment is protected. If you attend all live sessions
          and complete the coursework but feel you haven&apos;t gained the
          skills, we offer a 100% money-back guarantee.&quot;
        </p>
      </div>
    </div>
  );
};

export default Invest;
