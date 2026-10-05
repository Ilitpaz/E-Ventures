import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container section narrow" style={{ textAlign: "center" }}>
      <h1 className="h-section">העמוד לא נמצא</h1>
      <p className="lead">אולי הקישור השתנה. אפשר לחזור לדף הבית.</p>
      <Link href="/" className="btn btn--solid">לדף הבית</Link>
    </section>
  );
}
