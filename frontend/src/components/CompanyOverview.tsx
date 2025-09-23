"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/CompanyOverview.module.css";
import { FiArrowRight } from "react-icons/fi";

export default function CompanyOverview() {
  const words = ["Company", "Vision", "Mission"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className={styles.overview}>
      <div className={styles.container}>
        {/* Text Block */}
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            Our{" "}
            <span className={`${styles.highlight} ${fade ? styles.fadeIn : styles.fadeOut}`}>
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

          <button  onClick={() => (window.location.href = "/about")} className={styles.cta}>
            Read More <FiArrowRight className={styles.ctaIcon} />
          </button>
        </div>

        {/* Image Block */}
        <div className={styles.imageBlock}>
          <div className={styles.imageOverlay} />
          <Image
            src="/about.jpg"
            alt="Company Overview"
            width={600}
            height={400}
            className={styles.imageAbout}
          />
        </div>
      </div>
    </section>
  );
}
