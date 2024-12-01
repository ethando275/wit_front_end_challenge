/**
 * Bottom CTA section component that displays:
 * - Title text "LAST CTA"
 * - Descriptive paragraph
 * - Call-to-action button
 * Uses light gray background with centered content layout
 */
"use client";

import styles from "./enterbottom.module.css";

export default function Enterbottom() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Section title */}
        <h2 className={styles.title}>LAST CTA</h2>

        {/* Description text */}
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tellus tellus, pulvinar quis volutpat et, mollis vitae ligula.
        </p>

        {/* Call-to-action button */}
        <button className={styles.enterButton}>Enter Now</button>
      </div>
    </div>
  );
}
