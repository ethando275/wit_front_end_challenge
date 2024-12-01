/**
 * Footer component that displays the site footer with:
 * - Company logo on the left
 * - Copyright text next to the logo
 * - Navigation links on the right with separators
 * Uses a dark red background with pink accent colors for links
 */
"use client";

import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {/* Left section with logo and copyright */}
        <div className={styles.leftSection}>
          <Image
            src="/Logo_Wit.svg"
            alt="Wit Logo"
            width={100}
            height={40}
            className={styles.logo}
          />
          <div className={styles.copyright}>
            Copyright 2020 Wit. All rights reserved.
          </div>
        </div>
        {/* Right section with navigation links */}
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            FAQ
          </a>
          <span className={styles.divider}>|</span>
          <a href="#" className={styles.link}>
            Privacy Policy
          </a>
          <span className={styles.divider}>|</span>
          <a href="#" className={styles.link}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
