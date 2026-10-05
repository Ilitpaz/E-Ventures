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
- `src/app/icon.png` — favicon (מחובר אוטומטית ע"י Next.js).

## TODO פתוחים

- פלטת צבעים סופית — להזין ב־`tokens.css` בלבד.
- לוגו עם רקע שקוף וקובץ favicon רשמי — להחליף (`public/brand/`, `src/app/icon.png`).
- כתובות אתרים חיים (`websiteUrl`) ו־screenshots אמיתיים ב־`src/content/projects.ts`.
- יעד לטופס הפנייה (`src/components/ContactForm.tsx`) — כרגע הטופס לא שולח דבר ומציג זאת למשתמש.
