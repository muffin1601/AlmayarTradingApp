"use client";

import styles from "../styles/ProductDisplay.module.css";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useInView } from "./useInView"; 
import Image from "next/image"

const products = [
  { id: 1, name: "Seseme Seeds", image: "https://images.pexels.com/photos/614006/pexels-photo-614006.jpeg" },
  { id: 2, name: "Shea Nuts", image: "https://images.pexels.com/photos/1192053/pexels-photo-1192053.jpeg" },
  { id: 3, name: "Teak Wood", image: "https://images.pexels.com/photos/5908244/pexels-photo-5908244.jpeg" },
  { id: 4, name: "Cocoa Beans", image: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg" },
  { id: 5, name: "Cashew Nuts", image: "https://images.pexels.com/photos/5507644/pexels-photo-5507644.jpeg" },
  { id: 6, name: "Coffee Beans", image: "https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg" },
  { id: 7, name: "Almonds", image: "https://images.pexels.com/photos/1013420/pexels-photo-1013420.jpeg" },
  { id: 8, name: "Pistachios", image: "https://images.pexels.com/photos/52521/pistachio-nuts-pistachios-crisps-52521.jpeg" },
];

export default function ProductDisplay() {
  const { ref, isVisible } = useInView(0.2);

  return (
    <section className={styles.productSection} ref={ref}>
      <div className={styles.container}>
        {/* Heading */}
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Our Products
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hand-crafted and designer products, beautifully styled with an artistic presence,
          these lamps feature ceramic, wood, acrylic, glass, metals and other natural
          materials.
        </motion.p>

        {/* Product Grid */}
        <div className={styles.grid}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Image
                src={product.image}
                alt={product.name}
                className={styles.imageProduct}
                width={300} // Set an appropriate width
                height={300} // Set an appropriate height
                unoptimized
              />
              <div className={styles.cardOverlay}>
                <h3>{product.name}</h3>
                <button>
                  View <FiArrowRight className={styles.IconArrow2} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          className={styles.downloadBtn}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore <FiArrowRight className={styles.IconArrow} />
        </motion.button>
      </div>
    </section>
  );
}
