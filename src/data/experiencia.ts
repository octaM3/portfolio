import type { IExperiencia } from "../types/experiencia";

const experiencia: IExperiencia[] = [
    {
        img: "/assets/experiencia/ivcisa.png",
        empresa: "IVCISA",
        rol: "Arquitecto de Soluciones",
        periodo: "Mar. 2026 – Jul. 2026",
        modalidad: "Empleo",
        descripcion: [
            "Desarrollo de APIs y servicios backend utilizando Python, FastAPI y Uvicorn.",
            "Desarrollo de funcionalidades frontend con Next.js.",
            "Diseño, desarrollo y mantenimiento de bases de datos PostgreSQL.",
            "Integración de servicios en Databricks y Snowflake para la consulta y consolidación de costos de cuentas cloud."
        ],
        technologies: ["Python", "FastAPI", "Uvicorn", "Next.js", "PostgreSQL", "Snowflake", "Databricks", "GitLab", "Jira", "Slack", "Kiro"]
    },
    {
        img: "/assets/experiencia/hettacs.png",
        empresa: "Hettacs — Plataforma de Comunidad de Videojuegos",
        rol: "Desarrollador Full Stack (Freelance)",
        periodo: "Jul. 2026",
        modalidad: "Freelance",
        descripcion: [
            "Desarrollo de una plataforma para la comunidad de videojuegos Hettacs, utilizando NestJS, React y MariaDB, con integración de Mercado Pago y despliegue completo en una VPS para frontend y backend."
        ],
        technologies: ["NestJS", "React", "MariaDB", "Mercado Pago", "TypeScript", "Kiro", "Claude Code"],
        repoLink: "",
        demoLink: ""
    },
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766352896/portfolio/Distanterra-img_f2vted.webp",
        empresa: "Distanterra",
        rol: "Desarrollador Full Stack (Freelance)",
        periodo: "Ene. 2025 – May. 2025",
        modalidad: "Freelance",
        descripcion: [
            "Desarrollo y mantenimiento del sitio web corporativo para una empresa de logística minera, implementando interfaces en React y TypeScript, integración con Firebase y optimizaciones de rendimiento y experiencia de usuario."
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
        modalidad: "Freelance",
        descripcion: [
            "Participación junto a Nista Studio en el desarrollo de la plataforma turística Naí Experience, incorporando catálogo de productos, sistema de reservas, carrito de compras, panel administrativo y lógica de negocio."
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
        modalidad: "Freelance",
        descripcion: [
            "Desarrollo de una plataforma para una organización de eSports con visualización de equipos, jugadores, torneos y noticias, además de un sistema completo de administración de contenido."
        ],
        technologies: ["React", "TypeScript", "Firebase (Firestore, Storage, Auth)", "Bootstrap"],
        repoLink: "",
        demoLink: ""
    }
];

export default experiencia;
