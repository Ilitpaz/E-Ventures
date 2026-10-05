import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <p className="eyebrow">יצירת קשר</p>
        <h2 className="h-section">יש לך רעיון לאתר?</h2>
        <p className="lead narrow">ספרו בקצרה מה צריך להיבנות, ונתחיל משם.</p>
        <ContactForm />
      </div>
    </section>
  );
}
