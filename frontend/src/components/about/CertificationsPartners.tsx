"use client";

import React from "react";
import styles from "./styles/CertificationsPartners.module.css";

interface Certification {
  name: string;
  description: string;
  image: string;
}

interface Partner {
  name: string;
  logo: string;
  website: string;
}

const certifications: Certification[] = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management Systems",
    image: "https://images.pexels.com/photos/8112168/pexels-photo-8112168.jpeg",
  },
  {
    name: "UAE General Trading License",
    description: "Licensed for diverse trade activities in the UAE",
    image: "https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg",
  },
  {
    name: "Fair Trade Certified",
    description: "Ensuring ethical sourcing and fair labor practices",
    image: "https://images.pexels.com/photos/8111863/pexels-photo-8111863.jpeg",
  },
];

const partners: Partner[] = [
  {
    name: "Global Trade Corp",
    logo: "https://www.globaltradecorp.com/wp-content/uploads/2023/11/GTC-A-Komgo-Company-logo-2-e1699032727292.png",
    website: "https://globaltradecorp.com",
  },
  {
    name: "EcoSourcing Ltd.",
    logo: "https://www.globaltradecorp.com/wp-content/uploads/2023/11/GTC-A-Komgo-Company-logo-2-e1699032727292.png",
    website: "https://ecosourcing.com",
  },
  {
    name: "LogiShip Solutions",
    logo: "https://www.globaltradecorp.com/wp-content/uploads/2023/11/GTC-A-Komgo-Company-logo-2-e1699032727292.png",
    website: "https://logishipsolutions.com",
  },
];

const CertificationsPartners: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Certifications */}
        <div className={styles.certifications}>
          <h2 className={styles.heading}>Our Certifications</h2>
          <div className={styles.grid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.card}>
                <img src={cert.image} alt={cert.name} className={styles.logo} />
                <h3 className={styles.name}>{cert.name}</h3>
                <p className={styles.description}>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className={styles.partners}>
          <h2 className={styles.heading}>Our Trusted Partners</h2>
          <div className={styles.grid}>
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partnerCard}
              >
                <img src={partner.logo} alt={partner.name} className={styles.partnerLogo} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsPartners;
