import type { Metadata } from "next";
import { Geist, Inter, Space_Grotesk } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${geistSans.variable} font-satoshi  ${inter.variable} ${spaceGrotesk.variable} antialiased`}
        >
          {children}
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
}
