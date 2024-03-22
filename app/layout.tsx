
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Header, Footer } from "@/components";

// config
import config from "@/config/general";
// components
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={inter.className + " bg-gray"}>
        <Header />
        <main className="lg:mt-20 lg:mx-20 lg:p-12 bg-white mt-4 mx-4 p-8 mb-4 lg:mb-24 rounded">
      
          

          {children}
          <Footer />
        </main>
      </body>
      
    </html>
  );
}
