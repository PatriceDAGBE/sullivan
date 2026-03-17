import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Sullivan ATCHAHOUÉ | Portfolio",
  description: "UI/UX Designer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.variable} ${geist.variable} font-sans bg-[#0F0F0F] text-white antialiased`}>

        <Header />

        {/*
            Calcul du padding-top :
            Top (57px) + Height (51px) = 108px.
            On ajoute un peu de marge (ex: 140px) pour que le Hero ne colle pas au header.
        */}
        <main className="min-h-screen relative pt-[140px]">
          {children}
        </main>

      </body>
    </html>
  );
}
