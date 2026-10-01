import type { IExperiencia } from "../types/experiencia";

const experiencia: IExperiencia[] = [
    {
        img: "/assets/experiencia/ivcisa.png",
        empresa: "IVCISA",
        rol: "Arquitecto de Soluciones",
        periodo: "Mar. 2026 – Jul. 2026",
        ubicacion: "Panamá (remoto)",
        modalidad: "Empleo",
        descripcion: [
            "Centralicé el reporting de costos de infraestructura cloud de las cuentas de los clientes y de un entorno de prueba en Snowflake y Databricks, generando la visibilidad que el equipo usó para detectar ahorros, mediante APIs backend desarrolladas en Python, FastAPI y Uvicorn.",
            "Sostuve el desarrollo full stack del proyecto —diseño y mantenimiento de la base de datos PostgreSQL e implementación de funcionalidades frontend en Next.js— dentro de un equipo de 4 personas (2 desarrolladores y 1 líder técnico)."
        ],
        technologies: ["Python", "FastAPI", "Uvicorn", "Next.js", "PostgreSQL", "Snowflake", "Databricks", "GitLab", "Jira", "Slack", "Kiro"]
    },
    {
        img: "/assets/experiencia/hettacs.png",
        empresa: "Hettacs — Plataforma de Comunidad de Videojuegos",
        rol: "Desarrollador Full Stack (Freelance)",
        periodo: "Jul. 2026",
        ubicacion: "Mendoza, Argentina",
        modalidad: "Freelance",
        descripcion: [
            "Diseñé y desarrollé en solitario, de cero a producción, una plataforma web de videojuegos con arquitectura full stack en NestJS, React y MariaDB, completando el desarrollo en aproximadamente un mes.",
            "Integré Mercado Pago como pasarela de pagos y desplegué la aplicación en un servidor VPS propio, escalando la plataforma a 500 usuarios registrados y un volumen de 30 transacciones mensuales."
        ],
        technologies: ["NestJS", "React", "MariaDB", "Mercado Pago", "TypeScript", "VPS", "Kiro", "Claude Code"],
        repoLink: "",
        demoLink: ""
    },
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766352896/portfolio/Distanterra-img_f2vted.webp",
        empresa: "Distanterra",
        rol: "Desarrollador Full Stack (Freelance)",
        periodo: "Ene. 2025 – Jul. 2025",
        ubicacion: "Mendoza, Argentina",
        modalidad: "Freelance",
        descripcion: [
            "Desarrollé en solitario los 3 módulos frontend del sitio web corporativo de una empresa de logística minera, con React y TypeScript, integrando Firebase como capa de datos."
        ],
        technologies: ["React", "TypeScript", "Firebase", "Cloudinary"],
        repoLink: "",
        demoLink: ""
    },
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766345832/portfolio/Nai-img_rxw7yl.webp",
        empresa: "Naí Experience",
        rol: "Desarrollador Full Stack (Freelance)",
        periodo: "Mar. 2024 – Oct. 2024",
        ubicacion: "Costa Rica (remoto)",
        modalidad: "Freelance",
        descripcion: [
            "Construí, como único programador del equipo (junto a 3 diseñadores de Nista Studio), la plataforma turística Naí Experience end-to-end: catálogo de productos, sistema de reservas, carrito de compras y panel administrativo, entregando el producto completo listo para producción."
        ],
        technologies: ["React", "TypeScript", "Firebase (Firestore, Storage, Auth)", "Bootstrap"],
        repoLink: "",
        demoLink: ""
    },
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766345855/portfolio/dusty-img_klg1mx.webp",
        empresa: "Dusty Roots",
        rol: "Desarrollador Full Stack (Freelance)",
        periodo: "Mar. 2024 – Sep. 2024",
        ubicacion: "Argentina",
        modalidad: "Freelance",
        descripcion: [
            "Desarrollé en paralelo, también como único programador junto al equipo de diseño de Nista Studio, una plataforma de e-commerce turístico para el cliente Dusty Roots: catálogo de productos, sistema de reservas, carrito de compras y panel administrativo."
        ],
        technologies: ["React", "TypeScript", "Firebase (Firestore, Storage, Auth)", "Bootstrap"],
        repoLink: "",
        demoLink: ""
    }
];

export default experiencia;
