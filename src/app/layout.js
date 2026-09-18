import { Geist, Geist_Mono } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import AssetPreloader from "@/components/AssetPreloader";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "Siddham Mishra - GTM Engineer",
    template: "%s · Siddham Mishra",
  },
  description:
    "GTM engineer for AI-native growth. 200+ hours inside Clay, outbound infrastructure for 15 SDRs at 300k emails a month, and two SaaS products shipped end to end.",
  keywords: [
    "GTM engineer",
    "growth engineer",
    "Clay",
    "outbound",
    "AI automation",
    "Siddham Mishra",
  ],
  authors: [{ name: "Siddham Mishra", url: "https://github.com/jigsid" }],
  openGraph: {
    type: "website",
    title: "Siddham Mishra - GTM Engineer",
    description:
      "I build the machine, then I run it. Clay systems, outbound infrastructure, and the dashboards that prove they work.",
    siteName: "Siddham Mishra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddham Mishra - GTM Engineer",
    description:
      "I build the machine, then I run it. Clay systems, outbound infrastructure, and the dashboards that prove they work.",
    creator: "@OXOJigsaw",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f8f8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <ScrollProgress />
        {children}
        <AssetPreloader />
      </body>
    </html>
  );
}
