"use client";
import {  useState } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi"; 
import styles from "../styles/NavbarMain.module.css";
import EnquiryModal from "./EnquiryModal";

export default function NavbarMain() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

     
      <button onClick={() => setIsModalOpen(true)} className={styles.cta}>
        Get a Quote <FiArrowRight className={styles.ctaIcon} />
      </button>
    </div>
    <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
