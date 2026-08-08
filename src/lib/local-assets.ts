import fs from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.join(process.cwd(), "public");
const IMAGE_EXTENSIONS = new Set([".avif", ".webp", ".jpg", ".jpeg", ".png", ".svg"]);

export type LocalGalleryAlbum = {
  title: string;
  description: string;
  folderName: string;
  location: string;
  date: string;
  published: boolean;
};

export const galleryAlbums: LocalGalleryAlbum[] = [
  {
    title: "Our Work in Action",
    description:
      "A glimpse into SMILE NGO's work across Gossaigaon — from community support and relief initiatives to student recognition, local events, sponsorships, and programmes that help people in need.",
    folderName: "community",
    location: "Gossaigaon, Assam",
    date: "2026-08-01",
    published: true,
  },
];
export function listPublicImages(folder: string) {
  const normalized = folder.replace(/^\/+/, "");
  const absoluteFolder = path.join(PUBLIC_DIR, normalized);

  if (!absoluteFolder.startsWith(PUBLIC_DIR) || !fs.existsSync(absoluteFolder)) {
    return [];
  }

  return fs
    .readdirSync(absoluteFolder, { withFileTypes: true })
    .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => `/${normalized.replaceAll("\\", "/")}/${entry.name}`)
    .sort();
}

export function listPublicFiles(folder: string) {
  const normalized = folder.replace(/^\/+/, "");
  const absoluteFolder = path.join(PUBLIC_DIR, normalized);

  if (!absoluteFolder.startsWith(PUBLIC_DIR) || !fs.existsSync(absoluteFolder)) {
    return [];
  }

  return fs
    .readdirSync(absoluteFolder, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => `/${normalized.replaceAll("\\", "/")}/${entry.name}`)
    .sort();
}

export function getGalleryImages(folderName: string) {
  return listPublicImages(`gallery/${folderName}`);
}

export function getFirstPublicImage(folder: string, fallback = "/backgrounds/empty-image.svg") {
  return listPublicImages(folder)[0] ?? fallback;
}
