"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "./styles/BlogsDisplay.module.css";

type Blog = {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  featured?: boolean;
};

export default function BlogsDisplay() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`) 
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

 if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
        <p className={styles.loaderText}>Fetching blogs...</p>
      </div>
    );
  }

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* <h2 className={styles.heading}>Latest Blogs</h2>
        <p className={styles.subheading}>
          Explore our latest insights, tips, and guides in the trading and business world.
        </p> */}

        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog.slug} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className={styles.blogImage}
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
              </div>
              <div className={styles.cardContent}>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <div className={styles.blogMeta}>
                  <span>{blog.author}</span>
                  <span>{new Date(blog.date).toLocaleDateString()}</span>
                </div>
                <Link href="#" className={styles.readMore}>
                  Read More <FiArrowRight className={styles.arrowIcon} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
