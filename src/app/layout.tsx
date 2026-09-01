import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cheick Diarra | Software Developer & Cloud",
  description:
    "Portfolio de Cheick Diarra, Software Developer spécialisé en Python, Django, AWS et DevOps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}