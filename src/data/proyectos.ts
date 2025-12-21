import type { IProyecto } from "../types/proyecto";

const proyectos: IProyecto[] = [
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766345832/portfolio/Nai-img_rxw7yl.webp",
        title: "Naí Experience",
        description: "Mi portfolio personal desarrollado con React y TypeScript, diseñado para mostrar mis habilidades y proyectos de manera profesional y atractiva.",
        technologies: [ "React", "TypeScript", "CSS", "Bootstrap" ],
        repoLink: "https://github.com/octaM3/planDeMejora_Spring",
        demoLink: ""
    },
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766345855/portfolio/dusty-img_klg1mx.webp",
        title: "Dusty Roots",
        description: "Una aplicación web para gestionar tareas diarias, con funcionalidades para agregar, editar y eliminar tareas, así como marcar tareas como completadas.",
        technologies: [ "Vue.js", "JavaScript", "CSS", "Firebase" ],
        repoLink: "",
        demoLink: ""
    },
    {
        img: "https://res.cloudinary.com/dshpkdkq6/image/upload/v1766352896/portfolio/Distanterra-img_f2vted.webp",
        title: "Distanterra",
        description: "Plataforma de comercio electrónico que permite a los usuarios navegar por productos, agregarlos al carrito y realizar compras de manera segura.",
        technologies: [ "Angular", "TypeScript", "Sass", "Node.js", "Express", "MongoDB" ],
        repoLink: "",
        demoLink: ""
    }

];

export default proyectos;