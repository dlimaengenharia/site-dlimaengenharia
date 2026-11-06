export const navLinks = [
  { href: "/", label: "Início" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#diagnostico", label: "Diagnóstico" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

// Complementa lib/services.js com textos de apoio para a vitrine da página inicial.
export const serviceDetails = {
  "combate-a-incendio": {
    tag: "Corpo de Bombeiros",
    summary:
      "Projeto de bombeiro, emissão e renovação do AVCB ou do CLCB e treinamento de brigada, os documentos que comprovam que a edificação atende às normas de segurança contra incêndio.",
  },
  alvaras: {
    tag: "Prefeitura",
    summary:
      "ALF (Auto de Licença de Funcionamento) e licença de funcionamento para a sua empresa abrir as portas, mudar de endereço ou regularizar a atividade sem surpresas.",
  },
  "licenciamento-ambiental": {
    tag: "CETESB e Secretaria do Verde",
    summary:
      "Licença de Operação na CETESB, a licença ambiental da indústria, e licenciamento na Secretaria do Verde e Meio Ambiente, com controle das renovações.",
  },
  "vigilancia-sanitaria": {
    tag: "Saúde e alimentação",
    summary:
      "Licença sanitária e cadastro na Vigilância Sanitária para clínicas, restaurantes, salões, indústrias de alimentos e outras atividades com controle sanitário.",
  },
  "certificado-digital": {
    tag: "Pessoa física e jurídica",
    summary:
      "e-CPF e e-CNPJ para assinar documentos com validade jurídica e acessar a Receita Federal, a prefeitura e outros sistemas do governo.",
  },
  "regularizacao-de-imoveis": {
    tag: "Imóveis",
    summary:
      "Regularização de imóveis residenciais, comerciais e industriais, incluindo projeto na prefeitura, usucapião, Anistia e Habite-se.",
  },
  acessibilidade: {
    tag: "Inclusão e segurança",
    summary:
      "Projetos e certificado de acessibilidade e AVS (Auto de Verificação de Segurança) para adequar o imóvel às normas e receber todos os públicos com segurança.",
  },
  "seguranca-do-trabalho": {
    tag: "Normas regulamentadoras",
    summary:
      "Laudos, projetos e treinamentos para manter o ambiente de trabalho seguro e a empresa em dia com as normas regulamentadoras.",
  },
};

export const diagnosisNeeds = [
  { id: "empresa", label: "Abrir ou regularizar uma empresa", services: ["alvaras", "combate-a-incendio"] },
  { id: "bombeiros", label: "AVCB, CLCB ou exigência do Corpo de Bombeiros", services: ["combate-a-incendio"] },
  { id: "ambiental", label: "Indústria ou atividade que precisa de licença ambiental", services: ["licenciamento-ambiental"] },
  { id: "sanitaria", label: "Atividade de saúde, alimentação ou estética", services: ["vigilancia-sanitaria"] },
  { id: "certificado", label: "Certificado digital (CPF ou CNPJ)", services: ["certificado-digital"] },
  { id: "obra", label: "Imóvel construído ou reformado sem aprovação", services: ["regularizacao-de-imoveis"] },
  { id: "acessibilidade", label: "Adequar o imóvel para acessibilidade", services: ["acessibilidade"] },
  { id: "funcionarios", label: "Laudos e treinamentos para funcionários", services: ["seguranca-do-trabalho"] },
];

export const propertyTypes = ["Residencial", "Comercial", "Industrial"];
