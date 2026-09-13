/**
 * Fonte única de conteúdo do site.
 * Editar aqui altera todas as secções — não é preciso tocar nas componentes.
 */

export const site = {
  nome: 'Diogo Almeida',
  titulo: 'Diogo Almeida — Explicações de Matemática',
  descricao:
    'Explicações de Matemática do 7º ao 12º ano, presenciais no Porto ou online. Aluno de Matemática na FCUP com média de 19,2.',
  email: 'diogocastroalmeid@proton.me',
  assuntoEmail: 'Explicações de Matemática',
  cidade: 'Porto',
  curso: 'Licenciatura em Matemática',
  faculdade: 'FCUP',
  faculdadeCompleta: 'Faculdade de Ciências da Universidade do Porto',
  anoCurso: '3º ano',
} as const;

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(site.assuntoEmail)}`;

export const stats = [
  { valor: '19,2', legenda: 'média na licenciatura', detalhe: `Matemática · ${site.faculdade}` },
  { valor: '20', legenda: 'média no secundário', detalhe: 'Ciências e Tecnologias' },
  { valor: '7º–12º', legenda: 'anos de escolaridade', detalhe: '3º ciclo e secundário' },
] as const;

export const niveis = [
  {
    id: 'ciclo',
    nome: '3º ciclo',
    anos: '7º, 8º e 9º ano',
    resumo: 'Bases sólidas para não acumular dúvidas e chegar ao secundário com confiança.',
    topicos: [
      'Acompanhamento semanal da matéria',
      'Preparação para testes e para a prova final do 9º ano',
      'Álgebra, geometria, funções e estatística',
    ],
    // TODO: substituir pelo preço real por hora
    preco: 'XX',
  },
  {
    id: 'secundario',
    nome: 'Secundário',
    anos: '10º, 11º e 12º ano',
    resumo: 'Matemática A com foco em raciocínio, resolução de exercícios e preparação para o exame nacional.',
    topicos: [
      'Matemática A (também Matemática B e MACS)',
      'Preparação intensiva para o exame nacional',
      'Funções, trigonometria, probabilidades, cálculo diferencial',
    ],
    // TODO: substituir pelo preço real por hora
    preco: 'XX',
  },
] as const;

export const modalidades = [
  {
    nome: 'Presencial',
    detalhe: `No ${site.cidade} — em casa do aluno ou em local combinado`,
    icone: 'pin',
  },
  {
    nome: 'Online',
    detalhe: 'Videochamada com quadro digital partilhado',
    icone: 'screen',
  },
] as const;

export const passos = [
  {
    titulo: 'Envia-me um e-mail',
    texto: 'Diz-me o ano de escolaridade, as principais dificuldades e a tua disponibilidade.',
  },
  {
    titulo: 'Combinamos horário e modalidade',
    texto: 'Respondo rapidamente para acertar dia, hora e se preferes presencial ou online.',
  },
  {
    titulo: 'Primeira aula de diagnóstico',
    texto: 'Percebo onde estão as dificuldades e traçamos um plano de estudo à medida.',
  },
] as const;

export const faq = [
  {
    pergunta: 'Onde são as aulas presenciais?',
    resposta: `No ${site.cidade}, normalmente em casa do aluno ou num local combinado (biblioteca, café tranquilo). Combinamos o que for mais prático por e-mail.`,
  },
  {
    pergunta: 'Como funcionam as aulas online?',
    resposta:
      'Por videochamada (Google Meet ou Zoom) com um quadro digital partilhado. No final da aula envio os apontamentos e os exercícios resolvidos.',
  },
  {
    pergunta: 'Quanto tempo dura cada aula?',
    resposta:
      'Por norma 60 minutos. Para preparação de exames ou revisão de matéria acumulada, podemos fazer sessões de 90 ou 120 minutos.',
  },
  {
    pergunta: 'E se precisar de cancelar ou remarcar?',
    resposta:
      'Sem problema — basta avisar com pelo menos 24 horas de antecedência e remarcamos para outro dia.',
  },
  {
    pergunta: 'Que material é necessário?',
    resposta:
      'O manual e o caderno da disciplina, calculadora gráfica (no secundário) e, se possível, os testes anteriores para identificarmos os pontos a trabalhar.',
  },
] as const;

export const navLinks = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#precos', label: 'Preços' },
  { href: '#faq', label: 'FAQ' },
] as const;
