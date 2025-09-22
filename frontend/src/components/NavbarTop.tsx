"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi"; 
import styles from "../styles/NavbarTop.module.css";

export default function NavbarTop() {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang); // just updates the selected value
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

        <button className={styles.searchBtn}>
          <FiSearch /> 
        </button>
      </div>
    </div>
  );
}
