"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

/**
 * TODO: no approved destination (email / API / CRM) exists yet.
 * Until one is chosen, submit validates and tells the user honestly that nothing was sent.
 * Wire the destination inside `handleSubmit`.
 */
export function ContactForm() {
  const [notice, setNotice] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotice(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
          <option value="unsure">עוד לא בטוחים</option>
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
      <button type="submit" className="btn btn--solid">שליחה</button>
      {notice && (
        <p role="status" className={styles.notice}>
          הטופס עדיין לא מחובר ליעד, ולכן הפנייה לא נשלחה. אפשר לחזור לכאן בקרוב.
        </p>
      )}
    </form>
  );
}
