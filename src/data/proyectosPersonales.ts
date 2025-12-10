import type { IProyecto } from "../types/proyecto";

const proyectosPersonales: IProyecto[] = [
    {
        img: "/assets/proyectos/portfolio.png",
        title: "Portfolio Personal",
        description: "Mi portfolio personal desarrollado con React y TypeScript, diseñado para mostrar mis habilidades y proyectos de manera profesional y atractiva.",
        technologies: [ "React", "TypeScript", "CSS", "Bootstrap" ],
        repoLink: "",
        demoLink: ""
    },
    {
        img: "/assets/proyectos/gestion-tareas.png",
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

export default proyectosPersonales;