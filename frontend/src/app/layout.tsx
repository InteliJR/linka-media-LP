import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Linka Mídia - Agência de Marketing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}