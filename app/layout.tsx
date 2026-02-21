import type { Metadata } from "next";
import { Geist, Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-spaceGrotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LE PARLEMENTAIRE ",
  description: "A Blog Page",
  icons: "/Group.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Nav />
        <main className="flex flex-col font-satoshi w-full h-full pt-23 lg:pt-30">
          {children}
        </main>
      </body>
    </html>
  );
}
