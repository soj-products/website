// CarouselImages.jsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "@/public/styles/Carousel.module.css";

export default function CarouselImages({ images, autoSlide = true, slideInterval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide effect
  useEffect(() => {
    if (autoSlide) {
      const slideTimer = setInterval(nextSlide, slideInterval);
      return () => clearInterval(slideTimer); // Clean up the interval
    }
  }, [activeIndex, autoSlide, slideInterval]);

  return (
    <div className={styles.carousel}>
      <button
        onClick={prevSlide}
        className={`${styles.carouselBtn} ${styles.carouselBtnPrev}`}
      >
        &lt;
      </button>
      <div className={styles.carouselImageWrapper}>
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          className={styles.carouselImage}
        />
      </div>
      <button
        onClick={nextSlide}
        className={`${styles.carouselBtn} ${styles.carouselBtnNext}`}
      >
        &gt;
      </button>
      <div className={styles.carouselIndicators}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
