import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Hive",
  description: "Share and Upload your photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
