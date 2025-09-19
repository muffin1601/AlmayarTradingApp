"use client";

import Image from "next/image";
import styles from "./styles/CertificationsPartners.module.css";

export default function CertificationsPartners() {
  const partners = [
    { name: "ISO Certified", logo: "/images/iso.png" },
    { name: "Microsoft Partner", logo: "/images/ms-partner.png" },
    { name: "AWS Partner", logo: "/images/aws.png" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.certtitle}>Certifications & Partners</h2>
        <div className={styles.grid}>
          {partners.map((partner, index) => (
            <div key={index} className={styles.card}>
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className={styles.img}
              />
              <p className={styles.passage}>{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
