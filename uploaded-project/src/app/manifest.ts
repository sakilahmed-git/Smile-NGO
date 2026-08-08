import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SMILE NGO",
    short_name: "SMILE",
    description:
      "Transparent community programs for education, health, nutrition and dignity.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#fffaf2",
    theme_color: "#e45f35",
    orientation: "portrait",
    icons: [
      { src: "/icons/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/icons/maskable.svg", sizes: "any", type: "image/svg+xml", purpose: "maskable" },
    ],
  };
}
