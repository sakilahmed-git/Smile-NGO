import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SMILE NGO | Transparent Community Impact",
    template: "%s | SMILE NGO",
  },
  description: siteConfig.description,
  applicationName: "SMILE NGO",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "SMILE NGO",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "SMILE NGO",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "SMILE NGO",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}