"use client";

import styles from "./styles/MissionVision.module.css";

export default function MissionVision() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.missionContainer}>
        

        <div className={styles.missionGrid}>
          <div className={styles.missionCard}>
            <h3 className={styles.missionSubheading}>Our Mission</h3>
            <p className={styles.missionText}>
              To provide world-class products and services that empower our
              clients to achieve their goals and make a positive impact in their
              industries.
            </p>
            <p className={styles.missionText}>
              
              We are committed to delivering innovative solutions, fostering strong relationships,
              and upholding the highest standards of quality and integrity in everything we do.
              Our mission is to drive growth, inspire trust, and contribute to the success of our
              partners, employees, and the communities we serve.
            </p>
            
            <p className={styles.missionText}>

              We are committed to delivering innovative solutions, fostering strong relationships,
              and upholding the highest standards of quality and integrity in everything we do.
              Our mission is to drive growth, inspire trust, and contribute to the success of our
              partners, employees, and the communities we serve.
            </p>
          </div>

          <div className={styles.visionCard}>
            <h3 className={styles.visionSubheading}>Our Vision</h3>
            <p className={styles.visionText}>
              To be a global leader recognized for innovation, integrity, and
              sustainable business practices. We strive to inspire progress and
              set new standards in our industry by fostering a culture of
              excellence, collaboration, and continuous improvement. Our vision
              is to create lasting value for our customers, employees, and
              communities, while driving positive change and shaping a better
              future for all.
            </p>

             <p className={styles.visionText}>
              To be a global leader recognized for innovation, integrity, and
              sustainable business practices. We strive to inspire progress and
              set new standards in our industry by fostering a culture of
              excellence, collaboration, and continuous improvement. Our vision
              is to create lasting value for our customers, employees, and
              communities, while driving positive change and shaping a better
              future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
