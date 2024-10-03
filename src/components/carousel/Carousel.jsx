"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "@/public/styles/Carousel.module.css";
import { carouselImages as images } from "@/web-data/render-data";
// import images from '@/public/assets/images' // Adjust the path if needed

export default function Carousel() {
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

  return (
    <div className={styles.carousel}>
      <button
        onClick={prevSlide}
        className={`${styles.carousel__btn} ${styles.carousel__btn__prev}`}
      >
        &lt;
      </button>
      <Image
        src={images[activeIndex].src}
        alt={images[activeIndex].alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <button
        onClick={nextSlide}
        className={`${styles.carousel__btn} ${styles.carousel__btn__next}`}
      >
        &gt;
      </button>
    </div>
  );
}
