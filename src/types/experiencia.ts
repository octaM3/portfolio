export interface IEtapa {
    periodo: string;
    titulo: string;
    descripcion: string[];
}

export interface IExperiencia {
    img: string;
    empresa: string;
    rol: string;
    periodo: string;
    ubicacion?: string;
    modalidad: "Empleo" | "Freelance";
    descripcion: string[];
    etapas?: IEtapa[];
    technologies: string[];
    repoLink?: string;
    demoLink?: string;
}
