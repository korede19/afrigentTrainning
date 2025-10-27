import React from "react";
import styles from "./styles.module.css";

const FooterComp = () => {
  return (
    <div className={styles.footer}>
      <p> Copyright @ {new Date().getFullYear()} Afrigent Digital</p>
    </div>
  );
};

export default FooterComp;
