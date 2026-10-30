import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import Header from "@/components/v3/Header";
import Footer from "@/components/v3/Footer";
import WhatsAppFloat from "@/components/v2/WhatsAppFloat";
import "./v3.css";

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

// Versão de comparação: fica fora do Google até ser escolhida como site oficial.
export const metadata = {
  title: { absolute: "D'Lima Engenharia | Engenharia, regularização e licenças em São Paulo", template: "%s | D'Lima Engenharia" },
  description:
    "AVCB e CLCB, alvarás, regularização de imóveis, acessibilidade, segurança do trabalho e licenciamento ambiental. Faça um diagnóstico rápido e fale com a D'Lima Engenharia.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function V3Layout({ children }) {
  return (
    <div
      data-v3
      className={`${barlow.variable} ${barlowCondensed.variable} ${mono.variable}`}
    >
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
