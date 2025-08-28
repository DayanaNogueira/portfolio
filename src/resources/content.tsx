import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
import { Fragment } from "react";

const person: Person = {
  firstName: "Dayana",
  lastName: "Nogueira",
  name: 'Dayana Nogueira',
  role: "Desenvolvedora Full Stack & Front-end",
  avatar: "https://i.pinimg.com/1200x/3d/b4/73/3db4735760242f45e7ea4da5434df2d0.jpg",
  email: "nogueira.dayana08@gmail.com",
  location: "America/Belem",
  languages: ["Português", "Inglês"],
}; 

const newsletter: Newsletter = {
  display: false,
  title: <>Inscreva-se na Newsletter de {person.firstName}</>,
  description: <>Minha newsletter semanal sobre criatividade e engenharia.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/DayanaNogueira",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dayana-nogueira-2744b3363/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

// Mantivemos a versão personalizada da página inicial que já tínhamos criado.
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `Portfólio de ${person.name}`,
  description: `Site de portfólio exibindo meu trabalho como ${person.role}`,
  headline: <>Construindo pontes entre design e código.</>,
  subline: (
    <>
      Eu sou a Dayana, uma desenvolvedora Full-Stack. Eu uso código <i className="fas fa-code" style={{ color: 'var(--color-primary)' }} /> para criar
      <br />
      experiências de usuário intuitivas e funcionais.
    </>
  ),
  featured: {
    display: true,
    title: <>Meu Caderno de Receitas</>,
    href: "/work/receitas", 
  },
};

const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <>
        Dayana é uma desenvolvedora de Belém com uma paixão por transformar desafios complexos
        em soluções de design simples e elegantes. Seu trabalho abrange interfaces digitais,
        experiências interativas e a convergência de design e tecnologia.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Experiência Profissional",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Presente",
        role: "Engenheira de Design Sênior",
        achievements: [
          <Fragment key={1}>
            Redesenhou a UI/UX para a plataforma FLY, resultando em um aumento de 20% no engajamento
            do usuário e 30% mais rapidez no tempo de carregamento.
          </Fragment>,
          <Fragment key={2}>
            Liderou a integração de ferramentas de IA nos fluxos de trabalho de design, permitindo
            que os designers iterassem 50% mais rápido.
          </Fragment>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Designer Líder",
        achievements: [
          <Fragment key={1}>
            Desenvolveu um sistema de design que unificou a marca em múltiplas plataformas,
            melhorando a consistência do design em 40%.
          </Fragment>,
          <Fragment key={2}>
            Liderou uma equipe multifuncional para lançar uma nova linha de produtos,
            contribuindo para um aumento de 15% na receita total da empresa.
          </Fragment>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, 
    title: "Formação Acadêmica",
    institutions: [
      {
        name: "Universidade de Belém",
        description: <>Estudou engenharia de software.</>,
      },
      {
        name: "Build the Future",
        description: <>Estudou marketing online e marca pessoal.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Figma",
        description: (
          <>Capaz de prototipar no Figma com Once UI com velocidade fora do comum.</>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Construindo aplicativos de última geração com Next.js + Once UI + Supabase.</>
        ),
        tags: [
          { name: "JavaScript", icon: "javascript" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Supabase", icon: "supabase" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre design e tecnologia...",
  description: `Leia o que ${person.name} tem feito recentemente`,
};

const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de design e desenvolvimento por ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria de fotos – ${person.name}`,
  description: `Uma coleção de fotos por ${person.name}`,
  images: [
    // ... Imagens de exemplo mantidas
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };