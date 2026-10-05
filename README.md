# E-Ventures

אתר תדמית/פורטפוליו של E-Ventures — *מצורך, לרעיון, לפתרון דיגיטלי.*

Next.js (App Router) + TypeScript. ללא DB, ללא Auth, ללא CMS.

## פיתוח

```bash
npm install
npm run dev        # פיתוח
npm run lint
npm run typecheck
npm run build      # production build
```

## מבנה

- `src/content/` — כל התוכן (פרויקטים, אודות, שירותים). אין תוכן מקודד ב־JSX; ניתן לחבר בעתיד CMS/Admin מאחורי אותו מודל.
- `src/components/` — רכיבי UI.
- `src/styles/tokens.css` — design tokens (צבעים, טיפוגרפיה, ריווח, רדיוסים). מקור אמת יחיד.
- `public/brand/` — נכסי המותג. אין לשנות או לצייר מחדש.
- `src/app/icon.svg` — favicon ניטרלי וזמני (לא הפאביקון הרשמי). להחליף בקובץ הרשמי.
- `src/lib/contact.ts` — יעד שליחת הטופס (כרגע לא מחובר; הטופס נעול עד שיוגדר).

## TODO פתוחים

- פלטת צבעים סופית — להזין ב־`tokens.css` בלבד.
- favicon רשמי — להחליף את `src/app/icon.svg`. הלוגו הנוכחי הוא `e-ventures-logo.png` (רקע לבן).
- screenshots אמיתיים ב־`src/content/projects.ts` (`screenshots` ריק בכוונה; לא ממציאים מסכים).
- טקסטים: רק הסלוגן מאושר. שאר הטקסטים טיוטה (`copyStatus: "draft"` בפרויקטים, הערה ב־`site.ts`).
- יעד לטופס הפנייה: לממש `deliver` ו־`isContactConfigured` ב־`src/lib/contact.ts` כשתשתית המיילים תהיה מוכנה.
