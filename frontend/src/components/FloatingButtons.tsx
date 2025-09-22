"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import styles from "../styles/FloatingButtons.module.css";
import EnquiryModal from "./EnquiryModal";

export default function FloatingButtons() {
    const [showScroll, setShowScroll] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) setShowScroll(true);
            else setShowScroll(false);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
           
            {showScroll && (
                <button
                    onClick={scrollToTop}
                    className={`${styles.floatingBtn} ${styles.scrollTopBtn}`}
                    aria-label="Scroll to top"
                >
                    
                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M10 15V5M10 5L5 10M10 5l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            )}

            <div className={styles.floatingRight}>
                <a
                    href="https://wa.me/919999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.floatingBtn} ${styles.whatsappBtn}`}
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp size={22} />
                </a>

                <button
                    onClick={() => setIsModalOpen(true)}
                    className={`${styles.floatingBtn} ${styles.enquiryBtn}`}
                    aria-label="Enquiry"
                >
                    <FiMail size={22} />
                </button>
            </div>
            <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
