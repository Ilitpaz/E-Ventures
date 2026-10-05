"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type State = "idle" | "sending" | "sent" | "error";

/** `enabled` comes from src/lib/contact.ts. While no destination exists the form cannot be submitted. */
export function ContactForm({ enabled }: { enabled: boolean }) {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!enabled) return;
    setState("sending");
    try {
      const body = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return <p role="status" className="lead">תודה, קיבלתי את הפנייה.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.fieldset} disabled={!enabled || state === "sending"}>
        <label>שם
          <input name="name" required autoComplete="name" />
        </label>
        <div className={styles.pair}>
          <label>טלפון
            <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
          </label>
          <label>אימייל
            <input name="email" type="email" required autoComplete="email" dir="ltr" />
          </label>
        </div>
        <label>מה תרצו לבנות?
          <select name="kind" required defaultValue="">
            <option value="" disabled>בחרו</option>
            <option value="landing">דף נחיתה חדש</option>
            <option value="brand-site">אתר תדמית חדש</option>
            <option value="custom">אתר מותאם לצורך עסקי</option>
          </select>
        </label>
        <label>תיאור חופשי
          <textarea name="details" rows={4} />
        </label>
        <label>האם כבר קיים עסק / מותג / אתר?
          <select name="existing" defaultValue="">
            <option value="" disabled>בחרו</option>
            <option value="business">יש עסק</option>
            <option value="brand">יש עסק ומותג</option>
            <option value="site">יש כבר אתר</option>
            <option value="none">עדיין לא</option>
          </select>
        </label>
        <label>כתובת האתר הקיים (לא חובה)
          <input name="url" type="url" dir="ltr" placeholder="https://" />
        </label>
        <input name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className={styles.hp} />
        <button type="submit" className="btn btn--solid">{enabled ? "שליחה" : "הטופס ייפתח בקרוב"}</button>
      </fieldset>
      {state === "error" && (
        <p role="alert" className={styles.notice}>לא הצלחנו לשלוח כרגע. נסו שוב מאוחר יותר.</p>
      )}
    </form>
  );
}
