"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; 
import styles from "../styles/NavbarMain.module.css";

export default function NavbarMain() {
  return (
    <div className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src="/logo.webp" alt="Logo" />
        
      </div>

      <div className={styles.right} >
      <nav className={styles.menu}>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>

     
      <Link href="/quote" className={styles.cta}>
        Get a Quote <FiArrowRight className={styles.ctaIcon} />
      </Link>
    </div>
    </div>
  );
}
