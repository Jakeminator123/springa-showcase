import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Springa — skogslöpning som exempelprojekt",
  description:
    "Editorial exempel om stämningen i en skärgårdsskog. Inte en uppmätt ledkarta, ingen förening, inga anmälningsavgifter.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sv" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full bg-[var(--fog)] text-[var(--bark)]">{children}</body>
    </html>
  );
}
