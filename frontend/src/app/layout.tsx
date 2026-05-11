import "./globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { MetaPixel } from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Linka Midia - Agencia de Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning>
        {children}
        {metaPixelId ? <MetaPixel pixelId={metaPixelId} /> : null}
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
      </body>
    </html>
  );
}
