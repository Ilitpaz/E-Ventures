import { services } from "@/content/site";
import styles from "./About.module.css";

export function ServicesSection() {
  return (
    <section id="services" className="section section--soft">
      <div className="container">
        <p className="eyebrow">שירותים</p>
        <h2 className="h-section">{services.title}</h2>
        <p className="lead narrow">{services.intro}</p>
        <ul className={styles.steps}>
          {services.items.map((s) => (
            <li key={s.title} className={styles.step}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
