"use client";

import { useEffect, useState } from "react";
import styles from "../styles/ProductDisplay.module.css";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

type Product = {
  _id: string;
  name: string;
  image: string;
};

export default function ProductDisplay() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        // Take only first 8 products
        setProducts(data.slice(0, 8));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className={styles.loaderText}>Loading products...</p>;
  }

  return (
    <section className={styles.productSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Products</h2>
        <p className={styles.subheading}>
          Hand-crafted and designer products, beautifully styled with an artistic presence,
          these lamps feature ceramic, wood, acrylic, glass, metals and other natural
          materials.
        </p>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product._id} className={styles.card}>
              <Image
                src={product.image}
                alt={product.name}
                className={styles.imageProduct}
                width={300}
                height={300}
                unoptimized
              />
              <div className={styles.cardOverlay}>
                <h3>{product.name}</h3>
                <button onClick={() => (window.location.href = "/products")}>
                  View More <FiArrowRight className={styles.IconArrow2} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => (window.location.href = "/products")}
          className={styles.downloadBtn}
        >
          Explore <FiArrowRight className={styles.IconArrow} />
        </button>
      </div>
    </section>
  );
}
