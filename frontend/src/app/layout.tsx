import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linka Mídia - Agência de Marketing Digital em Maringá",
  description:
    "Agência completa de marketing digital em Maringá. Social Media, Audiovisual, Tráfego Pago e mais. Ciclo completo do início ao fim da comunicação.",
  keywords: [
    "agência marketing maringá",
    "marketing digital maringá",
    "social media maringá",
    "tráfego pago",
    "audiovisual",
  ],
  authors: [{ name: "Linka Mídia" }],
  creator: "Linka Mídia",
  publisher: "Linka Mídia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://linkamedia.com.br",
    title: "Linka Mídia - Agência de Marketing Digital em Maringá",
    description:
      "Agência completa de marketing digital em Maringá. Social Media, Audiovisual, Tráfego Pago e mais.",
    siteName: "Linka Mídia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linka Mídia - Agência de Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linka Mídia - Agência de Marketing Digital em Maringá",
    description:
      "Agência completa de marketing digital em Maringá. Social Media, Audiovisual, Tráfego Pago e mais.",
    images: ["/images/og-image.jpg"],
  },
  verification: {
    google: "seu-código-google-search-console",
  },
  alternates: {
    canonical: "https://linkamedia.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={inter.className}>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}