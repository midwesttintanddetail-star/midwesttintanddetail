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
  metadataBase: new URL('https://midwesttintanddetail.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Midwest Tint & Detail | Plymouth's #1 Trusted Tint & Detail Shop",
    description:
      "Premium ceramic window tinting with lifetime warranty. Ceramic coating, paint correction, and full interior & exterior detailing in Plymouth, MI.",
    url: 'https://midwesttintanddetail.com',
    siteName: 'Midwest Tint & Detail',
    images: [
      {
        url: '/logonc.png', // Assuming you have a logonc.png in public folder
        width: 1200,
        height: 630,
        alt: 'Midwest Tint & Detail Logo',
      },
      {
        url: '/hero-desktop.png', // Added the hero image for better preview
        width: 1920,
        height: 1080,
        alt: 'Midwest Tint & Detail Shop',
      }
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Midwest Tint & Detail | Plymouth's #1 Trusted Tint & Detail Shop",
    description: "Premium ceramic window tinting with lifetime warranty. Ceramic coating, paint correction, and full interior & exterior detailing in Plymouth, MI.",
    images: ['/hero-desktop.png'], // Must be an absolute URL if metadataBase is not set, but we set metadataBase
  },
  other: {
    "geo.region": "US-MI",
    "geo.placename": "Plymouth",
    "geo.position": "42.3714;-83.4702",
    "ICBM": "42.3714, -83.4702"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoBodyShop",
              "name": "Midwest Tint & Detail",
              "image": "https://midwesttintanddetail.com/logo.png",
              "@id": "",
              "url": "https://midwesttintanddetail.com",
              "telephone": "+13137290005",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "524 Farmer St",
                "addressLocality": "Plymouth",
                "addressRegion": "MI",
                "postalCode": "48170",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 42.3714,
                "longitude": -83.4702
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
