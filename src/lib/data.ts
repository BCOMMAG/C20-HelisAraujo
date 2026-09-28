export interface OfficeInfo {
  name: string;
  shortName: string;
  lawyer: string;
  role: string;
  oab: string;
  oabText: string;
  tagline: string;
  slogan: string;
  experienceYears: string;
  phone: string;
  whatsapp: string;
  whatsappNumber: string;
  whatsappFormatted: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  facebookHandle: string;
  linkedinUrl: string;
  address: string;
  addressShort: string;
  city: string;
  state: string;
  mapsDirectionsUrl: string;
  mapsEmbedUrl: string;
  schedule: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  workingHours: {
    weekdays: string;
    weekends: string;
  };
}

export const OFFICE_INFO: OfficeInfo = {
  name: "Helis Kawamura Araújo | Advocacia",
  shortName: "Helis Araújo Advocacia",
  lawyer: "Dra. Helis Kawamura Araújo",
  role: "Advogada Especialista em Direito das Famílias e Alienação Parental",
  oab: "Atuação ética conforme Código de Ética e Provimento nº 205/2021 CFOAB",
  oabText:
    "Atuação ética em estrita observância ao Código de Ética e Disciplina da OAB e ao Provimento nº 205/2021 do Conselho Federal da OAB.",
  tagline:
    "Defesa estratégica, técnica e humanizada dos direitos de pais e filhos em causas de alta complexidade.",
  slogan:
    "Protegendo quem você mais ama com rigor jurídico, firmeza em juízo e sensibilidade humana.",
  experienceYears: "desde 2012",
  phone: "(41) 99994-7205",
  whatsapp: "5541999947205",
  whatsappNumber: "5541999947205",
  whatsappFormatted: "(41) 99994-7205",
  whatsappUrl:
    "https://wa.me/5541999947205?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20com%20a%20advogada.",
  instagramUrl: "https://www.instagram.com/direito.paisefilhos",
  instagramHandle: "@direito.paisefilhos",
  facebookUrl: "https://www.facebook.com/profile.php?id=100085619437849#",
  facebookHandle: "Direito Pais e Filhos",
  linkedinUrl: "",
  address:
    "Avenida Winston Churchill, nº 1824, sala 912, 9º andar, Curitiba - PR, 81130-000",
  addressShort: "Av. Winston Churchill, 1824, sl 912 - Capão Raso, Curitiba/PR",
  city: "Curitiba",
  state: "PR",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Avenida+Winston+Churchill,+1824,+Curitiba+-+PR,+81130-000",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Avenida+Winston+Churchill,+1824+-+Curitiba+-+PR,+81130-000&t=&z=16&ie=UTF8&iwloc=&output=embed",
  schedule: {
    weekdays: "Segunda a Sexta: 09:00 às 19:00",
    saturday: "Sábado: Fechado",
    sunday: "Domingo: Fechado",
  },
  workingHours: {
    weekdays: "Segunda a Sexta-feira: 09:00 às 19:00",
    weekends: "Sábado e Domingo: Fechado",
  },
};

export interface LawyerProfile {
  name: string;
  role: string;
  graduation: string;
  experience: string;
  bio: string[];
  careerHighlights: string[];
  personalNotes: string[];
  differentials: string[];
}

