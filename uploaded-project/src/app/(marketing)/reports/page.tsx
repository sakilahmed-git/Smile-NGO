import { reports } from "@/config/content";
import { listPublicFiles } from "@/lib/local-assets";

export default function ReportsPage() {
  const localReportFiles = listPublicFiles("reports");

  return (
    <main className="page-shell">
      <section className="section-hero">
        <p className="eyebrow">Reports</p>
        <h1>Public documents loaded from the project.</h1>
        <p>Place PDFs and policy documents in /public/reports/. Firestore stores metadata only.</p>
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {reports.map((report) => {
          const href = `/reports/${report.fileName}`;
          const exists = localReportFiles.includes(href);
          return (
            <article className="soft-card" key={report.title}>
              <p className="eyebrow">{exists ? "Available" : "Awaiting file"}</p>
              <h2 className="mt-2 text-xl font-semibold">{report.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{report.meta}</p>
              <a className="text-link" href={href}>
                Open report
              </a>
            </article>
          );
        })}
      </section>
    </main>
  );
}
