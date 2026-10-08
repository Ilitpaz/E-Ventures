import { isContactConfigured } from "@/lib/contact";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">יצירת קשר</p>
        <h2 className="h-section">יש צורך שעדיין אין לו פתרון טוב?</h2>
        <p className="lead narrow">לא צריך להגיע עם אפיון. מספיק לדעת מה מסורבל, חסר או צריך לעבוד אחרת — ומשם אפשר להתחיל.</p>
        <ContactForm enabled={isContactConfigured()} />
      </div>
    </section>
  );
}
