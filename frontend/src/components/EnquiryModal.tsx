"use client";
import styles from "../styles/EnquiryModal.module.css";
import { FiArrowRight } from "react-icons/fi";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        
        <div className={styles.modalTop}>
        <h2 className={styles.modalTitle}>Enquiry Form</h2>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone" required />
          <textarea placeholder="Message" rows={4} required />
          <button type="submit" className={styles.submitBtn}>
            Enquire Now <FiArrowRight className={styles.ctaIcon3} />
          </button>
        </form>
      </div>
    </div>
  );
}
