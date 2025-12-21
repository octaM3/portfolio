import type { FunctionComponent } from "react";
import type { IProyecto } from "../../../types/proyecto";
import SimpleText from "../../text/simpleText/SimpleText";
import "../cards.css";
import ProjectTecnologyLabel from "../../Labels/projectTecnologyLabel/ProjectTecnologyLabel";
import ProjectButton from "../../buttons/projectButton/ProjectButton";


interface ProyectCardProps {
    proyecto: IProyecto;
}

const ProyectCard: FunctionComponent<ProyectCardProps> = ({ proyecto }) => {
    return (
        <div className="project-card">
            <img className="project-card-img" src={proyecto.img} alt="" />
            <div className="m-4">
                <h5>{proyecto.title}</h5>
                <SimpleText color="gray" size="mini" text={proyecto.description} />
                <div className="d-flex flex-wrap gap-1">
                    {proyecto.technologies.map((tech, index) => (
                        <ProjectTecnologyLabel text={tech} key={index} />
                    ))}
                </div>
                <div>
                    {proyecto.repoLink && proyecto.demoLink ? (
                        <>
                        <ProjectButton text="Ver Demo" href={proyecto.demoLink} />
                        <ProjectButton text="Ver Repo" href={proyecto.repoLink} />
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default ProyectCard;