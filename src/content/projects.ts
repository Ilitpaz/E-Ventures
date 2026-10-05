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
    screenshots: [
      {
            "image": "/screenshots/atnachta/atnachta-01-home.jpg",
            "title": "הסטודיו פוגש את הלקוחות גם בדיגיטל",
            "description": "האתר מציג את מגוון הפעילויות ומאפשר להגיע במהירות לחוויה המתאימה."
      },
      {
            "image": "/screenshots/atnachta/atnachta-02-workshop-page.jpg",
            "title": "מהרעיון לחוויה שאפשר להזמין",
            "description": "עמוד הפעילות מרכז את החוויה, למי היא מתאימה ומה צריך לדעת לפני ההרשמה."
      },
      {
            "image": "/screenshots/atnachta/atnachta-03-admin-lobby.jpg",
            "title": "מרכז השליטה של הסטודיו",
            "description": "מסך הכניסה לניהול מרכז את המידע והפעולות החשובות לעבודה היומיומית ומאפשר להגיע במהירות למה שדורש טיפול."
      },
      {
            "image": "/screenshots/atnachta/atnachta-04-admin-menu.jpg",
            "title": "מערכת אחת לעסק שלם",
            "description": "מבט בתפריט חושף את רוחב המערכת: פעילויות, לקוחות, חוגים, תקשורת, תוכן וכלי הניהול שנבנו סביב העבודה של הסטודיו."
      },
      {
            "image": "/screenshots/atnachta/atnachta-05-workshop-management.jpg",
            "title": "מההרשמה לניהול בפועל",
            "description": "ההרשמות מהאתר הופכות למידע תפעולי שמלווה את הסדנה ואת המשתתפים."
      },
{
      "image": "/screenshots/atnachta/atnachta-06-registration-flow.jpg",
      "title": "תהליך הזמנה שנבנה סביב הסטודיו",
      "description": "תהליך ההרשמה מחבר בין סוג הפעילות, זמינות המועדים וצרכי הסטודיו."
},
{
      "image": "/screenshots/atnachta/atnachta-07-classes.jpg",
      "title": "גם פעילות מתמשכת",
      "description": "המערכת תומכת גם בחוגים ובמפגשים חוזרים, ולא רק בסדנאות חד־פעמיות."
},
{
      "image": "/screenshots/atnachta/atnachta-08-messages.jpg",
      "title": "התקשורת היא חלק מהמערכת",
      "description": "עדכונים ותזכורות מנוהלים כחלק מתהליך העבודה ולא ככלי נפרד."
},
{
      "image": "/screenshots/atnachta/atnachta-09-organizations.jpg",
      "title": "גם העבודה מול ארגונים",
      "description": "המערכת תומכת בתהליך העסקי מפנייה והצעת מחיר ועד לניהול הפעילות שהוזמנה."
},
{
      "image": "/screenshots/atnachta/atnachta-10-work-tracking.jpg",
      "title": "התהליך ממשיך גם אחרי הסדנה",
      "description": "בעבודות קרמיקה המערכת ממשיכה לעקוב אחר העבודות גם לאחר שהמפגש הסתיים."
}
    ],
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
    screenshots: [
      {
        "image": "/screenshots/e-team/e-team-07-workspace.jpg",
        "title": "העבודה שייכת לארגון",
        "description": "מרחב הארגון מרכז חברים, תפקידים ופרויקטים משותפים, לצד מדיניות אישורים ארגונית."
      },
      {
        "image": "/screenshots/e-team/e-team-01-dashboard.jpg",
        "title": "תמונת מצב שמכוונת לפעולה",
        "description": "מסך העבודה מרכז אישורים ממתינים, פרויקטים בתנועה ומשימות קרובות של המשתמשת."
      },
      {
        "image": "/screenshots/e-team/e-team-02-project.jpg",
        "title": "פרויקט אחד, כל מרכיבי העבודה",
        "description": "סקירת הפרויקט מחברת בין משימות, ספקים, הצעות, אישורים ותקציב בתוך מרחב הארגון."
      },
      {
        "image": "/screenshots/e-team/e-team-03-tasks.jpg",
        "title": "ברור מי עושה מה ועד מתי",
        "description": "משימה בפרויקט מציגה אחריות, דדליין, סטטוס ופעולות להמשך הטיפול."
      },
      {
        "image": "/screenshots/e-team/e-team-04-suppliers.jpg",
        "title": "הספקים כחלק מהפרויקט",
        "description": "הדמו מציג את שיוך הספקים לפרויקט ואת מצב ההתקשרות איתם; אזור זה עדיין בהגדרה."
      },
      {
        "image": "/screenshots/e-team/e-team-05-quotes.jpg",
        "title": "השוואת הצעות על בסיס אותה בקשה",
        "description": "הדמו ממחיש השוואת מחירים ורכיבים, סימון חריגות והפרדת חלופות; אזור זה עדיין בהגדרה."
      },
      {
        "image": "/screenshots/e-team/e-team-06-budget.jpg",
        "title": "מהתקציב המתוכנן ועד לתשלום",
        "description": "הדמו ממחיש מעקב אחר הערכה, הצעה, אישור ותשלום לפי סעיף תקציבי; אזור זה עדיין בהגדרה."
      }
    ],
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
