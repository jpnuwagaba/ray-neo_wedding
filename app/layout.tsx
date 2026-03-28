import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { siteName, siteUrl } from "./lib/site";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "A covenant celebration before God. Join us for worship, prayer, and thanksgiving as Raymond and Neoline begin this new chapter in Christ.",
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Raymond and Neoline wedding",
    "Christian wedding Kampala",
    "wedding RSVP",
    "Church of the Resurrection Bugolobi",
    "Grandville Manor wedding reception",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    locale: "en_UG",
    title: siteName,
    description:
      "Celebrate with Raymond and Neoline as they begin their covenant marriage before God.",
    images: [
      {
        url: "/assets/2g5a3446.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Raymond and Neoline wedding portrait.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Celebrate with Raymond and Neoline as they begin their covenant marriage before God.",
    images: ["/assets/2g5a3446.jpg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
