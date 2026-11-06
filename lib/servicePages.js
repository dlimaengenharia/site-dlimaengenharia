// Conteúdo das páginas individuais de serviço (/servicos/[slug]).
// Usado pelas 3 versões do site, pelos dados estruturados e pelo sitemap.
// A ordem é a de prioridade (a mesma de lib/services.js).
// Os slugs são os mesmos de lib/services.js (as fotos ficam em /images/servicos/<slug>.webp).
export const servicePages = [
  {
    slug: "combate-a-incendio",
    name: "AVCB e CLCB",
    title: "AVCB, CLCB e projeto de bombeiro em São Paulo",
    metaTitle: "AVCB e CLCB em São Paulo | Projeto de bombeiro e combate a incêndio",
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
      { title: "Projeto de bombeiro", text: "Projeto de combate a incêndio com as medidas de segurança exigidas para a edificação." },
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
    slug: "alvaras",
    name: "Licença de Funcionamento",
    title: "Licença de Funcionamento e ALF para empresas em São Paulo",
    metaTitle: "Licença de Funcionamento e ALF em São Paulo | Alvará de funcionamento",
    metaDescription:
      "Tire, renove ou regularize a licença de funcionamento (ALF, Auto de Licença de Funcionamento) da sua empresa em São Paulo e região. Análise do imóvel, documentação e acompanhamento até a liberação.",
    intro: [
      "A licença de funcionamento, conhecida também como alvará de funcionamento, é a autorização da prefeitura para a empresa exercer a sua atividade naquele endereço. Na cidade de São Paulo, o documento é o ALF (Auto de Licença de Funcionamento).",
      "A D'Lima Engenharia verifica se a atividade é permitida no imóvel, confere exigências como AVCB ou CLCB, reúne a documentação e acompanha o processo até a liberação.",
    ],
    whoNeeds: [
      "Empresas abrindo um novo ponto",
      "Mudança de endereço ou de atividade",
      "Comércios, indústrias, galpões e escritórios",
      "Empresas com licença vencida, irregular ou notificadas",
    ],
    includes: [
      { title: "ALF", text: "Auto de Licença de Funcionamento, a licença da Prefeitura de São Paulo para o estabelecimento." },
      { title: "Verificação do imóvel", text: "Checagem do uso permitido no local e de exigências como AVCB ou CLCB." },
      { title: "Abertura e alterações", text: "Licença para novo ponto, mudança de endereço, de área ou de atividade." },
      { title: "Renovação e regularização", text: "Regularização de licença vencida ou de empresa que funciona sem licença." },
    ],
    steps: [
      { title: "Análise", text: "Verificação da atividade, do imóvel e das licenças necessárias." },
      { title: "Documentação", text: "Reunião e preparação dos documentos exigidos." },
      { title: "Protocolo", text: "Abertura do processo na prefeitura." },
      { title: "Liberação", text: "Acompanhamento até a emissão da licença." },
    ],
    faq: [
      {
        question: "O que é o ALF?",
        answer:
          "O ALF (Auto de Licença de Funcionamento) é a licença emitida pela Prefeitura de São Paulo que autoriza o estabelecimento a funcionar naquele endereço. Em outras cidades o documento pode ter outro nome, como alvará de funcionamento.",
      },
      {
        question: "Licença de funcionamento e alvará de funcionamento são a mesma coisa?",
        answer:
          "Na prática, sim: os dois nomes se referem à autorização da prefeitura para a atividade no endereço. O nome oficial e as exigências mudam de cidade para cidade.",
      },
      {
        question: "Posso funcionar sem licença de funcionamento?",
        answer:
          "Funcionar sem a licença exigida pode gerar multa e até a interdição do estabelecimento. O ideal é regularizar antes de iniciar a atividade ou o quanto antes.",
      },
    ],
  },
  {
    slug: "licenciamento-ambiental",
    name: "Licença Ambiental",
    title: "Licença de Operação na CETESB e licenciamento ambiental em São Paulo",
    metaTitle: "Licença de Operação CETESB em São Paulo | Licenciamento ambiental",
    metaDescription:
      "Licença de Operação na CETESB, Licença Prévia e de Instalação e licenciamento na Secretaria do Verde e Meio Ambiente. Licença ambiental para indústrias e empresas em São Paulo e região.",
    intro: [
      "Indústrias e atividades que podem causar impacto ao meio ambiente precisam de licença ambiental para instalar e operar. Para a indústria, a principal é a Licença de Operação, emitida pela CETESB.",
      "Dependendo da atividade, o licenciamento é feito na CETESB, órgão ambiental do Estado de São Paulo, ou no município, como na Secretaria do Verde e Meio Ambiente da capital. A D'Lima Engenharia identifica o órgão e as licenças exigidas, prepara a documentação e acompanha o processo.",
    ],
    whoNeeds: [
      "Indústrias e atividades produtivas",
      "Empresas que precisam renovar a Licença de Operação",
      "Atividades com potencial poluidor",
      "Empresas notificadas por órgãos ambientais",
    ],
    includes: [
      { title: "Licença de Operação (CETESB)", text: "Licença que autoriza a indústria ou atividade a funcionar, emitida pela CETESB." },
      { title: "Licença Prévia e de Instalação", text: "Licenças para planejar e instalar o empreendimento, quando exigidas." },
      { title: "Secretaria do Verde e Meio Ambiente", text: "Licenciamento municipal para atividades de competência da prefeitura." },
      { title: "Renovações", text: "Controle de prazos e renovação das licenças antes do vencimento." },
    ],
    steps: [
      { title: "Análise", text: "Entendimento da atividade e do local." },
      { title: "Enquadramento", text: "Definição das licenças e do órgão responsável." },
      { title: "Processo", text: "Preparação dos documentos e protocolo." },
      { title: "Licença", text: "Acompanhamento até a emissão e renovação." },
    ],
    faq: [
      {
        question: "O que é a Licença de Operação da CETESB?",
        answer:
          "É a licença ambiental que autoriza uma indústria ou atividade a funcionar, depois de verificado que ela cumpre as exigências ambientais. Ela tem prazo de validade e precisa ser renovada.",
      },
      {
        question: "Quem emite a licença ambiental em São Paulo?",
        answer:
          "Dependendo da atividade, a licença é emitida pela CETESB, órgão ambiental do Estado de São Paulo, ou pelo município, como a Secretaria do Verde e Meio Ambiente na capital.",
      },
      {
        question: "O que acontece se a empresa operar sem licença ambiental?",
        answer:
          "A empresa fica sujeita a multas, embargo e até interdição da atividade. Regularizar o quanto antes evita essas penalidades.",
      },
    ],
  },
  {
    slug: "vigilancia-sanitaria",
    name: "Vigilância Sanitária",
    title: "Licença sanitária e Vigilância Sanitária em São Paulo",
    metaTitle: "Licença sanitária em São Paulo | Alvará sanitário e Vigilância Sanitária",
    metaDescription:
      "Licença sanitária (alvará sanitário) e cadastro na Vigilância Sanitária para clínicas, restaurantes, salões e indústrias de alimentos em São Paulo e região. Documentação e acompanhamento do processo.",
    intro: [
      "Atividades ligadas à saúde, alimentação, estética e produtos de interesse da saúde precisam estar regulares na Vigilância Sanitária para funcionar.",
      "Dependendo da atividade, é exigida a licença sanitária, também chamada de alvará sanitário, ou apenas o cadastro no órgão. A D'Lima Engenharia identifica o que se aplica, prepara a documentação e acompanha o processo.",
    ],
    whoNeeds: [
      "Clínicas, consultórios e laboratórios",
      "Restaurantes, bares e indústrias de alimentos",
      "Salões de beleza e clínicas de estética",
      "Farmácias, distribuidoras e transportadoras de produtos de saúde",
    ],
    includes: [
      { title: "Licença sanitária", text: "Obtenção da licença sanitária (alvará sanitário) para a atividade." },
      { title: "Cadastro", text: "Cadastro na Vigilância Sanitária para atividades que exigem apenas registro." },
      { title: "Renovação e alterações", text: "Renovação e atualização em caso de mudança de endereço, área ou atividade." },
      { title: "Adequações", text: "Orientação sobre as adequações exigidas na inspeção sanitária." },
    ],
    steps: [
      { title: "Análise", text: "Verificação da atividade e do que a Vigilância Sanitária exige." },
      { title: "Documentação", text: "Preparação dos documentos e informações técnicas." },
      { title: "Protocolo", text: "Abertura do processo no órgão responsável." },
      { title: "Liberação", text: "Acompanhamento da inspeção até a emissão da licença." },
    ],
    faq: [
      {
        question: "Quem precisa de licença sanitária?",
        answer:
          "Atividades que podem afetar a saúde da população, como serviços de saúde, alimentação, estética e fabricação ou venda de produtos de interesse da saúde. Algumas atividades precisam apenas de cadastro na Vigilância Sanitária.",
      },
      {
        question: "Licença sanitária e alvará sanitário são a mesma coisa?",
        answer:
          "Sim. Alvará sanitário é o nome popular da licença sanitária, emitida pela Vigilância Sanitária.",
      },
      {
        question: "Qual é a diferença entre licença de funcionamento e licença sanitária?",
        answer:
          "A licença de funcionamento é emitida pela prefeitura e autoriza a atividade no endereço. A licença sanitária é emitida pela Vigilância Sanitária e é exigida, além dela, para atividades que podem afetar a saúde.",
      },
    ],
  },
  {
    slug: "certificado-digital",
    name: "Certificado Digital",
    title: "Certificado digital e-CPF e e-CNPJ",
    metaTitle: "Certificado digital e-CPF e e-CNPJ em São Paulo | Pessoa física e jurídica",
    metaDescription:
      "Certificado digital para pessoa física (e-CPF) e pessoa jurídica (e-CNPJ). Emissão e renovação para assinar documentos e acessar a Receita Federal e outros sistemas do governo.",
    intro: [
      "O certificado digital funciona como uma identidade eletrônica. Com ele, você assina documentos com validade jurídica e acessa sistemas da Receita Federal, da prefeitura e de outros órgãos.",
      "A D'Lima Engenharia emite e renova o certificado digital para pessoa física (e-CPF) e pessoa jurídica (e-CNPJ), com atendimento personalizado do pedido à liberação.",
    ],
    whoNeeds: [
      "Empresas que emitem nota fiscal ou usam o eSocial",
      "Profissionais que assinam documentos digitalmente",
      "Quem acessa sistemas da Receita Federal e da prefeitura",
      "Quem está com o certificado vencendo",
    ],
    includes: [
      { title: "e-CPF", text: "Certificado digital para pessoa física." },
      { title: "e-CNPJ", text: "Certificado digital para pessoa jurídica." },
      { title: "Emissão", text: "Orientação sobre os documentos e acompanhamento até a liberação." },
      { title: "Renovação", text: "Renovação do certificado antes do vencimento." },
    ],
    steps: [
      { title: "Contato", text: "Você informa se precisa de e-CPF ou e-CNPJ." },
      { title: "Documentos", text: "Orientação sobre os documentos necessários." },
      { title: "Validação", text: "Confirmação da identidade do titular." },
      { title: "Emissão", text: "Liberação do certificado para uso." },
    ],
    faq: [
      {
        question: "Para que serve o certificado digital?",
        answer:
          "O certificado digital funciona como uma identidade eletrônica. Ele permite assinar documentos com validade jurídica e acessar sistemas da Receita Federal, da prefeitura e de outros órgãos.",
      },
      {
        question: "Qual é a diferença entre e-CPF e e-CNPJ?",
        answer:
          "O e-CPF identifica uma pessoa física. O e-CNPJ identifica uma empresa e é usado, por exemplo, para emitir nota fiscal e cumprir obrigações fiscais e trabalhistas.",
      },
      {
        question: "O certificado digital vence?",
        answer:
          "Sim. O certificado tem prazo de validade e precisa ser renovado para continuar funcionando. Renovar antes do vencimento evita interrupções na empresa.",
      },
    ],
  },
  {
    slug: "regularizacao-de-imoveis",
    name: "Regularização de Imóveis",
    title: "Regularização de imóveis em São Paulo: Habite-se, Anistia e usucapião",
    metaTitle: "Regularização de imóveis em São Paulo | Habite-se e Anistia",
    metaDescription:
      "Regularize imóveis residenciais, comerciais e industriais em São Paulo. Habite-se, Anistia e suporte técnico para usucapião. Valorize o seu imóvel e evite problemas na venda.",
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
      { title: "Projeto na prefeitura", text: "Medição do imóvel, projeto de regularização e aprovação junto à prefeitura." },
      { title: "Anistia", text: "Análise de enquadramento e processo de regularização pelo programa, quando aplicável." },
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
        question: "O que é a Anistia?",
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
    name: "Acessibilidade e AVS",
    title: "Acessibilidade e AVS: projetos e certificados para o seu imóvel",
    metaTitle: "Acessibilidade e AVS em São Paulo | Projeto, certificado e NBR 9050",
    metaDescription:
      "Projetos de acessibilidade, certificado de acessibilidade e segurança e AVS (Auto de Verificação de Segurança) para imóveis em São Paulo, de acordo com a NBR 9050.",
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
      { title: "AVS", text: "Auto de Verificação de Segurança, junto ao Contru e à prefeitura." },
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
      {
        question: "O que é o AVS?",
        answer:
          "O AVS (Auto de Verificação de Segurança) é o documento da Prefeitura de São Paulo, com análise do Contru, que atesta as condições de segurança de edificações, principalmente as que recebem público. A D'Lima Engenharia prepara o projeto e acompanha o processo.",
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
];

export function getServicePage(slug) {
  return servicePages.find((page) => page.slug === slug);
}
