import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Fragment } from "react";

export const person: Person = {
  firstName: "Dayana",
  lastName: "Nogueira",
  name: "Dayana Nogueira",
  role: "Desenvolvedora Full Stack & Front-end",
  avatar: "https://i.pinimg.com/1200x/3d/b4/73/3db4735760242f45e7ea4da5434df2d0.jpg",
  email: "nogueira.dayana08@gmail.com",
  location: "America/Belem" as const,
  languages: ["Português", "Inglês"],
};

export const newsletter: Newsletter = {
  display: false,
  title: <>Inscreva-se na Newsletter de {person.firstName}</>,
  description: <>Minha newsletter semanal sobre criatividade e engenharia.</>,
};

export const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/DayanaNogueira" },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/dayana-nogueira-2744b3363/" },
  { name: "Email", icon: "email", link: `mailto:${person.email}` },
];

export const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Início",
  title: `Portfólio de ${person.name}`,
  description: `Site de portfólio exibindo meu trabalho como ${person.role}`,
  headline: (
    <span className="animate-fadeIn">
      Construindo pontes entre design e código.
    </span>
  ),
  subline: (
    <span className="animate-slideUp delay-200">
      Eu sou a Dayana, uma desenvolvedora Full-Stack. Eu uso código{" "}
      <i className="fas fa-code text-primary transition-transform duration-300 hover:scale-125" />{" "}
      para criar
      <br />
      experiências de usuário intuitivas e funcionais.
    </span>
  ),
  featured: {
    display: true,
    title: <span className="transition-colors duration-300 hover:text-primary">Meu Caderno de Receitas</span>,
    href: "/work/receitas",
  },
};

export const about: About = {
  path: "/about",
  label: "Sobre",
  title: `Sobre – ${person.name}`,
  description: `Conheça ${person.name}, ${person.role} de ${person.location}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: { display: true, link: "https://cal.com" },
  intro: {
    display: true,
    title: "Introdução",
    description: (
      <p className="animate-fadeInUp">
        Dayana é uma desenvolvedora de Belém com uma paixão por transformar
        desafios complexos em soluções digitais modernas e elegantes.
        Seu trabalho abrange interfaces web, experiências interativas
        e a convergência entre design criativo e tecnologia.
      </p>
    ),
  },
  work: {
    display: true,
    title: "Certificados",
    experiences: [
      {
        company: "Alura",
        timeframe: "2024",
        role: "Certificação Front-end",
        achievements: [
          <Fragment key="alura-1">
            <span className="transition duration-300 hover:text-primary">
              Curso de HTML, CSS e JavaScript aplicado ao desenvolvimento moderno de interfaces.
            </span>
          </Fragment>,
        ],
        images: [
          { src: "/images/certificado-alura.png", alt: "Certificado Alura", width: 200, height: 150 },
        ],
      },
      {
        company: "Rocketseat",
        timeframe: "2024",
        role: "Certificação em React & Next.js",
        achievements: [
          <Fragment key="rocketseat-1">
            <span className="transition duration-300 hover:text-primary">
              Desenvolvimento de aplicações web modernas com React, Next.js e integração com APIs.
            </span>
          </Fragment>,
        ],
        images: [],
      },
      {
        company: "Udemy",
        timeframe: "2023",
        role: "Certificação Full Stack",
        achievements: [
          <Fragment key="udemy-1">
            <span className="transition duration-300 hover:text-primary">
              Curso abrangente cobrindo Node.js, Express, MongoDB e boas práticas de back-end.
            </span>
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
      { name: "Universidade de Belém", description: <span className="transition duration-300 hover:text-primary">Estudou engenharia de software.</span> },
      { name: "Build the Future", description: <span className="transition duration-300 hover:text-primary">Estudou marketing online e marca pessoal.</span> },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Figma",
        description: <span className="transition duration-300 hover:text-primary">Capaz de prototipar no Figma com Once UI com velocidade fora do comum.</span>,
        tags: [{ name: "Figma", icon: "figma" }],
        images: [],
      },
      {
        title: "Next.js",
        description: <span className="transition duration-300 hover:text-primary">Construindo aplicativos de última geração com Next.js + Once UI + Supabase.</span>,
        tags: [{ name: "JavaScript" }, { name: "Next.js" }, { name: "Supabase" }],
        images: [],
      },
    ],
  },
};

export const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escrevendo sobre design e tecnologia...",
  description: `Leia o que ${person.name} tem feito recentemente`,
};

export const work: Work = {
  path: "/work",
  label: "Projetos",
  title: `Projetos – ${person.name}`,
  description: `Projetos de design e desenvolvimento por ${person.name}`,
  experiences: [
    {
      company: "Meu Caderno de Receitas",
      timeframe: "2024",
      role: "Desenvolvedora Front-end",
      achievements: [
        "Um site dinâmico e interativo, projetado para ser o seu melhor companheiro na cozinha!",
        "Filtros inteligentes (Massas, Aves e Sobremesas), busca rápida e favoritos locais.",
        "Ajuste de porções, modo de preparo detalhado e ações convenientes (compartilhar no WhatsApp ou imprimir)."
      ],
      images: [
        {
          src: "https://github.com/user-attachments/assets/fba263c3-b023-49cd-89de-06925dece91f",
          alt: "Preview do site Meu Caderno de Receitas",
          width: 1354,
          height: 686
        }
      ]
    },
  ],
};

export const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria de fotos – ${person.name}`,
  description: `Uma coleção de fotos por ${person.name}`,
  images: [],
};