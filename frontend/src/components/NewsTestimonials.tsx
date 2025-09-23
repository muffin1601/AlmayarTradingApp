"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/NewsTestimonials.module.css";

type Blog = {
  id: string | number;
  title: string;
  image: string;
  date: string;
};

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
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`)
      .then((res) => res.json())
      .then((data) => {
        
        setBlogs(data.slice(0, 2));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

   const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.news}>
          <h2 className={styles.heading}>News</h2>
          <div className={styles.newsGrid}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              blogs.map((item, idx) => (
                <div key={item.id ?? idx} className={styles.newsCard}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className={styles.newsImage}
                  />
                  <div className={styles.newsContent}>
                    <div className={styles.newsTitle}>{item.title}</div>
                    <span className={styles.newsDate}>
                      {formatDate(item.date)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
          <button
            onClick={() => (window.location.href = "/blogs")}
            className={styles.cta}
          >
            Blogs <FiArrowRight className={styles.ctaIcon} />
          </button>
        </div>

        
        <div className={styles.testimonials}>
          <h2 className={`${styles.heading} ${styles.testimonialHeading}`}>
            Testimonials
          </h2>
          <div className={styles.testimonialCard}>
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
                  className={`${styles.dot} ${idx === testimonialIndex ? styles.activeDot : ""
                    }`}
                  onClick={() => setTestimonialIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
