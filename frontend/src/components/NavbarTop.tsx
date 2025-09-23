"use client";

import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import styles from "../styles/NavbarTop.module.css";

export default function NavbarTop() {
  const [language, setLanguage] = useState<"en" | "ar">("en");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
  };

  const toggleSearchOverlay = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className={styles.topbar}>
      <div className={styles.left}>
        <span>Phone: +91-987777777</span>
        <span>Email: info@example.com</span>
      </div>

      <div className={styles.right}>
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value as "en" | "ar")}
        >
          <option value="en">🇬🇧 English</option>
          <option value="ar">🇸🇦 العربية</option>
        </select>

        <button className={styles.searchBtn} onClick={toggleSearchOverlay}>
          <FiSearch />
        </button>
      </div>

      {/* Always render overlay, just toggle class */}
      <div
        className={`${styles.searchOverlay} ${
          isSearchOpen ? styles.active : ""
        }`}
      >
        <button className={styles.closeBtn} onClick={toggleSearchOverlay}>
          <FiX />
        </button>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
          <button className={styles.searchSubmitBtn}>
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
