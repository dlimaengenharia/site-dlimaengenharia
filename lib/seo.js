import { contact } from "./site";
import { services } from "./services";
import { serviceDetails } from "./home";
import { faq } from "./faq";

// Domínio final do site. Confirme antes de publicar (ou defina NEXT_PUBLIC_SITE_URL).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.dlimaengenharia.com.br").replace(/\/$/, "");

export const siteName = "D'Lima Engenharia";

export const defaultTitle = "D'Lima Engenharia | AVCB, Licença de Funcionamento e CETESB em São Paulo";

export const defaultDescription =
  "Engenharia e regularização na Grande São Paulo: AVCB e CLCB, projeto de bombeiro, licença de funcionamento (ALF), Licença de Operação na CETESB, Vigilância Sanitária e certificado digital. Também regularização de imóveis, Habite-se, acessibilidade, AVS e segurança do trabalho.";

export const keywords = [
  "AVCB São Paulo",
  "CLCB",
  "projeto de bombeiro",
  "projeto de combate a incêndio",
  "licença de funcionamento",
  "ALF Auto de Licença de Funcionamento",
  "alvará de funcionamento",
  "Licença de Operação CETESB",
  "licenciamento ambiental",
  "Secretaria do Verde e Meio Ambiente",
  "licença sanitária",
  "Vigilância Sanitária",
  "certificado digital e-CPF e-CNPJ",
  "regularização de imóveis",
  "Habite-se",
  "usucapião",
  "Anistia",
  "acessibilidade",
  "AVS Auto de Verificação de Segurança",
  "segurança do trabalho",
  "engenharia São Paulo",
];

const businessId = `${siteUrl}/#empresa`;

// Foco na Grande São Paulo; outras cidades do estado são atendidas conforme a demanda.
const areaServed = [
  { "@type": "City", name: "São Paulo" },
  { "@type": "City", name: "Guarulhos" },
  { "@type": "AdministrativeArea", name: "Região Metropolitana de São Paulo" },
  { "@type": "State", name: "São Paulo" },
];

// Dados estruturados da empresa (Google, Bing e assistentes de IA).
export function businessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": businessId,
        name: siteName,
        description: defaultDescription,
        url: siteUrl,
        logo: `${siteUrl}/icon.svg`,
        image: `${siteUrl}/images/hero.webp`,
        telephone: "+55-11-98483-7520",
        email: contact.email,
        founder: { "@type": "Person", name: "Débora Lima" },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Brigadeiro Faria Lima, 1811, Sala 1119, Jardim Paulistano",
          postalCode: "01452-001",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        areaServed,
        sameAs: [contact.instagram],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-11-98483-7520",
          contactType: "customer service",
          availableLanguage: "Portuguese",
        },
        knowsAbout: keywords,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços de engenharia e regularização",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: serviceDetails[service.slug].summary,
              serviceType: service.title,
              provider: { "@id": businessId },
              areaServed,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#site`,
        url: siteUrl,
        name: siteName,
        inLanguage: "pt-BR",
        publisher: { "@id": businessId },
      },
    ],
  };
}

// Página de serviço: o serviço em si e o caminho (breadcrumb) até ele.
export function servicePageSchema(page) {
  const url = `${siteUrl}/servicos/${page.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#servico`,
        name: page.title,
        serviceType: page.name,
        description: page.metaDescription,
        url,
        image: `${siteUrl}/images/servicos/${page.slug}.webp`,
        provider: { "@id": businessId },
        areaServed,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: page.name,
          itemListElement: page.includes.map((item) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: item.title, description: item.text },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Serviços", item: `${siteUrl}/#servicos` },
          { "@type": "ListItem", position: 3, name: page.name, item: url },
        ],
      },
    ],
  };
}

// Perguntas frequentes em formato FAQPage (respostas diretas para buscadores e IAs).
export function faqSchema(items = faq) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
