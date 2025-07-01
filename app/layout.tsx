// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "../Components/Home/Navbar/ResponsiveNav";
import { Sora } from 'next/font/google';
import 'aos/dist/aos.css';

// Load Google font properly
const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="custom-scroll">
      <body className={`${sora.className} bg-[#0f0715] min-h-screen`}>
        <ResponsiveNav />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