export const LAWYER_PROFILE: LawyerProfile = {
  name: "Dra. Helis Kawamura Araújo",
  role: "Advogada Especialista em Direito das Famílias | Advogada dos Pais | Alta Complexidade",
  graduation:
    "Bacharel em Direito pela Pontifícia Universidade Católica do Paraná (PUC/PR) • Formada em 2012",
  experience: "Advocacia atuante e especializada desde 2012",
  bio: [
    "Dra. Helis Kawamura Araújo é advogada desde 2012, graduada pela renomada Pontifícia Universidade Católica do Paraná (PUC/PR). Sua área de vocação e amor sempre foi o Direito das Famílias, fundamentada na certeza de que através do trabalho jurídico as pessoas readquirem a esperança e a oportunidade real de viver com dignidade e paz.",
    "Atuou como defensora dativa durante muitos anos nas comarcas de Piraquara, São José dos Pinhais, Curitiba, Colombo e Fazenda Rio Grande, forjando sólida combatividade forense e o compromisso ético inegociável de que os vulneráveis e desfavorecidos financeiramente são plenamente dignos de uma defesa técnica minuciosa e intransigente. Até hoje, continua atuando com fervor em prol daqueles que necessitam de auxílio jurídico em momentos cruciais.",
    "Especializada em causas de alta complexidade — com atuação proeminente na defesa dos direitos de pais e na proteção integral dos filhos —, sua banca atua de forma cirúrgica em ações de alienação parental, falsas acusações, medidas protetivas infundadas, fixação e revisão de alimentos, guarda e convivência familiar. Seu objetivo é demonstrar, por meio de fundamentos jurídicos consistentes e provas técnicas incontestáveis, qual dos genitores está mais preparado para exercer a guarda equilibrada no superior benefício do infante.",
  ],
  careerHighlights: [
    "Formada em Direito pela Pontifícia Universidade Católica do Paraná (PUC/PR) em 2012.",
    "Advocacia ininterrupta desde 2012 com sólida experiência forense em audiências e processos contenciosos.",
    "Longa e honrosa atuação como defensora dativa nas comarcas de Curitiba, Piraquara, São José dos Pinhais, Colombo e Fazenda Rio Grande.",
    "Especialização prática em causas de alta complexidade: Alienação Parental, Falsas Acusações, Guarda Compartilhada e Convivência.",
  ],
  personalNotes: [
    "Advocacia humanizada e combativa: acolhemos com empatia pais que vivem angústia diária perante o risco de afastamento de seus filhos.",
    "Defesa técnica da criança e do adolescente: entremeio a qualquer litígio, a maior satisfação é ver a criança em braços acolhedores e protegida de ambientes inadequados.",
    "Rigor probatório absoluto: combate a narrativas forjadas através de provas documentais, perícias forenses, estudo psicossocial e depoimento especial.",
    "Atendimento próximo e transparente: comunicação ágil, sem juridiquês e com zelo constante em cada etapa processual.",
  ],
  differentials: [
    "Atendimento Direto com a Titular: suporte estratégico, atencioso e sem intermediários via WhatsApp e reuniões reservadas.",
    "Atuação Híbrida Completa: sede física estruturada na Av. Winston Churchill (Curitiba/PR) e consultoria online para famílias em todo o Brasil.",
    "Estratégia Processual de Alta Complexidade: domínio profundo da Lei da Alienação Parental (Lei 12.318/2010 e Lei 14.340/2022) e da Lei da Guarda Compartilhada (Lei 13.058/2014).",
    "Conformidade Ética OAB: respeito integral ao Código de Ética e Disciplina e ao Provimento nº 205/2021 do Conselho Federal da OAB.",
  ],
};

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  featured: boolean;
  highlightText: string;
  coverageList: string[];
  casesSummary: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "alienacao-parental",
    title: "Alienação Parental & Proteção de Vínculo",
    shortDesc:
      "Atuação estratégica e urgente contra condutas de desconstrução afetiva, obstrução de convivência e manipulação psíquica dos filhos.",
    iconName: "ShieldCheck",
    featured: true,
    highlightText:
      "Lei 12.318/2010 com alterações da Lei 14.340/2022: medidas cautelares imediatas, imposição de multas e inversão liminar de guarda.",
    coverageList: [
      "Identificação precoce e estancamento de atos de alienação parental (art. 2º da Lei 12.318/2010)",
      "Ações com pedidos liminares para ampliação do regime de convivência a favor do genitor prejudicado",
      "Requerimento de perícias psicológicas e biopsicossociais forenses urgentes com equipe multidisciplinar",
      "Fixação de multas diárias coercitivas (astreintes) em caso de descumprimento de contato telefônico ou visitas",
      "Inversão da guarda da criança em situações graves comprovadas de desconstrução do vínculo parental",
      "Advertência formal e encaminhamento obrigatório do genitor alienador a acompanhamento psicológico",
      "Garantia irrestrita do direito de convivência da família extensa, avós e parentes consanguíneos",
    ],
    casesSummary:
      "Atuamos com rapidez cirúrgica para impedir que a passagem do tempo destrua o laço de afeto entre pai e filho, instruindo o processo com robustez probatória documental e pericial.",
  },
  {
    id: "falsas-acusacoes-protetivas",
    title: "Falsas Acusações & Medidas Protetivas",
    shortDesc:
      "Defesa técnica minuciosa contra imputações infundadas e desconstituição de medidas protetivas forjadas para afastar o genitor da residência.",
    iconName: "Scale",
    featured: true,
    highlightText:
      "Rigor probatório absoluto: apuração judicial com exames periciais forenses, depoimento especial e proteção integral do contraditório.",
    coverageList: [
      "Defesa imediata contra denúncias infundadas de agressão, abuso ou violência psicológica em disputas de guarda",
      "Revogação e adequação de Medidas Protetivas de Urgência forjadas exclusivamente para alienar os filhos",
      "Exigência do estrito cumprimento do procedimento de Depoimento Especial da criança (Lei 13.431/2017)",
      "Acompanhamento técnico de avaliações psiquiátricas e laudos psicossociais realizados por peritos judiciais",
      "Formulação de quesitos periciais específicos e indicação de assistente técnico especializado na defesa",
      "Responsabilização civil e penal cabível por litigância de má-fé e denunciação caluniosa (art. 339 do CP)",
      "Garantia do Segredo de Justiça absoluto (art. 189, II do CPC) para blindar a privacidade e a honra da família",
    ],
    casesSummary:
      "Demonstramos a verdade dos fatos desconstruindo narrativas inverídicas mediante provas documentais, cronologia fática, registros digitais e perícias especializadas no Judiciário.",
  },
  {
    id: "guarda-convivencia",
    title: "Guarda de Filhos & Convivência Familiar",
    shortDesc:
      "Estruturação equilibrada de convivência familiar e guarda, demonstrando qual dos genitores oferece o melhor ambiente de desenvolvimento à criança.",
    iconName: "Heart",
    featured: true,
    highlightText:
      "Lei da Guarda Compartilhada (Lei 13.058/2014): divisão equilibrada do poder decisório e primazia do melhor interesse do infante.",
    coverageList: [
      "Ação de Fixação e Modificação de Guarda com foco na higidez emocional e estabilidade da rotina da criança",
      "Implementação efetiva da Guarda Compartilhada obrigatória por lei, pacificando que atritos entre adultos não a impedem",
      "Definição estratégica e segura da residência-base da criança e distribuição justa das responsabilidades",
      "Regulamentação de calendário equilibrado de convivência (finais de semana alternados, dias úteis e férias)",
      "Proteção de convivência em datas comemorativas solenes (Dia dos Pais, aniversários, Natal e Ano Novo)",
      "Ação cautelar de busca e apreensão de menor em hipóteses graves de retenção indevida e recusa de devolução",
      "Suprimento judicial de autorização para viagens nacionais e internacionais quando houver negativa injustificada",
    ],
    casesSummary:
      "Comprovamos em juízo o preparo afetivo, moral e material do genitor para proporcionar um lar acolhedor e equilibrado, assegurando o direito de convivência sadia de pais e filhos.",
  },
  {
    id: "pensao-alimenticia",
    title: "Pensão Alimentícia & Revisão de Valores",
    shortDesc:
      "Fixação proporcional, execução coercitiva e revisão de pensão alimentícia pautadas na real capacidade econômica e despesas vitais dos filhos.",
    iconName: "Award",
    featured: true,
    highlightText:
      "Aplicação criteriosa do trinômio necessidade-possibilidade-proporcionalidade e proibição de barganha com visitas.",
    coverageList: [
      "Ação de Fixação de Alimentos com arbitramento liminar de alimentos provisórios (Lei 5.478/1968)",
      "Execução de alimentos sob pena de prisão civil (art. 528 do CPC) a partir de uma única parcela inadimplida",
      "Execução sob o rito de penhora de bens móveis, imóveis, contas bancárias, aplicações e bloqueio judicial de CNH",
      "Ação Revisional de Alimentos para minoração (queda de faturamento) ou majoração (elevação das necessidades)",
      "Ação de Exoneração de Alimentos quando atingida a maioridade com independência financeira comprovada",
      "Quebra judicial de sigilo fiscal, bancário e apuração de sinais exteriores de riqueza de alimentantes ocultadores",
      "Garantia legal expressa de que o dever de alimentos não pode ser usado como moeda de troca pelo convívio parental",
    ],
    casesSummary:
      "Defendemos uma partilha alimentar justa e equilibrada entre os genitores, garantindo educação, moradia e saúde aos filhos sem permitir o sufocamento financeiro desproporcional.",
  },
];

