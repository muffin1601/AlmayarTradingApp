"use client";

import Image from "next/image";
import styles from "./styles/Team.module.css";

export default function Team() {
 const teamMembers = [
  { 
    name: "Alice Johnson", 
    role: "CEO", 
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    description: "Oversees global trade operations and strategic partnerships across multiple markets."
  },
  { 
    name: "Mark Lee", 
    role: "CTO", 
    img: "https://images.pexels.com/photos/32976/pexels-photo.jpg",
    description: "Leads technology and logistics solutions to streamline international trading processes."
  },
  { 
    name: "Sophia Davis", 
    role: "Trade Analyst", 
    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg",
    description: "Analyzes market trends and helps identify profitable trading opportunities worldwide."
  },
  { 
    name: "Robert Berry", 
    role: "Operations Manager", 
    img: "https://images.pexels.com/photos/32976/pexels-photo.jpg",
    description: "Manages supply chain, shipments, and coordination with international clients and vendors."
  },
];


  return (
    <section className={styles.teamSection}>
      <div className={styles.teamContainer}>
        <h2 className={styles.teamHeading}>Meet Our Trade Experts</h2>
<p className={styles.teamSubheading}>
  Our team of professionals manages sourcing, logistics, and international partnerships to bring quality goods to markets worldwide. With expertise across multiple industries, they ensure seamless trading operations from start to finish.
</p>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={300}
                  className={styles.teamImg}
                  unoptimized
                />
                <div className={styles.overlay}>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
