import { Inter } from "next/font/google";
import Header from "@/components/v2/Header";
import Footer from "@/components/v2/Footer";
import WhatsAppFloat from "@/components/v2/WhatsAppFloat";
import "./v2.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-v2-body",
});

// Versão de comparação: fica fora do Google até ser escolhida como site oficial.
export const metadata = {
  title: { absolute: "D'Lima Engenharia | Engenharia e Regularização em São Paulo", template: "%s | D'Lima Engenharia" },
  description:
    "AVCB, CLCB, alvarás, regularização de imóveis, acessibilidade, segurança do trabalho e licenciamento ambiental em São Paulo. Solicite seu orçamento.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function V2Layout({ children }) {
  return (
    <div data-v2 className={inter.variable}>
      <Header />
      {children}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
