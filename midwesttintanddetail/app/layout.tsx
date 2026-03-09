import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Midwest Tint & Detail | Plymouth's #1 Trusted Tint & Detail Shop",
  description:
    "Plymouth's #1 trusted tint and detail shop. We specialize in ceramic window tinting with a lifetime warranty, ceramic coating, paint correction, and interior & exterior detailing. Located at 524 Farmer St, Plymouth MI 48170.",
  keywords:
    "window tinting, ceramic tint, car detailing, paint correction, ceramic coating, Plymouth MI, auto detailing, window film, lifetime warranty tint",
  openGraph: {
    title: "Midwest Tint & Detail | Plymouth's #1 Trusted Tint & Detail Shop",
    description:
      "Premium ceramic window tinting with lifetime warranty. Ceramic coating, paint correction, and full interior & exterior detailing in Plymouth, MI.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
