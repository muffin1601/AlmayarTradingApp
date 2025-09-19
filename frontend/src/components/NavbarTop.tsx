"use client";

import { FiSearch } from "react-icons/fi";
import styles from "../styles/NavbarTop.module.css";
import { useState } from "react";

export default function NavbarTop() {
  const [lang, setLang] = useState("en");

   const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setLang(language);

    // ✅ Directly set Google Translate language (no iframe clicking)
    const select = document.querySelector<HTMLSelectElement>(
      ".goog-te-combo"
    );
    if (select) {
      select.value = language;
      select.dispatchEvent(new Event("change")); // 👈 force trigger
    }
  };

   
 

  return (
    <div className={styles.topbar}>
      {/* Left side: contacts */}
      <div className={styles.left}>
        <span>Phone: +91-987777777</span>
        <span>Email: info@example.com</span>
      </div>

      {/* Right side: language & search */}
      <div className={styles.right}>
        <select value={lang} onChange={handleLanguageChange}>
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
