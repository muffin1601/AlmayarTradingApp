"use client";

import { useEffect, useState } from "react";
import styles from "../styles/CompanyOverview.module.css";
import { FiArrowRight } from "react-icons/fi";

export default function CompanyOverview() {
  const words = ["Company", "Vision", "Mission"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true); // fade in new word
      }, 500); // match fade out duration
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            Our{" "}
            <span
              className={`${styles.highlight} ${fade ? styles.fadeIn : styles.fadeOut}`}
            >
              {words[index]}
            </span>
          </h2>
          <p className={styles.subheading}>
            Trusted Import & Export Partner Worldwide
          </p>
          <p className={styles.description}>
            At <strong>Al Mayaar</strong>, we specialize in bridging markets by
            connecting businesses across the globe. With expertise in sourcing,
            logistics, and international trade, we deliver seamless import and
            export services that empower businesses to grow with confidence.
            <br />
            <br />
            Our commitment to quality, transparency, and customer satisfaction
            makes us the partner of choice for companies seeking reliable global
            trade solutions.
          </p>

          <button className={styles.cta}>
            Read More <FiArrowRight className={styles.ctaIcon} />
          </button>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.imageOverlay} />
          <img
            src="/about.jpg"
            alt="Company Overview"
            className={styles.imageAbout}
          />
        </div>
      </div>
    </section>
  );
}
