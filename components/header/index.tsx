import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/utils/data";

const Header = () => {
  return (
    <div className={styles.headContainer}>
      <div className={styles.logoContain}>
        <Image
          src="/assets/logo.webp"
          width={155}
          height={66}
          alt="logo"
          priority
        />
      </div>
      <div className={styles.menuContain}>
        {menuItems?.map((items, index) => {
          return (
            <Link href={items.link} key={index}>
              <p>{items.title}</p>
            </Link>
          );
        })}
      </div>
      <div className={styles.buttonContain}>
        <button>CONTACT US</button>
      </div>
    </div>
  );
};

export default Header;
