"use client";

import { FiSearch } from "react-icons/fi"; 
import styles from "../styles/NavbarTop.module.css";

export default function NavbarTop() {
  return (
    <div className={styles.topbar}>
      {/* Left side: contacts */}
      <div className={styles.left}>
        <span>Phone: +91-987777777</span>
        <span>Email: info@example.com</span>
      </div>

      {/* Right side: language & search */}
      <div className={styles.right}>
        <select>
          <option value="en">🇬🇧 English</option>
          <option value="ar">🇸🇦 Arabic</option>
          
        </select>

        <button className={styles.searchBtn}>
          <FiSearch />
        </button>
      </div>
    </div>
  );
}
