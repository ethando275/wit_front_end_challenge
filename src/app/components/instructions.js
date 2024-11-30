"use client";

import styles from "./instructions.module.css";

export default function Instructions({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.line}></div>
      <div className={styles.content}>
        <p>{text}</p>
      </div>
    </div>
  );
}
