import type { FunctionComponent } from "react";
import type { IExperiencia } from "../../../types/experiencia";
import "../cards.css";
import ProjectTecnologyLabel from "../../Labels/projectTecnologyLabel/ProjectTecnologyLabel";
import ProjectButton from "../../buttons/projectButton/ProjectButton";
import SimpleText from "../../text/simpleText/SimpleText";
import CardImage from "../cardImage/CardImage";

interface ExperienceCardProps {
    experiencia: IExperiencia;
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({ experiencia }) => {
    return (
        <div className="experience-card">
            <CardImage className="experience-card-img" src={experiencia.img} alt={experiencia.empresa} />

            <div className="m-4">
                <div className="experience-header">
                    <div className="experience-heading">
                        <h5 className="m-0">{experiencia.empresa}</h5>
                        <SimpleText color="gray" size="normal" className="m-0" text={experiencia.rol} />
                    </div>
                    <span className={`experience-badge ${experiencia.modalidad === "Empleo" ? "experience-badge-job" : ""}`}>
                        {experiencia.modalidad}
                    </span>
                </div>

                <div className="experience-meta">
                    <span><i className="bi bi-calendar3"></i>{experiencia.periodo}</span>
                    {experiencia.ubicacion && (
                        <span><i className="bi bi-geo-alt"></i>{experiencia.ubicacion}</span>
                    )}
                </div>

{experiencia.etapas ? (
                    <ol className="experience-stages">
                        {experiencia.etapas.map((etapa, i) => (
                            <li className="experience-stage" key={i}>
                                <div className="experience-stage-head">
                                    <span className="experience-stage-title">{etapa.titulo}</span>
                                    <span className="experience-stage-period">{etapa.periodo}</span>
                                </div>
                                <ul className="experience-list">
                                    {etapa.descripcion.map((item, k) => (
                                        <li key={k}>
                                            <SimpleText color="gray" size="normal" className="m-0" text={item} />
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                ) : (
                                    <ul className="experience-list">
                        {experiencia.descripcion.map((item, i) => (
                            <li key={i}>
                                <SimpleText color="gray" size="normal" className="m-0" text={item} />
                            </li>
                        ))}
                    </ul>
                )}

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
