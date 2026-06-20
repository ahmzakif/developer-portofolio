import Navbar from "@/components/Navbar";
import AOSInitializer from "@/components/AOSInitializer";
import Cursor from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmzakif.vercel.app/"),
  title: "Kayzee - AI Engineer Portfolio",
  description:
    "AI Engineer & Developer from Indonesia with 2 years of expertise. Specializing Generative AI, AI Agents and Deep Learning.",
  keywords: [
    "AI Engineer",
    "Developer Portfolio",
    "ahmzakif",
    "Ahmad Zaki Firdaus",
    "Zaki",
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "Kayzee - AI Engineer Portfolio",
    description:
      "AI Engineer & Developer from Indonesia with 2 years of expertise. Specializing Generative AI, AI Agents and Deep Learning.",
    images: "/images/OpenGraph.png",
  },
  alternates: {
    canonical: "https://ahmzakif.vercel.app/",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Ahmad Zaki Firdaus",
              jobTitle: "AI Engineer",
              url: "https://ahmzakif.vercel.app/",
              sameAs: [
                "https://www.linkedin.com/in/ahmzakif/",
                "https://github.com/ahmzakif",
              ],
            }),
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PRIVATE_GTID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-${process.env.NEXT_PRIVATE_GTID}');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.className} bg-[#111] overflow-y-scroll overflow-x-hidden`}
      >
        <AOSInitializer />
        <SpeedInsights />
        <Analytics />
        <Cursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
