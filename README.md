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
- `public/brand/` — נכסי המותג. אין לשנות או לצייר מחדש. הלוגו PNG הוא תחליף זמני ל־SVG המקורי.
- `src/app/icon.png` — favicon: האיור הבוטני כפי שנשלח, ללא שינוי (מחובר אוטומטית ע"י Next.js).
- `src/lib/contact.ts` — יעד שליחת הטופס (כרגע לא מחובר; הטופס נעול עד שיוגדר).

## מותג

ראו `docs/BRAND.md` — פונט הלוגו (Clicker Script, לתיעוד בלבד, **לא** פונט האתר), נכס הלוגו הזמני, הפאביקון וה־TBD העיצוביים. טיפוגרפיית האתר זמנית ומוגדרת ב־`src/styles/fonts.ts`.

## TODO פתוחים

- פלטת צבעים סופית — להזין ב־`tokens.css` בלבד.
- screenshots אמיתיים ב־`src/content/projects.ts` (`screenshots` ריק בכוונה; לא ממציאים מסכים).
- טקסטים: רק הסלוגן מאושר. שאר הטקסטים טיוטה (`copyStatus: "draft"` בפרויקטים, הערה ב־`site.ts`).
- יעד לטופס הפנייה: לממש `deliver` ו־`isContactConfigured` ב־`src/lib/contact.ts` כשתשתית המיילים תהיה מוכנה.
