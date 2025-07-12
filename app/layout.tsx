// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNav from "../Components/Home/Navbar/ResponsiveNav";
import AnimatedCursor from "react-animated-cursor";
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
      <body className={sora.className}>
        <div className="hidden md:block">
          <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={2}
            outerScale={2}
            outerAlpha={0}
            innerStyle={{ backgroundColor: "white" }}
            outerStyle={{ border: "3px solid white" }}
          />
        </div>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
