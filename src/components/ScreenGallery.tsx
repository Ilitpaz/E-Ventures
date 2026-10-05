"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Screenshot } from "@/content/projects";
import styles from "./ScreenGallery.module.css";

export function ScreenGallery({ screens }: { screens: Screenshot[] }) {
  const track = useRef<HTMLDivElement>(null);

  // Page is RTL: "next" scrolls toward negative scrollLeft.
  function scroll(dir: 1 | -1) {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: -dir * el.clientWidth * 0.8, behavior: "smooth" });
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.arrows}>
        <button type="button" onClick={() => scroll(-1)} aria-label="מסך קודם">→</button>
        <button type="button" onClick={() => scroll(1)} aria-label="מסך הבא">←</button>
      </div>
      <div ref={track} className={styles.track} tabIndex={0} role="region" aria-label="גלריית מסכים">
        {screens.map((s, i) => (
          <figure key={s.title} className={styles.item}>
            <div className={styles.frame}>
              {s.image ? (
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 48rem) 80vw, 640px" />
              ) : (
                <span className={styles.placeholder}>תמונת מסך — placeholder</span>
              )}
            </div>
            <figcaption>
              <span className={styles.n}>{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
