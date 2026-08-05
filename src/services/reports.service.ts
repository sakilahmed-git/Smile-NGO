import { reports } from "@/config/content";
import { listPublicFiles } from "@/lib/local-assets";

export async function getReports() {
  const files = listPublicFiles("reports");
  return reports.map((report) => ({
    ...report,
    href: `/reports/${report.fileName}`,
    fileExists: files.includes(`/reports/${report.fileName}`),
  }));
}
