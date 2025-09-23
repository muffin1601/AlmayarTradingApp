"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import Image from "next/image";
import styles from "./styles/products.module.css";
import { FiArrowRight } from "react-icons/fi";

type Product = {
  _id: string;
  name: string;
  origin: string;
  loadingPort: string;
  quantity: string;
  paymentTerms: string;
  specifications: string;
  packaging: string;
  deliveryTerms: string;
  shelfLife: string;
  certifications: string;
  otherConditions: string;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Set Modal root element after client hydration
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appEl = document.getElementById("__next");
      if (appEl) {
        Modal.setAppElement(appEl);
      }
    }
  }, []);

  // Fetch products
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  if (loading) {
    return (
      <div className={styles.loaderWrapper}>
        <div className={styles.loader}></div>
        <p className={styles.loaderText}>Fetching products...</p>
      </div>
    );
  }

  return (
    <div className={styles.productSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {products.map((product) => (
            <div
              key={product._id}
              className={styles.card}
              onClick={() => openModal(product)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className={styles.imageProduct}
                  unoptimized
                />
              </div>
              <div className={styles.cardOverlay}>
                <h3>{product.name}</h3>
                <button>
                  View <FiArrowRight className={styles.IconArrow2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
          ariaHideApp={false} // fallback for SSR
        >
          <div className={styles.modalContent}>
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.name}
                fill
                
                className={styles.modalImage}
                unoptimized
              />
            </div>
            <div className={styles.modalDetails}>
              <div className={styles.modalTop}>
                <h2 className={styles.modalTitle}>{selectedProduct.name}</h2>
                <button onClick={closeModal} className={styles.closeBtn}>
                  ✕
                </button>
              </div>
              <p><strong>Origin:</strong> {selectedProduct.origin}</p>
              <p><strong>Loading Port:</strong> {selectedProduct.loadingPort}</p>
              <p><strong>Quantity:</strong> {selectedProduct.quantity}</p>
              <p><strong>Payment Terms:</strong> {selectedProduct.paymentTerms}</p>
              <p><strong>Specifications:</strong> {selectedProduct.specifications}</p>
              <p><strong>Packaging:</strong> {selectedProduct.packaging}</p>
              <p><strong>Delivery Terms:</strong> {selectedProduct.deliveryTerms}</p>
              <p><strong>Shelf Life:</strong> {selectedProduct.shelfLife}</p>
              <p><strong>Certifications:</strong> {selectedProduct.certifications}</p>
              <p><strong>Other Conditions:</strong> {selectedProduct.otherConditions}</p>
              <button className={styles.submitBtn}>
                Add to Cart <FiArrowRight className={styles.ctaIcon3} />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
