import { Oswald, Dosis } from "next/font/google";
import Header from "@/components/Header";
import VersionSwitcher from "@/components/VersionSwitcher";
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

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const dosis = Dosis({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
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
    <html lang="pt-BR" className={`${oswald.variable} ${dosis.variable}`}>
      <body>
        <JsonLd data={businessSchema()} />
        <Header />
        {children}
        <VersionSwitcher />
      </body>
    </html>
  );
}
