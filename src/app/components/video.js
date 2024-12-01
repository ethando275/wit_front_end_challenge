/**
 * Video section component that displays:
 * - Headline text about submitted videos
 * - Grid of 5 video thumbnails
 * - Hover effects on thumbnails (zoom and red bar)
 * Features responsive design for different screen sizes
 */
"use client";

import Image from "next/image";
import styles from "./video.module.css";

export default function Video() {
  // Array of placeholder images for video thumbnails
  const videos = [
    "/videos/video1.png",
    "/videos/video2.png",
    "/videos/video3.png",
    "/videos/video4.png",
    "/videos/video5.png",
  ];

  return (
    <div className={styles.container}>
      {/* Section headline */}
      <h2 className={styles.headline}>
        HEADLINE ABOUT VIDEOS{" "}
        <span className={styles.highlight}> ALREADY SUBMITTED</span>
      </h2>

      {/* Video grid container */}
      <div className={styles.videoGrid}>
        {videos.map((video, index) => (
          // Individual video thumbnail wrapper with hover effects
          <div key={index} className={styles.videoItem}>
            <div className={styles.imageWrapper}>
              <Image
                src={video}
                alt={`Submitted Video ${index + 1}`}
                width={200}
                height={300}
                className={styles.videoImage}
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
