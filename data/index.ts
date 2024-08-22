import { link } from "fs";

export const navItems = [
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  { name: "Feedbacks", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "A colaboração com meus colegas é essencial para o meu processo, com ênfase em manter uma comunicação aberta.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Estou sempre em sintonia com novas abordagens e soluções inovadoras.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minhas Stacks",
    description: "Sempre procuro evoluir",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Apaixonado por tecnologia e ao desenvolvimento.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Kraft Heinz Sustainable Solutions Cup.",
    description: "Prêmiado FIAP Next",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer começar um projeto? Me chama!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mentor Mate Android App",
    des: "Projeto em Kotlin e Compose com backend Firebase, que funciona como um Tinder para conectar mentores e mentorados. Oferece matchmaking, chat em tempo real e notificações push. Seguro e privado, desenvolvido para o desafio da DB1 na FIAP.",
    img: "/mentor.png",
    iconLists: ["/kotlin.svg", "/jetpack.svg", "/firebase.svg"],
    link: "https://github.com/SantosRodrigo89/MentorMate-Kotlin",
  },
  {
    id: 2,
    title: "Book Shop Backend",
    des: "Backend desenvolvido em Node.js para uma livraria online, utilizando MongoDB e Mongoose. A aplicação é containerizada com Docker e implementada com Express. O projeto oferece funcionalidades como gerenciamento de livros, usuários, pedidos.",
    img: "/bookshop.png",
    iconLists: ["/node.svg", "/mongo.svg", "/js.svg"],
    link: "https://github.com/SantosRodrigo89/bookshop-node.js-mongo-db-express-docker",
  },
  {
    id: 3,
    title: "Prometech Labs",
    des: "Landing Page de uma empresa real, desenvolvida com Next.js. O projeto inclui rotas dinâmicas para navegação fluida, e a utilização de Server-Side Rendering (SSR) e Client-Side Rendering (CSR) para otimização da performance e experiência do usuário. Além disso, inclui a configuração de login autenticado via Auth0, garantindo segurança e controle de acesso.",
    img: "/prometech.png",
    iconLists: ["/re.svg", "/next.svg", "/js.svg"],
    link: "https://github.com/SantosRodrigo89/prometech-labs-nextjs",
  },
  {
    id: 4,
    title: "Uai Food",
    des: "Projeto final de Frontend do curso de Desenvolvimento Web Full Stack da Labenu. Trata-se de um site/app de delivery de comida inspirado no Rappi. As tecnologias utilizadas incluem JavaScript, React, CSS, boas práticas de desenvolvimento, como componentização, organização de código e responsividade.",
    img: "/rappi.png",
    iconLists: ["/re.svg", "/js.svg"],
    link: "https://github.com/SantosRodrigo89/rappi",
  },
];

export const testimonials = [
  {
    img: "/bruno2.jpg",
    quote:
      "Trabalhei com Rodrigo e ele se destacou como um excelente desenvolvedor. Além de suas habilidades técnicas sólidas, ele também tinha uma boa capacidade de comunicação, o que facilitou o trabalho em equipe e a compreensão das necessidades do projeto.",
    name: "Bruno Melo",
    title: "Full Stack Developer na CDC Bank",
  },
  {
    img: "/leo.jpeg",
    quote:
      "É verdade que os colaboradores são responsáveis pelo sucesso de um projeto empresarial. E enquanto estive como sócio da M3 Lending, pude constatar as capacidade de comprometimento, organização, liderança, comunicação assertiva para resultados. A atuação do profissional Rodrigo Vieira foi muito importante para a captação de novos investidores, ele teve oportunidade de criar uma carteira do zero. Tendo comprometimento exemplar ao assumir responsabilidades reportando possíveis gargalos e auxiliando no crescimento da companhia.",
    name: "Leonardo Gabriel",
    title: "Cofundadoor na M3 Lending",
  }
];

export const companies = [
  {
    id: 1,
    name: "Minu.co",
    img: "/minu.png",
    nameImg: "Minu.co",
  },
  {
    id: 2,
    name: "CDC Bank",
    img: "/cdc.png",
    nameImg: "CDC Bank",
  },
  {
    id: 3,
    name: "M3 Lending",
    img: "/M3.png",
    nameImg: "M3 Lending",
  },
  {
    id: 4,
    name: "Spetim",
    img: "/spetim.png",
    nameImg: "Spetim",
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvimento Full Stack",
    desc: "Experiência em desenvolvimento full stack utilizando Node.js, JavaScript, PHP e Kotlin.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Tecnologias Frontend",
    desc: "Foco em tecnologias front-end, como React, Next.js e Kotlin.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Habilidades Interpessoais",
    desc: "Soft skills como boa comunicação, trabalho em equipe e resolução de problemas.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Aprendizado Contínuo",
    desc: "Compromisso com aprendizado contínuo e prazer por aprender novas tecnologias.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/SantosRodrigo89/",
  },
  // {
  //   id: 2,
  //   img: "/cv.svg",
  //   link: "https://drive.google.com/file/d/10V1iWlU4CTJ9Jm3KH-YeM5hR-ojB4F0u/view?usp=drivesdk",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/rodrigo-v-b9ba696a/",
  },
];
