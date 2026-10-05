export type ProjectStatus = "live" | "in-progress";

/** "approved" = confirmed by the owner; "draft" = working copy awaiting approval. */
export type CopyStatus = "approved" | "draft";

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
  websiteUrl: string | null;
  contact?: { email?: string; phone?: string };
  featured: boolean;
  displayOrder: number;
  status: ProjectStatus;
  /** Status of the descriptive copy below (problem / solution / longDescription). */
  copyStatus: CopyStatus;
  /** Empty until real screenshots (with known source) are provided — never invent screens. */
  tags: string[];
  screenshots: Screenshot[];
}

export const projects: Project[] = [
  {
    slug: "atnachta-studio",
    title: "סטודיו אתנחתא",
    shortDescription:
      "מערכת שנבנתה סביב עסק פעיל, ומחברת בין מה שהלקוחה רואה לבין מה שהעסק צריך לנהל מאחורי הקלעים.",
    longDescription:
      "אתר ציבורי ומערכת ניהול פנימית לעסק יחיד: שיווק ומכירה, הרשמות לסדנאות ולחוגים, ניהול לקוחות, תשלומים, תקשורת ותהליכים תפעוליים.",
    audience: "לקוחות הסטודיו ובעלת העסק שמנהלת אותו.",
    problem: "עסק פעיל שמנהל שיווק ומכירה, הרשמות, לקוחות, תשלומים ותקשורת — ושצריך לחבר בין מה שהלקוחה רואה לבין מה שקורה מאחורי הקלעים.",
    solution:
      "אתר ציבורי יחד עם מערכת ניהול פנימית, שנבנו סביב העסק הפעיל.",
    websiteUrl: "https://www.studio-atnachta.co.il",
    featured: true,
    displayOrder: 1,
    status: "live",
    copyStatus: "draft",
    tags: ["אתר ציבורי", "ניהול פנימי", "הרשמות", "תשלומים"],
    screenshots: [],
  },
  {
    slug: "e-team",
    title: "E-Team",
    shortDescription:
      "מערכת ניהול ארגונית שמחברת צוותים פנימיים וספקים חיצוניים.",
    longDescription:
      "מערכת רב־משתמשים לארגונים ולקוחות קצה: פרויקטים ומשימות, ספקים, בקשות והצעות מחיר, תקציבים ותהליכי עבודה בין גורמים שונים.",
    audience: "ארגונים, לקוחות הקצה שלהם, צוותים פנימיים וספקים.",
    problem: "ארגונים שעובדים מול צוותים פנימיים, ספקים חיצוניים ולקוחות קצה, ומנהלים פרויקטים, בקשות, הצעות מחיר ותקציבים.",
    solution: "מערכת ניהול רב־משתמשים שמחברת צוותים פנימיים וספקים חיצוניים.",
    websiteUrl: "https://e-team.co.il",
    featured: false,
    displayOrder: 2,
    status: "live",
    copyStatus: "draft",
    tags: ["רב־משתמשים", "פרויקטים", "ספקים", "תקציבים"],
    screenshots: [],
  },
  {
    slug: "kalab",
    title: "קל״ב",
    shortDescription:
      "פלטפורמה ציבורית שמשרתת מצד אחד את הציבור ומצד שני את העסקים שמוצגים בה.",
    longDescription:
      "פלטפורמה לחיפוש וגילוי עסקים בתחום התיירות והפנאי, שמחברת בין קהל פרטי רחב לבין העסקים, ומשמשת גם כפלטפורמה פרסומית עבורם.",
    audience: "קהל פרטי רחב, ועסקים מתחום התיירות והפנאי.",
    problem: "פלטפורמה אחת שצריכה לשרת גם קהל פרטי רחב שמחפש עסקים, וגם את העסקים שמוצגים בה.",
    solution: "פלטפורמה ציבורית עם חיפוש וגילוי, שמשמשת גם פלטפורמה פרסומית לעסקי תיירות ופנאי.",
    websiteUrl: "https://kalab.co.il",
    featured: false,
    displayOrder: 3,
    status: "live",
    copyStatus: "draft",
    tags: ["חיפוש וגילוי", "תיירות ופנאי", "פלטפורמה פרסומית"],
    screenshots: [],
  },
];

export const getProjects = () => [...projects].sort((a, b) => a.displayOrder - b.displayOrder);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
