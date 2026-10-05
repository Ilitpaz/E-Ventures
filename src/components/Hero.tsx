import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "./Logo";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <Logo size="lg" priority />
        <h1 className={styles.slogan}>{site.slogan}</h1>
        <p className={`lead ${styles.text}`}>{site.heroText}</p>
        <div className={styles.actions}>
          <Link href="/#projects" className="btn btn--solid">לצפייה במיזמים</Link>
          <Link href="/#contact" className="btn">יש לי רעיון לאתר</Link>
        </div>
      </div>
    </section>
  );
}
