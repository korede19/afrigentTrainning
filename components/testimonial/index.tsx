import React from "react";
import styles from "./styles.module.css";
import { testimonial } from "@/utils/data";
import Image from "next/image";
import Stars from "@/svg/stars";

const Testimonials = () => {
  return (
    <div className={styles.pgContain}>
      <h2>See What Our Students Are Saying</h2>
      <div className={styles.boxContain}>
        {testimonial.map((items, index) => {
          return (
            <div key={index} className={styles.box}>
              <Image src={items.image} width={30} height={30} alt="pic" />
              <p>{items.text}</p>
              <hr />
              <div className={styles.name}>
                <div>
                  <h6>{items.name}</h6>
                  <p>{items.location}</p>
                </div>
                <Stars />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
