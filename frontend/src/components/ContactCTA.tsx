"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import styles from "../styles/ContactCTA.module.css";

type ContactCTAProps = {
  heading?: string;
  subheading?: string;
};

export default function ContactCTA({
  heading = "Have Questions About Our Products?",
  subheading = "Reach out to us today! Our team is ready to assist you with product inquiries, pricing, or custom solutions."
}: ContactCTAProps) {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subheading}>{subheading}</p>
        <Link href="/contact" className={styles.ctaButton}>
          Contact Us <FiArrowRight className={styles.ctaIcon} />
        </Link>
      </div>
    </section>
  );
}