export interface Review {
  author: string;
  rating: number;
  timeAgo: string;
  text: string;
  source: string;
  details?: string;
}

export const REVIEWS: Review[] = [
  {
    author: "Mateus Loures",
    rating: 5,
    timeAgo: "Há 9 meses",
    text: "A Dra. Helis Araujo teve uma atuação impecável nos dois processos em que nos representou na Vara de Família. Com elevado domínio técnico, estratégia jurídica precisa e sensibilidade na condução das demandas, foi fundamental para que alcançássemos a vitória.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Crislaine Martins",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Estamos muito felizes com o trabalho da Dra. Helis e de toda a sua equipe. Eu e meu marido fomos sempre atendidos com atenção, carinho e profissionalismo. A dedicação e a clareza em cada etapa do processo nos transmitiram segurança do início ao fim.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Nilson Lobo",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Eu me senti muito bem representado e seguro pela Doutora. Sua narrativa e a forma de se impor em juízo foi excelente. Tenho certeza que escolhi a pessoa certa para ajudar meu filho: se preocupa realmente com o caso e não se deixa levar por falsas acusações.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Marcos Bueno",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Sou de São Paulo e ter conhecido a Dra. Helis me trouxe segurança e muito esclarecimento. Em duas reuniões ela pontuou com exatidão problemas que precisavam ser contornados na condução do processo do meu filho para atingirmos o êxito. Recomendo com toda certeza!",
    source: "Google Reviews",
    details: "Local Guide • Google Verificado",
  },
  {
    author: "Jhonatan Ducati",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Simplesmente a melhor advogada que já cruzou por mim. Tenho certeza que foi Deus que apresentou a Dra. Helis a mim e ao meu filho. Antes dela outros advogados passaram e o processo não andou; com ela tivemos acolhimento, respeito e resolução impecável!",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Daniel Moledo",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Depois que conheci não só o seu trabalho, mas seus nobres princípios e valores nessa luta pelos direitos dos filhos e dos pais, fico com a total segurança de estar com a melhor advogada da área de família. Trabalho brilhante!",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Wanny Vieira",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Dra Helis é a melhor advogada que existe para defender os direitos de pais e filhos! Eu não me canso de agradecer por tudo que ela tem feito pela minha família. Se pudesse avaliar milhões de vezes daria nota máxima sempre!",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Luciano Fogaça",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Profissional extremamente dedicada e incisiva em prestar uma defesa adequada ao cliente, procurando encurtar os prazos e agilizar as decisões com total transparência e alinhamento prévio das petições. Tive uma excelente experiência.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Favio Correa",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Que profissional segura, preparada, impecável! Uma conduta serena, maestria é a palavra certa. Preparo, conhecimento técnico e foco exclusivo em cada detalhe, vivenciando de corpo e alma aquilo a que se propõe.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Rejane Cristina",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Dra. Helis é uma profissional extremamente competente, atenciosa e experiente. Nos passou segurança e confiança desde o primeiro contato. Pela primeira vez sentimos que nossos direitos estavam em mãos verdadeiramente seguras.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Carlos Emidio Junior",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Fui desde o começo muito bem atendido pela Dra. Helis e tive todas as dúvidas sanadas. O escritório atendeu minhas demandas com êxito e tive uma verdadeira aliada na batalha judicial com vitória e proteção ao meu caso.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Ranon Filipe",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Desde a consulta inicial, senti uma atenção e um profissionalismo por parte da Dra. Helis que ainda não havia presenciado em outros profissionais. Domínio completo e acolhimento humano exemplar.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Osires Neto",
    rating: 5,
    timeAgo: "Há 2 anos",
    text: "Gostaria de expressar minha profunda gratidão à Dra. Helis Araujo, que se tornou uma verdadeira guerreira ao meu lado nos processos que enfrentei. Sua dedicação, competência e sensibilidade foram essenciais para alcançarmos a vitória.",
    source: "Google Reviews",
    details: "Local Guide • Google Verificado",
  },
  {
    author: "Tassio Adriano",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "A Dra. Helis tem uma atuação brilhante em audiências. Ela é técnica, cirúrgica em suas colocações e sabe representar como ninguém os direitos da criança e do adolescente. Gratidão pelo empenho na defesa dos nossos direitos!",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Carlos Galeti",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "As lutas que nós enfrentamos no judiciário em causas de família são duríssimas. Minha esperança se esvaía até encontrar a Dra. Helis. Ela acolheu meu caso, traçou a estratégia certa e lutou pelo meu direito com toda a dedicação.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Tamara Lopes",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Desde o início demonstrou grande profissionalismo, conhecimento técnico e dedicação ao caso. Sempre atenciosa e disposta a esclarecer todas as dúvidas, fez com que todo o processo fosse mais compreensível e tranquilo.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Milady Espindula",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Tenho só elogios para a Dra. Helis e equipe. Demonstra seriedade, uma sabedoria técnica acima da média, é extremamente justa e domina com excelência seu trabalho.",
    source: "Google Reviews",
    details: "Local Guide • Google Verificado",
  },
  {
    author: "Dulce Pereira",
    rating: 5,
    timeAgo: "Há 2 anos",
    text: "Dra. Helis nos surpreendeu muito acima do que esperávamos, com toda a humanidade no atendimento, experiência e seu profissionalismo. Nunca tivemos um atendimento com tamanho entendimento e clareza do assunto.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Jackson Santos",
    rating: 5,
    timeAgo: "Há 4 anos",
    text: "Excelente profissional a quem confio os cuidados da minha família! Seu trabalho é baseado 100% no que é melhor para a criança, pois o filho é sempre a prioridade máxima que deve ser protegida.",
    source: "Google Reviews",
    details: "Local Guide • Google Verificado",
  },
  {
    author: "Junior Barbosa",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Admiro muito o trabalho da Dra. Helis. Ela me deu esperanças para lutar pela convivência e guarda do meu filho na busca do que é melhor para ele. Muita gratidão pela paciência e atenção no momento de maior estresse.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Daniel Machado",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Foi um atendimento excepcional. Eu como pai e advogado passando por uma situação difícil sei da dificuldade de encontrar profissional especialista que sabe o que está fazendo. A Dra. Helis é extremamente técnica e assertiva.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Rafael Goncalves",
    rating: 5,
    timeAgo: "Há 2 anos",
    text: "Sensação de tranquilidade de que o melhor para os meus filhos está sendo feito. Todos os interesses foram priorizados e defendidos pela Dra. Helis com maestria. Excelente trabalho!",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Sofia Bemben",
    rating: 5,
    timeAgo: "Há 4 anos",
    text: "Gratidão é o sentimento por ter tido a Dra. Helis ao meu lado num processo difícil, cheio de obstáculos, mas que nos levou à vitória. Trabalho impecável e ágil!",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "John Wilker",
    rating: 5,
    timeAgo: "Há 1 ano",
    text: "Hoje recebi a melhor notícia após anos de luta: consegui a guarda compartilhada da minha filha! Graças ao trabalho incansável da Dra. Helis, com muita dedicação técnica e amparo humano.",
    source: "Google Reviews",
    details: "Local Guide • Google Verificado",
  },
  {
    author: "Vivian Syring",
    rating: 5,
    timeAgo: "Há 4 anos",
    text: "Excelente profissional! Dra. Helis é uma advogada extremamente competente e sensível, com total domínio na área de família. Tenho total confiança em seu trabalho brilhante.",
    source: "Google Reviews",
    details: "Google Verificado",
  },
  {
    author: "Alan Danaga",
    rating: 5,
    timeAgo: "Há 2 anos",
    text: "Inacreditável o profissionalismo e a percepção desta advogada. Com apenas alguns dias analisando o caso conseguiu identificar o que outros não enxergaram em anos. Visão processual impressionante!",
    source: "Google Reviews",
    details: "Google Verificado",
  },
];

