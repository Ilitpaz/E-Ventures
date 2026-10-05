import { about } from "@/content/site";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className="section section--soft">
      <div className="container">
        <p className="eyebrow">אודות</p>
        <h2 className="h-section">{about.title}</h2>
        <div className="narrow">
          {about.paragraphs.map((p) => <p key={p} className="lead">{p}</p>)}
        </div>
        <ol className={styles.steps}>
          {about.steps.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.num}>{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
