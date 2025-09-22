"use client";

import { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./styles/products.module.css";

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
  imageUrl: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Safe client-side check for #__next
  useEffect(() => {
    const appEl = document.getElementById("__next");
    if (appEl) {
      Modal.setAppElement(appEl);
    }
  }, []);

  // Fetch products from backend
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

  if (loading) return <p>Loading products...</p>;

  return (
    <div className={styles.container}>
      
      <div className={styles.grid}>
        {products.map((product) => (
          <div
            key={product._id}
            className={styles.card}
            onClick={() => openModal(product)}
          >
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.modal}
          overlayClassName={styles.overlay}
        >
          <button onClick={closeModal} className={styles.closeBtn}>
            &times;
          </button>
          <h2>{selectedProduct.name}</h2>
          <img
            src={selectedProduct.imageUrl}
            alt={selectedProduct.name}
            className={styles.modalImage}
          />
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
          <button className={styles.addToCart}>Add to Cart</button>
        </Modal>
      )}
    </div>
  );
}
