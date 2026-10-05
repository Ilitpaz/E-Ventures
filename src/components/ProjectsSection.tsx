import Link from "next/link";
import { getProjects } from "@/content/projects";
import styles from "./ProjectsSection.module.css";

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">מיזמים</p>
        <h2 className="h-section">פתרונות שנבנו סביב צורך אמיתי</h2>
        <ul className={styles.list}>
          {getProjects().map((p) => (
            <li key={p.slug} className={`${styles.item} ${p.featured ? styles.featured : ""}`}>
              {p.featured && <span className={styles.badge}>פרויקט מרכזי</span>}
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.desc}>{p.shortDescription}</p>
              <ul className={styles.tags}>
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <Link href={`/projects/${p.slug}`} className={styles.more}>
                לסיפור הפרויקט ←
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
