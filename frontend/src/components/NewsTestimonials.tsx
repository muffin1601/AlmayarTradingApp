"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/NewsTestimonials.module.css";
import { motion } from "framer-motion";
import { useInView } from "./useInView"; // adjust path

const newsItems = [
  {
    id: 1,
    title: "New Fabric opening",
    image: "/assets/1 (1).jpg",
    date: "Sep 15, 2025",
  },
  {
    id: 2,
    title: "Applied DNA Sciences, WestPoint Home Sign",
    image: "/assets/1 (2).jpg",
    date: "Sep 12, 2025",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Textile impressed me on multiple levels. Needless to say we are extremely satisfied with the results.",
    name: "Jayson Dorem-som",
    role: "Founder",
    avatar: "/assets/1 (3).jpg",
  },
  {
    id: 2,
    text: "Great quality and timely delivery, highly recommend for corporate projects.",
    name: "Sarah Johnson",
    role: "Manager",
    avatar: "/assets/1 (3).jpg",
  },
];

export default function NewsTestimonials() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Hooks for scroll animations
  const { ref: newsRef, isVisible: newsVisible } = useInView(0.2);
  const { ref: testiRef, isVisible: testiVisible } = useInView(0.2);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* News */}
        <motion.div
          ref={newsRef}
          className={styles.news}
          initial={{ opacity: 0, x: -60 }}
          animate={newsVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.heading}>News</h2>
          <div className={styles.newsGrid}>
            {newsItems.map((item, i) => (
              <motion.div
                key={item.id}
                className={styles.newsCard}
                initial={{ opacity: 0, y: 40 }}
                animate={newsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className={styles.newsImage}
                />
                <div className={styles.newsContent}>
                  <div className={styles.newsTitle}>{item.title}</div>
                  <span className={styles.newsDate}>{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.button
            className={styles.cta}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={newsVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Blogs <FiArrowRight className={styles.ctaIcon} />
          </motion.button>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          ref={testiRef}
          className={styles.testimonials}
          initial={{ opacity: 0, x: 60 }}
          animate={testiVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${styles.heading} ${styles.testimonialHeading}`}>
            Testimonials
          </h2>
          <motion.div
            className={styles.testimonialCard}
            key={testimonials[testimonialIndex].id} // force re-animates when index changes
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.testimonialText}>
              “{testimonials[testimonialIndex].text}”
            </p>
            <div className={styles.testimonialAuthor}>
              <Image
                src={testimonials[testimonialIndex].avatar}
                alt={testimonials[testimonialIndex].name}
                width={50}
                height={50}
                className={styles.avatar}
              />
              <div>
                <h4 className={styles.authorName}>
                  {testimonials[testimonialIndex].name}
                </h4>
                <p className={styles.authorRole}>
                  {testimonials[testimonialIndex].role}
                </p>
              </div>
            </div>
            <div className={styles.dots}>
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`${styles.dot} ${
                    idx === testimonialIndex ? styles.activeDot : ""
                  }`}
                  onClick={() => setTestimonialIndex(idx)}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
