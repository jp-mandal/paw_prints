import React from "react";
import Newsletter from "./Newsletter";
import styles from "./footer.module.css";

function Footer() {
  return (
    <div>
      <Newsletter />
      <div className={styles.footer}>
        <div className={styles.logo}>Pawprints</div>
        <div className={styles.footerItems}>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkTitle}>Quick Links</div>
            <div className={styles.footerLink}>About Us</div>
            <div className={styles.footerLink}>Get Involved</div>
            <div className={styles.footerLink}>Contact Us</div>
            <div className={styles.footerLink}>Media</div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkTitle}>Resources</div>
            <div className={styles.footerLink}>Animal Saftys</div>
            <div className={styles.footerLink}>Programs</div>
            <div className={styles.footerLink}>Events</div>
            <div className={styles.footerLink}>Alumni</div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkTitle}>Ways to give</div>
            <div className={styles.footerLink}>Find a Family</div>
            <div className={styles.footerLink}>Donation</div>
            <div className={styles.footerLink}>Volunteer</div>
            <div className={styles.footerLink}>Give a Gift</div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinkTitle}>Social Media</div>
            <div className={styles.footerLink}>
              Follow us on social media to find out the latest updates on our
              progress.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyrightFooter}>
        <div className={styles.copyrightText}>
          Copyright © 2024 fourpaws. All Rights Reserved
        </div>
        <div className={styles.copyrightRightContent}>
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
          <div>Security</div>
          <div>Sitemap</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