export interface EducationalArticle {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export const ARTICLES: EducationalArticle[] = [
  {
    id: "artigo-alienacao-parental-lei",
    number: "01",
    title:
      "Alienação Parental na Prática: Condutas Tipificadas pela Lei 12.318/2010 e Medidas Judiciais Urgentes",
    category: "Alienação Parental",
    readTime: "4 min de leitura",
    summary:
      "Conheça as condutas que caracterizam a alienação parental, as sanções civis aplicáveis pelo juiz e como medidas cautelares preservam o vínculo com os filhos.",
    content: [
      "A alienação parental é conceituada pelo art. 2º da Lei 12.318/2010 (com as importantes atualizações da Lei 14.340/2022) como toda interferência na formação psicológica da criança ou do adolescente promovida ou induzida por um dos genitores para que desmoralize, repudie ou destrua os vínculos afetivos com o outro genitor.",
      "Entre as práticas mais comuns tipificadas pela legislação estão desqualificar reiteradamente a conduta do genitor no exercício da paternidade, dificultar o contato telefônico e digital, obstruir o exercício do direito regulamentado de convivência familiar, omitir informações escolares e médicas de forma deliberada e apresentar falsas denúncias de abuso.",
      "Identificada a conduta alienadora, o Poder Judiciário dispõe de instrumentos enérgicos e urgentes: advertência formal ao alienador, ampliação compulsória do regime de convivência a favor do genitor prejudicado, fixação de multas diárias coercitivas (astreintes), determinação de acompanhamento psicológico forense e, nos casos de reiteração gravosa, a imediata inversão liminar da guarda do infante.",
    ],
    oabDisclaimer:
      "Conteúdo puramente educativo com finalidade de esclarecimento social, em estrita observância ao Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-falsas-acusacoes-pericia",
    number: "02",
    title:
      "Falsas Acusações em Varas de Família: O Papel Decisivo da Perícia Forense e do Depoimento Especial",
    category: "Defesa dos Pais & Falsas Acusações",
    readTime: "5 min de leitura",
    summary:
      "Como perícias forenses, assistência técnica e o rigor da Lei 13.431/2017 impedem o uso indevido de medidas protetivas para afastar pais de seus filhos.",
    content: [
      "Em disputas de alta complexidade na Vara de Família, um dos cenários mais desoladores enfrentados por pais é o manejo de denúncias forjadas de agressão ou abusos como estratagema ardiloso para obter o afastamento do lar e impedir o contato com a criança por meio de medidas protetivas infundadas.",
      "O enfrentamento desse ilícito exige rigor técnico irretocável. A legislação federal impõe o rito obrigatório do Depoimento Especial (Lei 13.431/2017), assegurando que a criança seja ouvida em ambiente acolhedor por psicólogos concursados e capacitados, evitando perguntas indutivas ou contaminações de memória provocadas pelo genitor alienante.",
      "A atuação estratégica da defesa compreende a formulação cirúrgica de quesitos periciais, o acompanhamento por assistente técnico de confiança e a requisição de laudos biopsicossociais forenses, desmascarando a inconsistência temporal e material dos fatos alegados e restaurando a verdade perante o magistrado e o Ministério Público.",
    ],
    oabDisclaimer:
      "Artigo informativo de orientação jurídica, elaborado nos termos do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-guarda-compartilhada-realidade",
    number: "03",
    title:
      "Guarda Compartilhada é Obrigatória por Lei: Atritos entre Adultos Não Justificam Exclusão",
    category: "Guarda & Convivência",
    readTime: "4 min de leitura",
    summary:
      "A jurisprudência pacificada do STJ sobre a Lei 13.058/2014: divisão igualitária do poder familiar e residência-base estável para os filhos.",
    content: [
      "Desde a vigência da Lei 13.058/2014, a Guarda Compartilhada é a regra legal impositiva no ordenamento jurídico brasileiro. O Superior Tribunal de Justiça (STJ) já pacificou entendimento de que eventuais desavenças, desentendimentos ou má relação entre os pais após o término da sociedade conjugal não servem como justificativa legítima para a imposição da guarda unilateral.",
      "Existe frequente confusão entre guarda compartilhada e residência alternada. Na guarda compartilhada, ambos os genitores detêm idêntico poder decisório sobre todos os aspectos cruciais do desenvolvimento do menor (escolha de instituição de ensino, autorização de tratamentos de saúde, viagens e religião), fixando-se a residência-base da criança com um deles para resguardar a estabilidade da rotina escolar.",
      "A guarda unilateral é admitida exclusivamente em circunstâncias gravíssimas e expressamente comprovadas, como situações de abandono voluntário, maus-tratos ou incapacidade absoluta, preservando sempre o superior interesse do infante.",
    ],
    oabDisclaimer:
      "Material didático elaborado em conformidade com as diretrizes éticas do Provimento 205/2021 do Conselho Federal da OAB.",
  },
  {
    id: "artigo-visitas-nao-sao-moeda-de-troca",
    number: "04",
    title:
      "Visitas Não São Moeda de Barganha: É Proibido Bloquear o Convívio por Disputas Financeiras",
    category: "Direito de Convivência",
    readTime: "3 min de leitura",
    summary:
      "A convivência familiar é um direito fundamental da própria criança: por que atrasos na pensão não autorizam a retenção ou cancelamento de visitas.",
    content: [
      "Uma das dúvidas mais recorrentes na prática das relações familiares é se um genitor pode proibir as visitas e o convívio do filho quando houver atraso no pagamento da pensão alimentícia. A resposta jurídica é taxativa: não, em hipótese alguma.",
      "O direito de convivência familiar não é uma recompensa pecuniária aos pais, mas sim um direito fundamental protegido constitucionalmente pertencente à própria criança (art. 227 da CF e art. 19 do ECA). A legislação veda categoricamente o uso do calendário de convívio como instrumento de coação financeira ou chantagem afetiva.",
      "Caso ocorra inadimplemento no dever alimentar, o caminho legal estrito e exclusivo é o ajuizamento da Execução de Alimentos (pelo rito da prisão civil ou penhora). A retenção unilateral injustificada da criança ou a frustração de visitas configura ato manifesto de alienação parental, sujeitando o infrator a sanções judiciais imediatas.",
    ],
    oabDisclaimer:
      "Texto puramente informativo com finalidade de esclarecimento público, em cumprimento ao Código de Ética da OAB.",
  },
  {
    id: "artigo-pensao-alimenticia-criterios",
    number: "05",
    title:
      "Pensão Alimentícia Justa: Como Funciona o Trinômio Legal e os Ritos de Execução por Prisão e Penhora",
    category: "Alimentos & Execução",
    readTime: "4 min de leitura",
    summary:
      "Desmistificando os '30% automáticos', critérios de proporcionalidade para autônomos e os procedimentos coercitivos em caso de inadimplência.",
    content: [
      "Não existe no ordenamento jurídico brasileiro qualquer dispositivo legal que determine a fixação automática de 30% dos rendimentos a título de alimentos. O arbitramento da pensão obedece estritamente ao trinômio necessidade (do alimentando), possibilidade econômica (do alimentante) e proporcionalidade da partilha entre os genitores.",
      "As despesas dos filhos englobam não apenas alimentação básica, mas habitação proporcional, vestuário, educação (mensalidades, materiais e transporte escolar), plano de saúde, medicamentos e momentos de lazer compatíveis com a condição social da família.",
      "Na hipótese de inadimplemento, o atraso de uma única parcela mensal já autoriza a execução judicial pelo rito da prisão civil (art. 528 do CPC), que comina de 1 a 3 meses de reclusão em regime fechado. Para débitos pretéritos acumulados, utiliza-se a penhora de saldos bancários via SISBAJUD, bloqueio de veículos (RENAJUD), penhora de quotas empresariais e suspensão de passaporte ou CNH.",
    ],
    oabDisclaimer:
      "Artigo pedagógico de utilidade pública, nos termos do Provimento 205/2021 do CFOAB.",
  },
];

export const EDUCATIONAL_TOPICS = ARTICLES;

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WORK_PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Acolhimento & Diagnóstico Familiar",
    subtitle: "Atendimento direto com a advogada via WhatsApp",
    description:
      "Escuta acolhedora, humana e em sigilo absoluto sobre a dor e o momento que você está vivenciando com seus filhos, mapeando o histórico familiar e os riscos processuais imediatos.",
  },
  {
    number: "02",
    title: "Levantamento de Provas & Avaliação Técnica",
    subtitle: "Estruturação probatória documental e pericial",
    description:
      "Análise minuciosa de mensagens, áudios, vídeos, notificações, laudos médicos/psicológicos anteriores e registros escolares, separando fatos verídicos de narrativas infundadas.",
  },
  {
    number: "03",
    title: "Estratégia Processual & Ação Judicial Firme",
    subtitle: "Atuação ágil perante as Varas de Família",
    description:
      "Ajuizamento célere de medidas liminares cautelares para estancamento de alienação, garantia de convívio com os filhos, revogação de protetivas indevidas e fixação equitativa de alimentos.",
  },
  {
    number: "04",
    title: "Acompanhamento Contínuo Sem Juridiquês",
    subtitle: "Tranquilidade e suporte permanente ao cliente",
    description:
      "Atualizações transparentes de cada despacho, audiência e laudo emitido pela equipe multidisciplinar do Tribunal, com suporte próximo da advogada titular até a decisão final.",
  },
];

