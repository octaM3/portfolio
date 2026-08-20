import type { FunctionComponent } from "react";
import type { IExperiencia } from "../../../types/experiencia";
import "../cards.css";
import ProjectTecnologyLabel from "../../Labels/projectTecnologyLabel/ProjectTecnologyLabel";
import ProjectButton from "../../buttons/projectButton/ProjectButton";
import SimpleText from "../../text/simpleText/SimpleText";

interface ExperienceCardProps {
    experiencia: IExperiencia;
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({ experiencia }) => {
    return (
        <div className="experience-card">
            <img className="experience-card-img" src={experiencia.img} alt={experiencia.empresa} />

            <div className="m-4">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-2">
                    <div>
                        <h5 className="m-0">{experiencia.empresa}</h5>
                        <SimpleText color="gray" size="normal" className="m-0" text={experiencia.rol} />
                    </div>
                    <div className="d-flex flex-column align-items-end">
                        <span className={`experience-badge ${experiencia.modalidad === "Empleo" ? "experience-badge-job" : ""}`}>
                            {experiencia.modalidad}
                        </span>
                        <SimpleText color="gray" size="mini" className="m-0 mt-1" text={experiencia.periodo} />
                    </div>
                </div>

                <ul className="experience-list">
                    {experiencia.descripcion.map((item, i) => (
                        <li key={i}>
                            <SimpleText color="gray" size="normal" className="m-0" text={item} />
                        </li>
                    ))}
                </ul>

                <div className="d-flex flex-wrap gap-1">
                    {experiencia.technologies.map((tech, i) => (
                        <ProjectTecnologyLabel text={tech} key={i} />
                    ))}
                </div>

                {(experiencia.demoLink || experiencia.repoLink) && (
                    <div className="d-flex flex-wrap gap-2 mt-3">
                        {experiencia.demoLink && (
                            <ProjectButton text="Ver Demo" href={experiencia.demoLink} icon="bi-box-arrow-up-right" />
                        )}
                        {experiencia.repoLink && (
                            <ProjectButton text="Ver Repo" href={experiencia.repoLink} icon="bi-github" />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExperienceCard;
