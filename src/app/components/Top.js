/**
 * Top hero section component that displays:
 * - Full-width background image
 * - Countdown timer
 * - Left section with content
 * - Right section with prize carousel
 * Features responsive design with mobile optimization
 */
"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "./top.module.css";
import Instructions from "./instructions";

export default function Top() {
  // State for current slide and countdown timer
  const [currentSlide, setCurrentSlide] = useState(0);
  const [countdown, setCountdown] = useState("");
  const timerRef = useRef(null);
  const countdownRef = useRef(null);

  // Array of images for carousel
  const images = [
    "/carousel/carousel1.png",
    "/carousel/carousel2.png",
    "/carousel/carousel3.png",
    "/carousel/carousel4.png",
    "/carousel/carousel5.png",
  ];

  // Array of place text for prizes
  const placeText = [
    "FIRST PLACE",
    "SECOND PLACE",
    "THIRD PLACE",
    "FOURTH PLACE",
    "FIFTH PLACE",
  ];

  // Array of prize text for prizes
  const prizeText = [
    "FRESNO STATE JERSEY, $50 GIFT CARD, PEPSI PRODUCT",
    "FRESNO STATE BACKPACK, MOPHIE POWER PACK, PEPSI PRODUCT",
    "FRESNO STATE BLANKET, PEPSI PRODUCT",
    "DAVANTE ADAMS BOBBLEHEAD",
    "BIG 3 BOBBLEHEAD (PAUL GEORGE, AARON JUDGE, DEREK CARR)",
  ];

  // Function to start timer for carousel
  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);
  };

  // Function to handle indicator click for carousel
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    startTimer();
  };

  // Effect to update countdown timer
  useEffect(() => {
    // Set target date to May 1, 2025
    const targetDate = new Date("2025-05-01T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setCountdown(
        `${days}D ${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    // Update immediately and then every second
    updateCountdown();
    countdownRef.current = setInterval(updateCountdown, 1000);

    // Cleanup interval on unmount
    return () => {
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  // Effect to start timer for carousel
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length]);

  return (
    <div className={styles.container}>
      {/* Background image */}
      <div className={styles.backgroundImage} />

      {/* Main content */}
      <div className={styles.content}>
        {/* Left section with text and button */}
        <div className={styles.leftSection}>
          <div className={styles.countdownTimer}>
            <span className={styles.countdownLabel}>VOTING BEGINS IN </span>
            <span className={styles.countdownTime}>{countdown}</span>
          </div>
          <div className={styles.contestInfo}>
            <Image
              src="/logos/fresno-logo.png"
              alt="Fresno Logo"
              width={100}
              height={100}
              className={styles.contestLogo}
            />
            <div className={styles.contestText}>
              <div className={styles.contestLabel}>OUR NEXT CONTEST:</div>
              <div className={styles.contestName}>#LOREMIPSUMDOLOR</div>
            </div>
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.title}>FAN MOMENTS</h1>
            <p className={styles.subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pharetra congue libero in finibus. Integer nulla eros, tempus.
            </p>
            <div className={styles.presentedBy}>
              <span className={styles.presentedText}>PRESENTED BY </span>
              <span className={styles.pepsiText}>PEPSI</span>
              <div className={styles.pepsiLogo}>
                <Image
                  src="/logos/pepsi-logo.png"
                  alt="Pepsi Logo"
                  width={40}
                  height={40}
                  className={styles.logo}
                />
              </div>
            </div>
            <div className={styles.instructionsWrapper}>
              <Instructions text="Step one id libero imperdiet, lacinia arcu ac, ullamcorper ligula. Quisque ut venenatis nulla. Nulla est magna, gravida at enim eget, imperdiet lobortis." />
              <Instructions text="Step two pulvinar, enim lacinia congue lacinia, enim quam imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod pellentesque." />
              <Instructions text="Step three sit amet aliquam quam faucibus sed. Proin nec ultricies libero. Vivamus sed urna." />
            </div>
            <button className={styles.enterButton}>Enter Now</button>
          </div>
        </div>

        {/* Right section with prize images */}
        <div className={styles.rightSection}>
          <div className={styles.carouselContainer}>
            {images.map((image, index) => (
              <div key={index} className={styles.carouselSlide}>
                <Image
                  src={image}
                  alt={`Carousel Image ${index + 1}`}
                  fill
                  className={`${styles.carouselImage} ${
                    currentSlide === index ? styles.active : ""
                  }`}
                  priority={index === 0}
                />
                <div
                  className={`${styles.prizeText} ${
                    currentSlide === index ? styles.active : ""
                  }`}
                >
                  <div>
                    <div className={styles.placeText}>{placeText[index]}</div>
                    <strong>{prizeText[index]}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.indicators}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`${styles.indicator} ${
                  currentSlide === index ? styles.active : ""
                }`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
