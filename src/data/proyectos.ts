import type { IProyecto } from "../types/proyecto";

const proyectos: IProyecto[] = [
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766345832/portfolio/Nai-img_rxw7yl.webp",
        title: "Portfolio Personal",
        description: "Mi portfolio personal desarrollado con React y TypeScript, diseñado para mostrar mis habilidades y proyectos de manera profesional y atractiva.",
        technologies: [ "React", "TypeScript", "CSS", "Bootstrap" ],
        repoLink: "https://github.com/octaM3/planDeMejora_Spring",
        demoLink: ""
    },
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766345855/portfolio/dusty-img_klg1mx.webp",
        title: "Aplicación de Gestión de Tareas",
        description: "Una aplicación web para gestionar tareas diarias, con funcionalidades para agregar, editar y eliminar tareas, así como marcar tareas como completadas.",
        technologies: [ "Vue.js", "JavaScript", "CSS", "Firebase" ],
        repoLink: "",
        demoLink: ""
    },
    {
        img: "/assets/proyectos/e-commerce.png",
        title: "Tienda E-commerce",
        description: "Plataforma de comercio electrónico que permite a los usuarios navegar por productos, agregarlos al carrito y realizar compras de manera segura.",
        technologies: [ "Angular", "TypeScript", "Sass", "Node.js", "Express", "MongoDB" ],
        repoLink: "",
        demoLink: ""
    }

];

export default proyectos;