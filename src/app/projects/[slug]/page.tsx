import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/content/projects";
import { site } from "@/content/site";
import { ScreenGallery } from "@/components/ScreenGallery";
import styles from "./page.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const path = `/projects/${project.slug}`;
  const title = `${project.title} | ${site.name}`;
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: path },
    // Page-level openGraph replaces the root one entirely, so shared fields are repeated here.
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
      title,
      description: project.shortDescription,
      url: path,
      images: [{ url: "/brand/e-ventures-logo.png", width: 3250, height: 1300, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description: project.shortDescription },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  // Only real screenshots are shown; with none, the whole gallery section is hidden.
  const screens = project.screenshots.filter((s) => s.image);

  const blocks = [
    ["מה היה הצורך", project.problem],
    ["מה רצינו לפתור", project.longDescription],
    ["מה נבנה", project.solution],
    ["למי המוצר מיועד", project.audience],
  ];

  return (
    <article>
      <header className="container section" style={{ paddingBottom: "var(--space-6)" }}>
        <Link href="/#projects" className={styles.back}>→ כל המיזמים</Link>
        <h1 className={styles.title}>{project.title}</h1>
        <p className="lead narrow">{project.shortDescription}</p>
        {project.websiteUrl && (
          <a className="btn" href={project.websiteUrl} target="_blank" rel="noopener noreferrer">לאתר החי</a>
        )}
      </header>

      <div className="container">
        <dl className={styles.blocks}>
          {blocks.map(([t, d]) => (
            <div key={t}>
              <dt>{t}</dt>
              <dd>{d}</dd>
            </div>
          ))}
        </dl>
      </div>

      {screens.length > 0 && (
      <section className="section" aria-labelledby="screens">
        <div className="container">
          <h2 id="screens" className="h-section">המסכים</h2>
        </div>
        <ScreenGallery screens={screens} />
      </section>
      )}
    </article>
  );
}
