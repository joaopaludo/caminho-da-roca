import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import SearchBar from "./_components/searchbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Caminho da Roça",
  description: "O caminho do campo até sua casa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-neutral-100 text-gray-800 antialiased`}
      >
        <header className="sticky top-0 z-10 bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <Link href="/">
              <h1 className="text-xl font-bold">Caminho da Roça</h1>
            </Link>
            <Button size="icon" variant="ghost">
              <ShoppingBagIcon className="h-6 w-6" />
              <span className="sr-only">Carrinho</span>
            </Button>
          </div>

          <SearchBar />
        </header>
        {children}
      </body>
    </html>
  );
}
