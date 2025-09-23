
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/Footer.module.css";
import Link from "next/link"; // Import the Link component

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        
        <div className={styles.column}>
          <Image
            src="/logo-footer.png"
            alt="Al Mayaar Logo"
            width={160}
            height={160}
          />
          <p>
            Al Mayaar is a leading global import and export company, committed to bridging
            markets and delivering quality products worldwide.
          </p>
        </div>

      
        <div className={styles.column}>
          <h3>Contact Us</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +91 9877777777</p>
          <p>Address: 123 Corporate Park, Delhi, India</p>
        </div>

       
        <div className={styles.column}>
          <h3>Sitemap</h3>
          <ul>
            
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
       
        <div className={styles.column}>
          <h3>Follow Us</h3>
          <div className={styles.social}>
            
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Al Mayaar. All Rights Reserved.</p>
      </div>
    </footer>
  );
}