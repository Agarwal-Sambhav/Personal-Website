import type { Metadata } from "next";
import localFont from "next/font/local";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import headshot from '../app/assets/headshot.jpg';

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

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Sambhav Agarwal",
  description: "Sambhav Agarwal's Portfolio",
  icons: {
    icon: headshot.src, 
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
