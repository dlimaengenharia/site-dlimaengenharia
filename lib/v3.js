// A v3 reaproveita o helper de WhatsApp da v2 e os dados de serviços da v1.
export { whatsappLink } from "./v2";

export const v3NavLinks = [
  { href: "/v3", label: "Início" },
  { href: "/v3#servicos", label: "Serviços" },
  { href: "/v3#diagnostico", label: "Diagnóstico" },
  { href: "/v3#sobre", label: "Sobre" },
  { href: "/v3/contato", label: "Contato" },
];

// Complementa lib/services.js com textos de apoio para a vitrine da v3.
export const serviceDetails = {
  "combate-a-incendio": {
    tag: "Corpo de Bombeiros",
    summary:
      "Projetos técnicos, treinamento de brigada e obtenção do AVCB ou CLCB, documentos que comprovam que a edificação atende às normas de segurança contra incêndio.",
  },
  "seguranca-do-trabalho": {
    tag: "Normas regulamentadoras",
    summary:
      "Laudos, projetos e treinamentos para manter o ambiente de trabalho seguro e a empresa em dia com as normas regulamentadoras.",
  },
  alvaras: {
    tag: "Funcionamento",
    summary:
      "Alvará de funcionamento, alvará sanitário e certificado digital para que a sua empresa opere de forma regular e sem surpresas.",
  },
  "regularizacao-de-imoveis": {
    tag: "Imóveis",
    summary:
      "Regularização de imóveis residenciais, comerciais e industriais, incluindo usucapião, Anistia 2025 e Habite-se.",
  },
  acessibilidade: {
    tag: "Inclusão",
    summary:
      "Projetos e certificado de acessibilidade para adequar o imóvel às normas e receber todos os públicos com segurança.",
  },
  "licenciamento-ambiental": {
    tag: "Meio ambiente",
    summary:
      "Licenças e documentos para atividades que exigem autorização ambiental, com acompanhamento do processo junto aos órgãos.",
  },
};

export const diagnosisNeeds = [
  { id: "empresa", label: "Abrir ou regularizar uma empresa", services: ["alvaras", "combate-a-incendio"] },
  { id: "obra", label: "Imóvel construído ou reformado sem aprovação", services: ["regularizacao-de-imoveis"] },
  { id: "bombeiros", label: "Vistoria ou exigência do Corpo de Bombeiros", services: ["combate-a-incendio"] },
  { id: "acessibilidade", label: "Adequar o imóvel para acessibilidade", services: ["acessibilidade"] },
  { id: "funcionarios", label: "Laudos e treinamentos para funcionários", services: ["seguranca-do-trabalho"] },
  { id: "ambiental", label: "Atividade que pode ter impacto ambiental", services: ["licenciamento-ambiental"] },
];

export const propertyTypes = ["Residencial", "Comercial", "Industrial"];
