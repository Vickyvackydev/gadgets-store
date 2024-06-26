import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Headers/header";

export const metadata: Metadata = {
  title: "Gadgets Game",
  description: "A new branded e-commerce web app for gadgets only",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
