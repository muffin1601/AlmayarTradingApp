"use client";

import { useEffect, useState } from "react";
import styles from "../styles/CompanyOverview.module.css";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "./useInView"; // adjust path if needed

export default function CompanyOverview() {
  const words = ["Company", "Vision", "Mission"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const { ref, isVisible } = useInView(0.2);

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
    <section className={styles.overview} ref={ref}>
      <div className={styles.container}>
        {/* Text Block */}
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.heading}>
            Our{" "}
            <span
              className={`${styles.highlight} ${
                fade ? styles.fadeIn : styles.fadeOut
              }`}
            >
              {words[index]}
            </span>
          </h2>

          <motion.p
            className={styles.subheading}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Trusted Import & Export Partner Worldwide
          </motion.p>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            At <strong>Al Mayaar</strong>, we specialize in bridging markets by
            connecting businesses across the globe. With expertise in sourcing,
            logistics, and international trade, we deliver seamless import and
            export services that empower businesses to grow with confidence.
            <br />
            <br />
            Our commitment to quality, transparency, and customer satisfaction
            makes us the partner of choice for companies seeking reliable global
            trade solutions.
          </motion.p>

          <motion.button
            className={styles.cta}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Read More <FiArrowRight className={styles.ctaIcon} />
          </motion.button>
        </motion.div>

        {/* Image Block */}
        <motion.div
          className={styles.imageBlock}
          initial={{ opacity: 0, x: 60 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.imageOverlay} />
          <img
            src="/about.jpg"
            alt="Company Overview"
            className={styles.imageAbout}
          />
        </motion.div>
      </div>
    </section>
  );
}
