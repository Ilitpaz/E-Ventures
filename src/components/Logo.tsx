import Image from "next/image";
import styles from "./Logo.module.css";

/** Official E-Ventures logo (white background). Displayed as-is; only cropped visually via CSS. */
export function Logo({ size = "md", priority = false }: { size?: "md" | "lg"; priority?: boolean }) {
  return (
    <span className={`${styles.frame} ${styles[size]}`}>
      <Image
        src="/brand/e-ventures-logo.png"
        alt="E-Ventures"
        width={3250}
        height={1300}
        priority={priority}
        sizes="(max-width: 48rem) 88vw, 544px"
        className={styles.img}
      />
    </span>
  );
}
