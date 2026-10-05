import type { Metadata, Viewport } from "next";
import { site } from "@/content/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { fontClassName } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.slogan}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    siteName: site.name,
    title: `${site.name} — ${site.slogan}`,
    description: site.description,
    url: "/",
    images: [{ url: "/brand/e-ventures-logo.png", width: 3250, height: 1300, alt: site.name }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} — ${site.slogan}`, description: site.description },
  // Favicon: src/app/icon.png (botanical illustration, unmodified file supplied by the owner) is picked up automatically by Next.js.
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={fontClassName}>
      <body>
        <a href="#main" className="skip-link">דילוג לתוכן</a>
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
