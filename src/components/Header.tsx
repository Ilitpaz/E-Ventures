import Link from "next/link";
import { Logo } from "./Logo";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.row}`}>
        <Link href="/" aria-label="E-Ventures — דף הבית">
          <Logo />
        </Link>
        <nav className={styles.nav} aria-label="ראשי">
          <Link href="/#about">אודות</Link>
          <Link href="/#projects">מיזמים</Link>
          <Link href="/#services">שירותים</Link>
          <Link href="/#contact">יצירת קשר</Link>
        </nav>
      </div>
    </header>
  );
}
