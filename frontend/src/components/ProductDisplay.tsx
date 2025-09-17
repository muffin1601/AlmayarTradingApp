"use client";

import styles from "../styles/ProductDisplay.module.css";
import { FiArrowRight } from "react-icons/fi"; 

const products = [
  { id: 1, name: "Seseme Seeds", image: "/assets/1 (1).jpg" },
  { id: 2, name: "Shea Nuts", image: "/assets/1 (2).jpg" },
  { id: 3, name: "Teak Wood", image: "/assets/1 (3).jpg" },
    { id: 4, name: "Cocoa Beans", image: "/assets/1 (1).jpg" },
    { id: 5, name: "Cashew Nuts", image: "/assets/1 (3).jpg" },
    { id: 6, name: "Coffee Beans", image: "/assets/1 (2).jpg" },
    { id: 7, name: "Almonds", image: "/assets/1 (1).jpg" },
    { id: 8, name: "Pistachios", image: "/assets/1 (3).jpg" },
];

export default function ProductDisplay() {
  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Products</h2>
        <p className={styles.subheading}>
          Hand-crafted and designer products, beautifully styled with an artistic presence, these lamps feature ceramic, wood, acrylic, glass, metals and other natural materials.
        </p>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <img src={product.image} alt={product.name} className={styles.imageProduct} />
              <div className={styles.cardOverlay}>
                <h3>{product.name}</h3>
                <button>View <FiArrowRight className={styles.IconArrow2} /></button>
              </div>
            </div>
          ))}
        </div>

        <button className={styles.downloadBtn}>Explore <FiArrowRight className={styles.IconArrow} /></button>

        
      </div>
    </section>
  );
}
