import React from "react";
import styles from "./footer.module.css";

function Newsletter() {
  return (
    <div className={styles.newsContainer}>
      <div className={styles.leftSection}>
        <div className={styles.newsletterTitle}>Join our newsletter</div>
        <div className={styles.newsletterDesc}>
          Pawprint that has been for pets.
        </div>
      </div>
      <div className={styles.rightSection}>
        <input className={styles.emailInput} placeholder="Enter your email" />
        <button className={styles.subscribeBtn}>
          <p> Subscribe</p>
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
