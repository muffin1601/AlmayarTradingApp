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
          </div>

          <div className={styles.visionCard}>
            <h3 className={styles.visionSubheading}>Our Vision</h3>
            <p className={styles.visionText}>
              To be a global leader recognized for innovation, integrity, and
              sustainable business practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
