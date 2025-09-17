import NavbarTop from "./NavbarTop";
import NavbarMain from "./NavbarMain";
import styles from "../styles/NavbarTop.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.header}></div>
      <NavbarTop />
      <NavbarMain />
    </header>
  );
}
