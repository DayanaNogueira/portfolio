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
        Selene is a Jakarta-based design engineer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Experiência Profissional",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <Fragment key={1}>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </Fragment>,
          <Fragment key={2}>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
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
        role: "Lead Designer",
        achievements: [
          <Fragment key={1}>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </Fragment>,
          <Fragment key={2}>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
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
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
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
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
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