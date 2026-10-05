import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer style={{ borderTop: "var(--border-thin)", padding: "var(--space-6) 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-3)", fontSize: "var(--text-xs)", color: "var(--color-ink-faint)" }}>
        <span>© {new Date().getFullYear()} {site.name}</span>
        <Link href="/#contact">{site.slogan}</Link>
      </div>
    </footer>
  );
}
