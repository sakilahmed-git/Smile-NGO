import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import { siteConfig } from "@/config/site.config";
import { OrganizationSchema } from "@/components/seo/organization-schema";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "SMILE NGO | Community-led NGO in Kokrajhar & Gossaigaon, Assam",
    template: "%s | SMILE NGO",
  },

  description: siteConfig.description,
  applicationName: "SMILE NGO",
  robots: {
    index: true,
    follow: true,
  },

  manifest: "/manifest.webmanifest",

  icons: {
    icon: "/logos/15bab117-44da-452d-9634-698c45c64771 (1)-modified.png",
    apple: "/logos/15bab117-44da-452d-9634-698c45c64771 (1)-modified.png",
  },

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
    images: [
      {
        url: siteConfig.logo,
        alt: "SMILE NGO logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SMILE NGO",
    description: siteConfig.description,
    images: [siteConfig.logo],
  },
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
        <OrganizationSchema />
      </body>
    </html>
  );
}
