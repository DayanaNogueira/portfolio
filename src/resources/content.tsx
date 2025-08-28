import type { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Fragment } from "react";

const person: Person = {
  firstName: "Dayana",
  lastName: "Nogueira",
  name: "Dayana Nogueira",
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

const home: Home = {
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
      <i
        className="fas fa-code text-primary transition-transform duration-300 hover:scale-125"
      />{" "}
      para criar
      <br />
      experiências de usuário intuitivas e funcionais.
    </span>
  ),
  featured: {
    display: true,
    title: (
      <span className="transition-colors duration-300 hover:text-primary">
        Meu Caderno de Receitas
      </span>
    ),
    href: "https://dayananogueira.github.io/site-receitas/",
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
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Apresentação",
    description: (
      <p className="animate-fadeInUp">
        Sou a Dayana, uma desenvolvedora full stack de Belém que adora
        transformar ideias em realidade digital. Minha paixão é criar
        interfaces intuitivas e funcionais, unindo design e código
        para resolver desafios e construir experiências incríveis.
      </p>
    ),
  },
  work: {
    display: false,
    title: "Experiência Profissional",
    experiences: [],
  },
  studies: {
    display: true,
    title: "Formação e Certificados",
    institutions: [
      {
        name: "DIO - Digital Innovation One",
        description: (
          <span className="animate-fadeIn delay-100">
            Concluiu os cursos "Entendendo Comunicação Client x Server" com 2 horas de carga horária e "Introdução ao Desenvolvimento Front-end com a Ri Happy" com 1 hora de carga horária.
          </span>
        ),
      },
      {
        name: "EF Education First",
        description: (
          <span className="animate-fadeIn delay-200">
            Obteve a certificação em General English, Nível 1 (Iniciante) - CEFR Nível A1.
          </span>
        ),
      },
      {
        name: "Rocketseat",
        description: (
          <span className="animate-fadeIn delay-300">
            Certificação em React & Next.js: Desenvolvimento de aplicações web modernas com React, Next.js e integração com APIs.
          </span>
        ),
      },
      {
        name: "Udemy",
        description: (
          <span className="animate-fadeIn delay-400">
            Certificação Full Stack: Curso abrangente cobrindo Node.js, Express, MongoDB e boas práticas de back-end.
          </span>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "Linguagens",
        description: (
          <span className="animate-slideUp delay-500">
            Python, HTML, CSS, C#, C++, JavaScript, e conhecimento em comunicação Client x Server.
          </span>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "C#", icon: "csharp" },
          { name: "C++", icon: "cplusplus" },
          { name: "JavaScript", icon: "javascript" },
          { name: "HTML", icon: "html5" },
          { name: "CSS", icon: "css3" },
        ],
        images: [],
      },
      {
        title: "Desenvolvimento Web",
        description: (
          <span className="animate-slideUp delay-600">
            Experiência na construção de interfaces com Next.js, React e Figma.
          </span>
        ),
        tags: [
          { name: "Next.js", icon: "nextjs" },
          { name: "React", icon: "react" },
          { name: "Figma", icon: "figma" },
        ],
        images: [],
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
  description: `Um site de portfólio para exibir meu único projeto, "Meu Caderno de Receitas".`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: `Galeria de fotos – ${person.name}`,
  description: `Uma coleção de fotos por ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };