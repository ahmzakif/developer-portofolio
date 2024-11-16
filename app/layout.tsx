import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/main/StarsBackground";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmzakif.vercel.app/"),
  title: "Ahmad Zaki Firdaus - AI | ML | DL - Developer Portofolio",
  description:
    "Developer Portfolio of Frontend & Mobile App Developer from Pakistan with 3+ years of expertise. Senior Software Engineer. Specializing mobile apps, UX, and JavaScript technologies.",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Ahmad Zaki Firdaus",
    "Zaki",
    "ahmzakif",
    "Next.js",
    "React",
    "TensorFlow",
    "PyTorch",
  ],
  openGraph: {
    title: "Ahmad Zaki Firdaus - AI | ML | DL - Developer Portofolio",
    description:
      "AI & IoT Developer from Indonesia with 2+ years of expertise. AI Engineer. Specializing image classification, object detection and IoT technologies.",
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
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
