// resources/once-ui.config.ts

// Base URL do seu site
export const baseURL = "https://seu-dominio.com"; // substitua pelo seu domínio real

// Fontes usadas no site
export const fonts = {
  primary: "Inter, sans-serif",
  secondary: "Roboto, sans-serif",
};

// Configurações de estilo globais
export const style = {
  colors: {
    primary: "#4F46E5",
    secondary: "#FBBF24",
    neutral: "#64748B",
    accent: "#10B981",
  },
  borderRadius: "8px",
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
  },
};

// Efeitos de animação
export const effects = {
  fade: "fade 0.3s ease-in-out",
  slideUp: "slideUp 0.5s ease-out",
};

// Data-style global (opcional, para animações e temas)
export const dataStyle = {};

// Schema e SEO
export const schema = {
  siteName: "Portfólio Dayana Nogueira",
  defaultImage: "/images/og/home.jpg",
  sameAs: [
    "https://github.com/DayanaNogueira",
    "https://www.linkedin.com/in/dayana-nogueira-2744b3363/",
  ],
};

// Roteamento do site
export const routes = ["/", "/about", "/work", "/blog", "/gallery"];
export const protectedRoutes: string[] = []; // rotas privadas, se houver

// Mailchimp (exemplo, caso queira newsletter)
export const mailchimp = {
  display: false,
  endpoint: "https://seu-mailchimp-endpoint.com", // substitua pelo endpoint real
};

// Display de elementos opcionais (usar em componentes)
export const display = {
  newsletter: true,
  calendar: true,
};