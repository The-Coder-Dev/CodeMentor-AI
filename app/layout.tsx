import type { Metadata } from "next";
import {Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300",'400','500','600','700','800']
});


export const metadata: Metadata = {
  title: "CodeMentor Ai",
  description: "CodeMentor AI helps beginners to understand, learn, and debug the code with Smart features like Code Visualization, AI Tutor and many more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
