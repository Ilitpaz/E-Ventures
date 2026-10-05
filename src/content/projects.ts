export type ProjectStatus = "live" | "in-progress" | "placeholder";

export interface Screenshot {
  /** Path under /public, or null while the screenshot is still a placeholder. */
  image: string | null;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  audience: string;
  problem: string;
  solution: string;
  /** TODO: live URL not provided yet — the link is hidden while null. */
  websiteUrl: string | null;
  contact?: { email?: string; phone?: string };
  featured: boolean;
  displayOrder: number;
  status: ProjectStatus;
  tags: string[];
  screenshots: Screenshot[];
}

const placeholderShots = (titles: [string, string][]): Screenshot[] =>
  titles.map(([title, description]) => ({ image: null, title, description }));

export const projects: Project[] = [
  {
    slug: "atnachta-studio",
    title: "סטודיו אתנחתא",
    shortDescription:
      "מערכת שנבנתה סביב עסק פעיל, ומחברת בין מה שהלקוחה רואה לבין מה שהעסק צריך לנהל מאחורי הקלעים.",
    longDescription:
      "אתר ציבורי ומערכת ניהול פנימית לעסק יחיד: שיווק ומכירה, הרשמות לסדנאות ולחוגים, ניהול לקוחות, תשלומים, תקשורת ותהליכים תפעוליים.",
    audience: "לקוחות הסטודיו שמחפשים סדנאות וחוגים, ובעלת העסק שמנהלת את הפעילות.",
    problem: "עסק פעיל שהיה צריך לחבר בין הפנייה והרישום של הלקוחה לבין העבודה התפעולית היומיומית.",
    solution:
      "אתר ציבורי ומערכת ניהול פנימית שעובדים יחד: הרשמות, לקוחות, תשלומים ותקשורת במקום אחד.",
    websiteUrl: null,
    featured: true,
    displayOrder: 1,
    status: "placeholder",
    tags: ["אתר ציבורי", "ניהול פנימי", "הרשמות", "תשלומים"],
    screenshots: placeholderShots([
      ["עמוד הבית", "הכניסה לסטודיו: מה מציעים ואיך מתחילים."],
      ["סדנאות וחוגים", "הלקוחה רואה מה קיים ובוחרת איך להצטרף."],
      ["הרשמה ותשלום", "תהליך הרשמה שמסתיים בתשלום, בלי לצאת מהאתר."],
      ["ניהול לקוחות", "בעלת העסק רואה מי נרשם, ולמה."],
      ["תקשורת ותפעול", "הודעות ותהליכים תפעוליים מנוהלים מאותה מערכת."],
    ]),
  },
  {
    slug: "e-team",
    title: "E-Team",
    shortDescription:
      "מערכת ניהול ארגונית שמחברת צוותים פנימיים וספקים חיצוניים.",
    longDescription:
      "מערכת רב־משתמשים לארגונים ולקוחות קצה: פרויקטים ומשימות, ספקים, בקשות והצעות מחיר, תקציבים ותהליכי עבודה בין גורמים שונים.",
    audience: "ארגונים, הצוותים הפנימיים שלהם, לקוחות הקצה והספקים החיצוניים.",
    problem: "עבודה בין כמה גורמים שונים — צוות, ספקים ולקוחות — בלי מקום אחד שמחבר ביניהם.",
    solution: "מערכת אחת שבה כל גורם רואה את החלק שלו בתהליך: משימות, בקשות, הצעות מחיר ותקציבים.",
    websiteUrl: null,
    featured: false,
    displayOrder: 2,
    status: "placeholder",
    tags: ["רב־משתמשים", "פרויקטים", "ספקים", "תקציבים"],
    screenshots: placeholderShots([
      ["פרויקטים ומשימות", "תמונה אחת של מה קורה ומי אחראי על מה."],
      ["בקשות והצעות מחיר", "בקשה נשלחת לספקים וההצעות חוזרות לאותו מקום."],
      ["תקציבים", "מעקב אחר התקציב לאורך הפרויקט."],
    ]),
  },
  {
    slug: "kalab",
    title: "קל״ב",
    shortDescription:
      "פלטפורמה ציבורית שמשרתת מצד אחד את הציבור ומצד שני את העסקים שמוצגים בה.",
    longDescription:
      "פלטפורמה לחיפוש וגילוי עסקים בתחום התיירות והפנאי, שמחברת בין קהל פרטי רחב לבין העסקים, ומשמשת גם כפלטפורמה פרסומית עבורם.",
    audience: "הציבור הרחב שמחפש עסקי תיירות ופנאי, והעסקים שרוצים להיות מוצגים.",
    problem: "קשה למצוא עסקי תיירות ופנאי במקום אחד, וקשה לעסקים להגיע לקהל הנכון.",
    solution: "פלטפורמה עם חיפוש וגילוי למשתמשים, ומקום תצוגה פרסומי לעסקים.",
    websiteUrl: null,
    featured: false,
    displayOrder: 3,
    status: "placeholder",
    tags: ["חיפוש וגילוי", "תיירות ופנאי", "פלטפורמה פרסומית"],
    screenshots: placeholderShots([
      ["חיפוש וגילוי", "המשתמש מוצא עסקים לפי מה שמעניין אותו."],
      ["עמוד עסק", "העסק מציג את עצמו מול הקהל."],
    ]),
  },
];

export const getProjects = () => [...projects].sort((a, b) => a.displayOrder - b.displayOrder);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
