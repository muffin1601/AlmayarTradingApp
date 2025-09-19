"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles/CompanyHistory.module.css";

export default function CompanyHistory() {
  return (
    <section className={styles.historySection}>
      <div className={styles.historyContainer}>
        {/* Left Column - Text */}
        <div className={styles.historyContent}>
          <h2 className={styles.historyHeading}>Building Global Trade Connections</h2>
          <p className={styles.historyText}>
            Since its founding, our company has been committed to delivering 
            excellence in general trading, import, and export of high-quality goods. 
            From raw materials to finished products, we connect global markets with 
            reliability and trust.
          </p>
          <p className={styles.historyText}>
            Over the years, we have built a strong international presence, 
            partnering with suppliers and distributors across Asia, the Middle East, 
            Africa, and Europe. Our dedication to seamless logistics and transparent 
            operations makes us a trusted partner in the global marketplace.
          </p>

          <ul className={styles.historyList}>
            <li>
              <FaCheckCircle className={styles.icon} />
              Wide network of global suppliers and buyers
            </li>
            <li>
              <FaCheckCircle className={styles.icon} />
              Expertise in import/export compliance and logistics
            </li>
            <li>
              <FaCheckCircle className={styles.icon} />
              Competitive pricing with quality assurance
            </li>
            <li>
              <FaCheckCircle className={styles.icon} />
              Strong relationships across multiple industries
            </li>
            <li>
              <FaCheckCircle className={styles.icon} />
              Commitment to sustainable and ethical trade
            </li>
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className={styles.historyImageWrapper}>
          <Image
            src="https://images.pexels.com/photos/16341968/pexels-photo-16341968.jpeg"
            alt="Trading History"
            width={500}
            height={350}
            className={styles.historyImage}
            unoptimized
          />
          
        </div>
      </div>
    </section>
  );
}
