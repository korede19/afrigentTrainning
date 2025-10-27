import React from "react";
import styles from "./styles.module.css";

const Earning = () => {
  return (
    <div className={styles.pgContainer}>
      <div className={styles.contain}>
        <h2>Your Dollar-Earning Future Starts with One Decision.</h2>
        <p>
          Stop dreaming about financial freedom. Take the first step today. The
          skills you gain in two weeks will pay for this class over and over
          again.
        </p>
        <button>ENROLL NOW</button>
        <span className={styles.otherText}>
          Only 5 Early Bird spots remaining at ₦25,000. The price increases to
          ₦40,000 once they are gone! Class starts on [Insert Start Date]
        </span>
      </div>
    </div>
  );
};

export default Earning;
