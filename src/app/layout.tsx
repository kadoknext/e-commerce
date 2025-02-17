import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next E-Commerce",
  description: "Next E-Commerce com a versão do Next 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 w-full items-center justify-between bg-slate-800 px-8 py-2 text-gray-300">
          <Link
            href="/"
            className="text-md font-bold uppercase h-12 flex items-center"
          >
            Next Store
          </Link>
        </nav>
        <main className="bg-slate-700 h-screen">{children}</main>
      </body>
    </html>
  );
}
