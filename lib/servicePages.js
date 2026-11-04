// Conteúdo das páginas individuais de serviço (/servicos/[slug]).
// Usado pelas 3 versões do site, pelos dados estruturados e pelo sitemap.
// Os slugs são os mesmos de lib/services.js (as fotos ficam em /images/servicos/<slug>.webp).
export const servicePages = [
  {
    slug: "combate-a-incendio",
    name: "Combate a Incêndio",
    title: "AVCB, CLCB e projeto de combate a incêndio em São Paulo",
    metaTitle: "AVCB e CLCB em São Paulo | Projeto de combate a incêndio",
    metaDescription:
      "Obtenha ou renove o AVCB e o CLCB do seu imóvel em São Paulo. Projeto de combate a incêndio, treinamento de brigada e acompanhamento até a aprovação no Corpo de Bombeiros.",
    intro: [
      "O AVCB (Auto de Vistoria do Corpo de Bombeiros) e o CLCB (Certificado de Licença do Corpo de Bombeiros) comprovam que o imóvel atende às exigências de segurança contra incêndio do Estado de São Paulo.",
      "Sem esses documentos, a empresa pode ter dificuldade para obter o alvará de funcionamento, renovar o seguro ou passar por fiscalizações. A D'Lima Engenharia cuida de todo o processo, do projeto à emissão do certificado.",
    ],
    whoNeeds: [
      "Lojas, escritórios e comércios em geral",
      "Galpões, indústrias e depósitos",
      "Condomínios residenciais e comerciais",
      "Escolas, clínicas, restaurantes e locais com público",
      "Imóveis que mudaram de uso ou passaram por reforma",
    ],
    includes: [
      { title: "Enquadramento do imóvel", text: "Análise da ocupação, da área e do risco para definir se o caso é de AVCB ou de CLCB." },
      { title: "Projeto de combate a incêndio", text: "Projeto técnico com as medidas de segurança exigidas para a edificação." },
      { title: "Treinamento de brigada", text: "Capacitação dos ocupantes para agir em situações de emergência." },
      { title: "Emissão e renovação", text: "Acompanhamento do processo no Corpo de Bombeiros até a emissão ou renovação do AVCB ou CLCB." },
    ],
    steps: [
      { title: "Visita técnica", text: "Levantamento do imóvel e das medidas de segurança existentes." },
      { title: "Projeto", text: "Enquadramento e elaboração do projeto técnico." },
      { title: "Adequações", text: "Orientação sobre as adequações necessárias e treinamento de brigada." },
      { title: "Aprovação", text: "Vistoria e emissão do AVCB ou CLCB." },
    ],
    faq: [
      {
        question: "O AVCB tem validade?",
        answer:
          "Sim. O AVCB tem prazo de validade definido conforme o tipo de ocupação do imóvel e precisa ser renovado antes do vencimento. A D'Lima Engenharia acompanha a renovação para o imóvel não ficar irregular.",
      },
      {
        question: "Qual é a diferença entre AVCB e CLCB?",
        answer:
          "O CLCB é um processo simplificado, voltado a edificações de menor porte e menor risco. O AVCB é exigido para as demais edificações e envolve projeto técnico e vistoria. A análise do imóvel define qual dos dois se aplica.",
      },
      {
        question: "Quem precisa de treinamento de brigada de incêndio?",
        answer:
          "Edificações em que a legislação exige brigada, de acordo com a ocupação, a área e a quantidade de pessoas. O treinamento prepara os ocupantes para agir em emergências e faz parte das exigências do Corpo de Bombeiros.",
      },
    ],
  },
  {
    slug: "seguranca-do-trabalho",
    name: "Segurança do Trabalho",
    title: "Segurança do Trabalho: laudos, projetos e treinamentos",
    metaTitle: "Segurança do Trabalho em São Paulo | Laudos, projetos e treinamentos",
    metaDescription:
      "Laudos, projetos e treinamentos de segurança do trabalho para empresas em São Paulo. Proteja seus colaboradores e mantenha a empresa em dia com as Normas Regulamentadoras.",
    intro: [
      "A segurança do trabalho protege os colaboradores e mantém a empresa em conformidade com as Normas Regulamentadoras (NRs).",
      "Laudos, projetos e treinamentos adequados reduzem o risco de acidentes, autuações e passivos trabalhistas. A D'Lima Engenharia avalia a sua operação e indica exatamente o que é necessário.",
    ],
    whoNeeds: [
      "Empresas com funcionários registrados",
      "Indústrias, galpões e obras",
      "Comércios e prestadores de serviço",
      "Empresas que receberam notificação ou fiscalização",
    ],
    includes: [
      { title: "Laudos técnicos", text: "Avaliação dos ambientes e das atividades, com laudos de acordo com as normas aplicáveis." },
      { title: "Projetos de segurança", text: "Projetos para adequar ambientes, equipamentos e processos." },
      { title: "Treinamentos", text: "Capacitação dos colaboradores para trabalhar com segurança." },
      { title: "Orientação contínua", text: "Apoio para manter laudos e treinamentos atualizados." },
    ],
    steps: [
      { title: "Diagnóstico", text: "Avaliação da empresa, das atividades e dos riscos." },
      { title: "Laudos e projetos", text: "Elaboração da documentação técnica necessária." },
      { title: "Treinamentos", text: "Capacitação das equipes conforme as exigências." },
      { title: "Acompanhamento", text: "Atualizações sempre que houver mudanças na operação." },
    ],
    faq: [
      {
        question: "Quais treinamentos de segurança a minha empresa precisa?",
        answer:
          "Depende da atividade, dos riscos e do porte da empresa. As Normas Regulamentadoras definem os treinamentos obrigatórios para cada situação. Após o diagnóstico, a D'Lima Engenharia indica quais se aplicam ao seu caso.",
      },
      {
        question: "Os laudos de segurança precisam ser atualizados?",
        answer:
          "Sim. Os laudos devem ser revisados sempre que houver mudanças no ambiente, nos processos ou nas atividades, além dos prazos previstos nas normas.",
      },
      {
        question: "Pequenas empresas também precisam de segurança do trabalho?",
        answer:
          "Sim. As Normas Regulamentadoras se aplicam a empresas com empregados registrados, com exigências proporcionais ao porte e ao grau de risco da atividade.",
      },
    ],
  },
  {
    slug: "alvaras",
    name: "Alvarás",
    title: "Alvará de funcionamento, alvará sanitário e certificado digital",
    metaTitle: "Alvará de funcionamento e alvará sanitário em São Paulo",
    metaDescription:
      "Tire ou regularize o alvará de funcionamento e o alvará sanitário da sua empresa em São Paulo. Certificado digital para pessoa física e jurídica. Atendimento personalizado.",
    intro: [
      "O alvará (licença) de funcionamento é a autorização da prefeitura para a empresa exercer a sua atividade naquele endereço. Atividades ligadas à saúde, alimentação e estética também precisam do alvará sanitário.",
      "A D'Lima Engenharia verifica as exigências do imóvel e da atividade, reúne a documentação e acompanha o processo até a liberação.",
    ],
    whoNeeds: [
      "Empresas abrindo um novo ponto",
      "Mudança de endereço ou de atividade",
      "Clínicas, restaurantes, salões e atividades de saúde",
      "Empresas com alvará vencido ou irregular",
    ],
    includes: [
      { title: "Alvará de funcionamento", text: "Licença da prefeitura para a atividade no endereço da empresa." },
      { title: "Alvará sanitário", text: "Licença da vigilância sanitária para atividades que exigem controle sanitário." },
      { title: "Certificado digital", text: "Certificado para pessoa física e pessoa jurídica, usado em sistemas do governo." },
      { title: "Verificação do imóvel", text: "Checagem de exigências como AVCB ou CLCB e uso permitido no local." },
    ],
    steps: [
      { title: "Análise", text: "Verificação da atividade, do imóvel e das licenças necessárias." },
      { title: "Documentação", text: "Reunião e preparação dos documentos exigidos." },
      { title: "Protocolo", text: "Abertura dos processos nos órgãos responsáveis." },
      { title: "Liberação", text: "Acompanhamento até a emissão das licenças." },
    ],
    faq: [
      {
        question: "Qual é a diferença entre alvará de funcionamento e alvará sanitário?",
        answer:
          "O alvará de funcionamento é emitido pela prefeitura e autoriza a atividade no endereço. O alvará sanitário é emitido pela vigilância sanitária e é exigido para atividades que podem afetar a saúde, como alimentação, saúde e estética.",
      },
      {
        question: "Posso funcionar sem alvará?",
        answer:
          "Funcionar sem a licença exigida pode gerar multa e até a interdição do estabelecimento. O ideal é regularizar antes de iniciar a atividade ou o quanto antes.",
      },
      {
        question: "Para que serve o certificado digital?",
        answer:
          "O certificado digital funciona como uma identidade eletrônica. Ele permite assinar documentos com validade jurídica e acessar sistemas da Receita Federal, da prefeitura e de outros órgãos.",
      },
    ],
  },
  {
    slug: "regularizacao-de-imoveis",
    name: "Regularização de Imóveis",
    title: "Regularização de imóveis em São Paulo: Habite-se, Anistia 2025 e usucapião",
    metaTitle: "Regularização de imóveis em São Paulo | Habite-se e Anistia 2025",
    metaDescription:
      "Regularize imóveis residenciais, comerciais e industriais em São Paulo. Habite-se, Anistia 2025 e suporte técnico para usucapião. Valorize o seu imóvel e evite problemas na venda.",
    intro: [
      "Construções sem aprovação, ampliações não registradas e diferenças entre o que foi construído e o que consta na prefeitura deixam o imóvel irregular.",
      "Um imóvel regular vale mais e pode ser vendido, financiado e inventariado sem complicação. A D'Lima Engenharia define o melhor caminho para o seu caso e cuida da parte técnica.",
    ],
    whoNeeds: [
      "Imóveis com obra ou ampliação sem aprovação",
      "Imóveis sem Habite-se",
      "Posse sem escritura (usucapião)",
      "Quem quer vender, financiar ou fazer inventário",
    ],
    includes: [
      { title: "Levantamento e projeto", text: "Medição do imóvel e projeto de regularização junto à prefeitura." },
      { title: "Anistia 2025", text: "Análise de enquadramento e processo de regularização pelo programa, quando aplicável." },
      { title: "Habite-se", text: "Obtenção do certificado de conclusão da obra." },
      { title: "Suporte à usucapião", text: "Planta e memorial descritivo para o processo de usucapião." },
    ],
    steps: [
      { title: "Levantamento", text: "Visita técnica e análise da documentação do imóvel." },
      { title: "Caminho ideal", text: "Definição da forma de regularização mais adequada." },
      { title: "Projeto e protocolo", text: "Elaboração do projeto e abertura do processo." },
      { title: "Regularização", text: "Acompanhamento até a aprovação e emissão dos documentos." },
    ],
    faq: [
      {
        question: "Imóvel irregular pode ser vendido ou financiado?",
        answer:
          "Irregularidades costumam dificultar ou impedir o financiamento e reduzem o valor do imóvel, porque bancos e cartórios geralmente exigem a documentação em dia. Regularizar antes da venda evita atrasos e desvalorização.",
      },
      {
        question: "O que é a Anistia 2025?",
        answer:
          "É um programa que permite regularizar construções em situação irregular dentro das condições e dos prazos definidos em lei. A D'Lima Engenharia verifica se o seu imóvel se enquadra e cuida do processo.",
      },
      {
        question: "O que é usucapião e qual é o papel do engenheiro?",
        answer:
          "Usucapião é a forma de obter a propriedade de um imóvel pela posse prolongada, contínua e sem oposição, nos prazos previstos em lei. O engenheiro elabora a planta e o memorial descritivo, documentos técnicos exigidos no processo.",
      },
    ],
  },
  {
    slug: "acessibilidade",
    name: "Acessibilidade",
    title: "Acessibilidade: projetos e certificado para o seu imóvel",
    metaTitle: "Projeto e certificado de acessibilidade em São Paulo | NBR 9050",
    metaDescription:
      "Projetos de acessibilidade e certificado de acessibilidade e segurança para imóveis em São Paulo, de acordo com a NBR 9050. Adeque o seu espaço e receba todos os públicos.",
    intro: [
      "Acessibilidade garante que todas as pessoas, incluindo as com deficiência ou mobilidade reduzida, usem o imóvel com autonomia e segurança.",
      "As regras técnicas estão na norma ABNT NBR 9050, e a exigência costuma aparecer em licenciamentos e regularizações. A D'Lima Engenharia avalia o imóvel e projeta as adequações necessárias.",
    ],
    whoNeeds: [
      "Comércios e serviços abertos ao público",
      "Imóveis em licenciamento ou regularização",
      "Condomínios e edifícios comerciais",
      "Escolas, clínicas e escritórios",
    ],
    includes: [
      { title: "Avaliação do imóvel", text: "Análise das condições de acesso, circulação, sanitários e sinalização." },
      { title: "Projeto de adequação", text: "Rampas, rotas acessíveis, sanitários adaptados e sinalização." },
      { title: "Certificado", text: "Certificado de acessibilidade e segurança da edificação." },
      { title: "Acompanhamento", text: "Orientação durante a execução das adequações." },
    ],
    steps: [
      { title: "Avaliação", text: "Visita técnica e checagem dos requisitos da norma." },
      { title: "Projeto", text: "Projeto das adequações necessárias." },
      { title: "Execução", text: "Acompanhamento das obras e ajustes." },
      { title: "Certificação", text: "Emissão do certificado de acessibilidade." },
    ],
    faq: [
      {
        question: "Qual norma define as regras de acessibilidade?",
        answer:
          "A principal referência técnica é a norma ABNT NBR 9050, que trata da acessibilidade em edificações, mobiliário e espaços. Ela é complementada pela legislação, como a Lei Brasileira de Inclusão.",
      },
      {
        question: "O meu comércio é obrigado a ser acessível?",
        answer:
          "Edificações de uso público e coletivo devem garantir acessibilidade, conforme a legislação. A exigência costuma ser verificada em licenciamentos, regularizações e fiscalizações.",
      },
      {
        question: "O que é o certificado de acessibilidade?",
        answer:
          "É o documento que comprova que o imóvel atende aos requisitos de acessibilidade exigidos. Ele é frequentemente solicitado em processos de licenciamento junto à prefeitura.",
      },
    ],
  },
  {
    slug: "licenciamento-ambiental",
    name: "Licenciamento Ambiental",
    title: "Licenciamento ambiental para empresas em São Paulo",
    metaTitle: "Licenciamento ambiental em São Paulo | Licenças para empresas",
    metaDescription:
      "Licenciamento ambiental para empresas e atividades em São Paulo. Análise de enquadramento, documentação e acompanhamento do processo junto aos órgãos ambientais.",
    intro: [
      "Atividades que podem causar impacto ao meio ambiente precisam de licença ambiental para instalar e operar.",
      "A D'Lima Engenharia identifica as licenças exigidas para a sua atividade, prepara a documentação e acompanha o processo junto aos órgãos ambientais.",
    ],
    whoNeeds: [
      "Indústrias e atividades produtivas",
      "Atividades com potencial poluidor",
      "Empreendimentos que usam recursos naturais",
      "Empresas notificadas por órgãos ambientais",
    ],
    includes: [
      { title: "Enquadramento", text: "Análise da atividade para identificar as licenças exigidas." },
      { title: "Documentação", text: "Preparação dos documentos e informações técnicas do processo." },
      { title: "Protocolo e acompanhamento", text: "Abertura e acompanhamento do processo junto ao órgão ambiental." },
      { title: "Renovações", text: "Controle de prazos e renovação das licenças." },
    ],
    steps: [
      { title: "Análise", text: "Entendimento da atividade e do local." },
      { title: "Enquadramento", text: "Definição das licenças e do órgão responsável." },
      { title: "Processo", text: "Preparação dos documentos e protocolo." },
      { title: "Licença", text: "Acompanhamento até a emissão e renovação." },
    ],
    faq: [
      {
        question: "A minha empresa precisa de licença ambiental?",
        answer:
          "Depende da atividade, do porte e do potencial de impacto ambiental. Uma análise de enquadramento indica se a licença é necessária e qual tipo se aplica.",
      },
      {
        question: "Quem emite a licença ambiental em São Paulo?",
        answer:
          "Dependendo da atividade, a licença é emitida pela CETESB, órgão ambiental do Estado de São Paulo, ou pelo município, quando a competência for municipal.",
      },
      {
        question: "O que acontece se a empresa operar sem licença ambiental?",
        answer:
          "A empresa fica sujeita a multas, embargo e até interdição da atividade. Regularizar o quanto antes evita essas penalidades.",
      },
    ],
  },
];

export function getServicePage(slug) {
  return servicePages.find((page) => page.slug === slug);
}
