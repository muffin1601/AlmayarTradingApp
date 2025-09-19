"use client";

import Image from "next/image";
import styles from "./styles/Team.module.css";

export default function Team() {
  const teamMembers = [
    { name: "Alice Johnson", role: "CEO", img: "/images/team1.jpg" },
    { name: "Mark Lee", role: "CTO", img: "/images/team2.jpg" },
    { name: "Sophia Davis", role: "Designer", img: "/images/team3.jpg" },
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContainer}>
        <h2 className={styles.teamHeading}>Meet Our Team</h2>

        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className={styles.teamImg}
              />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamRole}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
