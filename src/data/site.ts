/**
 * Fonte única de conteúdo do site.
 * Editar aqui altera todas as secções — não é preciso tocar nas componentes.
 */

export const site = {
  nome: 'Diogo Almeida',
  titulo: 'Diogo Almeida — Explicações de Matemática',
  descricao: 'Explicações de Matemática do 7º ao 12º ano, na Maia.',
  email: 'diogoalmeidaexplicacoes@outlook.com',
  assuntoEmail: 'Explicações de Matemática',
  cidade: 'Maia',
  faculdade: 'FCUP',
  mediaFaculdade: '19,2',
  mediaSecundario: '20',
} as const;

export const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent(site.assuntoEmail)}`;

export const niveis = [
  {
    nome: '3º ciclo',
    anos: '7º, 8º e 9º ano',
    preco: '13',
  },
  {
    nome: 'Secundário',
    anos: '10º, 11º e 12º ano',
    preco: '15',
  },
] as const;

export const passos = [
  { titulo: 'Envia-me um e-mail', texto: 'Ano de escolaridade e disponibilidade.' },
  { titulo: 'Combinamos o horário', texto: 'Respondo em menos de 24 horas.' },
  { titulo: 'Primeira aula', texto: 'Na Maia, ao teu ritmo.' },
] as const;

export const navLinks = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#precos', label: 'Preços' },
] as const;
