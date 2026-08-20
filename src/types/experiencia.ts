export interface IExperiencia {
    img: string;
    empresa: string;
    rol: string;
    periodo: string;
    modalidad: "Empleo" | "Freelance";
    descripcion: string[];
    technologies: string[];
    repoLink?: string;
    demoLink?: string;
}
