import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/seo/JsonLd";
import {
  siteUrl,
  siteName,
  defaultTitle,
  defaultDescription,
  keywords,
  businessSchema,
} from "@/lib/seo";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-v3-body",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-v3-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-v3-mono",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: `%s | ${siteName}` },
  description: defaultDescription,
  keywords,
  applicationName: siteName,
  authors: [{ name: siteName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <JsonLd data={businessSchema()} />
        <div
          data-v3
          className={`${barlow.variable} ${barlowCondensed.variable} ${mono.variable}`}
        >
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