export const WORK_STEPS = WORK_PROCESS_STEPS;

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "alienacao-parental",
    label: "Alienação Parental",
    iconName: "ShieldCheck",
    items: [
      {
        id: "faq-ap-1",
        question:
          "O que fazer se o outro genitor está inventando mentiras para a criança rejeitar o pai?",
        answer:
          "Essa conduta configura expressamente alienação parental (art. 2º da Lei 12.318/2010). É fundamental reunir provas imediatas (mensagens de texto, áudios, testemunhas e relatos escolares) e ajuizar ação com pedido liminar de urgência para fixação de acompanhamento psicológico pericial e aplicação de multas ao genitor alienante.",
      },
      {
        id: "faq-ap-2",
        question:
          "O genitor alienador pode perder a guarda do filho por alienação parental comprovada?",
        answer:
          "Sim! A Lei 12.318/2010 com as alterações da Lei 14.340/2022 elenca a inversão da guarda como uma das sanções mais severas aplicáveis pelo magistrado quando comprovado que o alienador persiste na tentativa de destruir o vínculo afetivo da criança com o outro genitor.",
      },
      {
        id: "faq-ap-3",
        question:
          "Os avós e tios podem entrar na Justiça para garantir a convivência com as crianças?",
        answer:
          "Sim! O Código Civil e a Lei de Alienação Parental protegem a chamada 'família extensa'. Os avós e parentes têm direito autônomo de postular a regulamentação do regime de convivência e visitas para preservar os laços consanguíneos e afetivos com os netos e sobrinhos.",
      },
      {
        id: "faq-ap-4",
        question:
          "Qual é o tempo de resposta judicial quando há alienação parental em curso?",
        answer:
          "Por envolver perigo de dano irreparável ao desenvolvimento psicológico da criança, as ações de família com denúncia consistente de alienação parental tramitam com prioridade legal, permitindo decisões liminares de urgência pelo juiz logo no início do processo.",
      },
    ],
  },
  {
    id: "falsas-acusacoes",
    label: "Falsas Acusações & Protetivas",
    iconName: "Scale",
    items: [
      {
        id: "faq-fa-1",
        question:
          "Fui falsamente acusado de agressão ou abuso durante o processo de divórcio. O que fazer?",
        answer:
          "Mantenha a calma, não faça contato direto com a parte contrária e contrate assistência jurídica especializada com urgência. A defesa técnica atuará para requerer perícia médica forense, estudo biopsicossocial com a criança e exame rigoroso pelo procedimento de Depoimento Especial (Lei 13.431/2017) para comprovar a inveracidade da acusação.",
      },
      {
        id: "faq-fa-2",
        question:
          "Uma Medida Protetiva de Urgência pode me impedir de ver meus filhos?",
        answer:
          "Frequentemente medidas protetivas incluem o afastamento do lar e fixação de raio de distanciamento da mãe, o que por reflexo pode suspender o contato com as crianças. A defesa atua de pronto no processo para demonstrar que os fatos não envolvem risco aos filhos e pleitear a preservação do regime de convivência em local neutro ou assistido.",
      },
      {
        id: "faq-fa-3",
        question:
          "Quem faz falsa acusação de crime no processo familiar pode ser punido criminalmente?",
        answer:
          "Sim. Quem dá causa à instauração de investigação policial, processo judicial ou inquérito civil imputando a alguém crime de que o sabe inocente comete o crime de Denunciação Caluniosa (art. 339 do Código Penal), além de responder por indenização civil por danos morais e materiais causados à honra do ofendido.",
      },
      {
        id: "faq-fa-4",
        question:
          "Os detalhes íntimos e acusações da minha família ficam públicos na internet?",
        answer:
          "Não! Conforme o art. 189, inciso II do Código de Processo Civil, todos os processos de Direito de Família tramitam obrigatoriamente sob Segredo de Justiça absoluto. Apenas as partes e seus advogados têm acesso aos autos, sendo punido com rigor qualquer vazamento.",
      },
    ],
  },
  {
    id: "guarda-convivencia",
    label: "Guarda & Convivência",
    iconName: "Heart",
    items: [
      {
        id: "faq-gc-1",
        question:
          "Se a mãe não quiser a Guarda Compartilhada, o pai ainda tem direito por lei?",
        answer:
          "Sim! A Guarda Compartilhada é a regra obrigatória fixada pela Lei 13.058/2014. O Superior Tribunal de Justiça (STJ) firmou jurisprudência unânime de que a discordância ou hostilidade entre os genitores não autoriza o juiz a negar a guarda compartilhada, pois o foco é o bem-estar do menor e o poder decisório igualitário.",
      },
      {
        id: "faq-gc-2",
        question:
          "A criança pode escolher no tribunal com qual dos pais ela quer morar?",
        answer:
          "Não de forma vinculante. Pelo ECA e pelo CPC, o menor dotado de discernimento (geralmente a partir dos 12 anos) tem o direito de ser ouvido perante a equipe multidisciplinar em ambiente protegido. O magistrado avalia a manifestação em conjunto com os laudos técnicos para verificar se há manipulação ou se atende ao melhor interesse do filho.",
      },
      {
        id: "faq-gc-3",
        question:
          "O que fazer se o outro genitor não cumpre os dias e horários de visitas combinados?",
        answer:
          "O descumprimento injustificado de calendário de convivência homologado em juízo autoriza o ajuizamento de execução de obrigação de fazer com pedido de imposição de multa diária (astreintes) por dia de atraso, compensação dos dias subtraídos e, em casos contumazes, a busca e apreensão da criança.",
      },
      {
        id: "faq-gc-4",
        question:
          "Guarda Compartilhada significa que a criança tem que dormir metade dos dias em cada casa?",
        answer:
          "Não. Guarda compartilhada refere-se à divisão dos deveres e das decisões da vida da criança (escola, médicos, educação). A residência-base principal da criança é fixada com um dos genitores para manter sua estabilidade rotineira, enquanto o outro desfruta de convivência ampla e periódica.",
      },
    ],
  },
  {
    id: "pensao-atendimento",
    label: "Pensão & Atendimento",
    iconName: "Award",
    items: [
      {
        id: "faq-pa-1",
        question:
          "A mãe pode proibir o pai de ver o filho porque a pensão está atrasada?",
        answer:
          "Não! A legislação brasileira proíbe terminantemente o uso das visitas como moeda de cobrança ou barganha financeira. A convivência com o pai é um direito fundamental da criança. A cobrança da pensão deve ser realizada estritamente pelas vias legais da execução de alimentos.",
      },
      {
        id: "faq-pa-2",
        question:
          "Quanto tempo de atraso de pensão alimentícia autoriza o pedido de prisão civil?",
        answer:
          "O atraso de uma única parcela mensal já autoriza o ajuizamento da Execução de Alimentos pelo rito da prisão civil (art. 528 do CPC). A dívida que autoriza a prisão compreende até as três prestações anteriores ao ajuizamento mais todas as que vencerem ao longo do processo.",
      },
      {
        id: "faq-pa-3",
        question:
          "O filho completou 18 anos semana passada. Já posso parar de pagar a pensão automaticamente?",
        answer:
          "Não! Conforme a Súmula 358 do STJ, o cancelamento da pensão alimentícia de filho maior exige o ajuizamento de Ação de Exoneração de Alimentos. Se o jovem estiver matriculado em faculdade ou curso profissionalizante e não tiver independência econômica, o dever alimentar costuma ser estendido até os 24 anos.",
      },
      {
        id: "faq-pa-4",
        question:
          "Como funciona o atendimento presencial e online com a Dra. Helis Kawamura Araújo?",
        answer:
          "Nosso atendimento é híbrido e personalizado! Você pode agendar consulta presencial reservada em nossa sede em Curitiba/PR (Av. Winston Churchill, nº 1824, sala 912 - Capão Raso) ou realizar consultoria 100% online por videoconferência e WhatsApp com agilidade, discrição e segurança jurídica para qualquer lugar do Brasil e exterior.",
      },
    ],
  },
];

export const FAQ_DATA = FAQ_CATEGORIES;