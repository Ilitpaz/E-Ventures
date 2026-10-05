import Image from "next/image";
import styles from "./Logo.module.css";

/** Official E-Ventures logo (white background). Displayed as-is; only cropped visually via CSS. */
export function Logo({ size = "md", priority = false }: { size?: "md" | "lg"; priority?: boolean }) {
  return (
    <span className={`${styles.frame} ${styles[size]}`}>
      <Image
        src="/brand/e-ventures-logo-white.svg"
        alt="E-Ventures"
        width={1500}
        height={600}
        priority={priority}
        unoptimized
        className={styles.img}
      />
    </span>
  );
}
