"use client";

import { useEffect, useState } from "react";
import styles from "../styles/Hero.module.css";
import { FiArrowRight } from "react-icons/fi";
import EnquiryModal from "./EnquiryModal";

const slides = ["/hero.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000 
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Slides */}
      {slides.map((img, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.active : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      
      <div className={styles.overlay} />

      
      <div className={styles.content}>
        <h1>
          Global Import <span className={styles.highlight}>& Export</span>{" "}
          Solutions
        </h1>
        <p>
          Connecting businesses worldwide with reliable trading services. From
          sourcing quality products to delivering across borders, we ensure
          trust, speed, and excellence in every deal.Connecting businesses worldwide with reliable trading services. From
          sourcing quality products to delivering across borders, we ensure
          trust, speed, and excellence in every deal.
        </p>

        <div className={styles.buttons}>
          <button className={styles.cta1}>
            Explore Products <FiArrowRight className={styles.ctaIcon1} />
          </button>

          <button onClick={() => setIsModalOpen(true)} className={styles.ghostBtn}>
            Request a Quote <FiArrowRight className={styles.ctaIcon2} />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className={styles.indicators}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
