import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.topLeftCirle} />
      <div className={styles.bottomRightCirle} />
      <Image
        src="/contact-dog.png"
        className={styles.dog}
        width={393}
        height={393}
        alt="dog-image"
      />
      <Image
        src="/contact-cat.png"
        className={styles.cat}
        width={393}
        height={393}
        alt="cat-image"
      />
      <div className={styles.title}>Get Involved</div>
      <div className={styles.content}>
        Our work is made possible by the generosity of people like you, who have
        contributed to our mission to improve the lives of all animals.
      </div>
      <div className={styles.actionButton}>
        <button className={styles.button}>
          <p> Adopt & Donate to help us</p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </button>
        <button className={styles.button}>
          <p>Volunteering opportunities</p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
          </p>
        </button>
      </div>
    </div>
  );
}

export default Contact;
