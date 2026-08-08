import { galleryAlbums, getGalleryImages } from "@/lib/local-assets";

export async function getGalleryAlbums() {
  return galleryAlbums;
}

export async function getGalleryAlbum(folderName: string) {
  const album = galleryAlbums.find((item) => item.folderName === folderName);
  return album ? { ...album, images: getGalleryImages(album.folderName) } : null;
}
