import { Header } from "@/components/header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <div className="min-h-dvh flex flex-col pt-4">
          <div className="container flex-1">
            <Header />
            {children}
          </div>
          <footer className="h-12 flex items-center justify-center">
            Footer &copy;
          </footer>
          <TailwindIndicator />
        </div>
      </body>
    </html>
  );
}
