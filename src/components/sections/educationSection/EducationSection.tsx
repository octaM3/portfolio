import type { FunctionComponent } from "react";
import Subtitle from "../../text/subtitle/Subtitle";
import SimpleText from "../../text/simpleText/SimpleText";
import certificaciones from "../../../data/certificaciones";

const EducationSection: FunctionComponent = () => {
    return (
        <div>
            <Subtitle text="Educación y Certificaciones" format="center" type="normal" />

            <div className="education-grid mt-5">
                <div>
                    <h4 className="education-heading">Educación</h4>
                    <h6 className="mt-3 mb-1">Universidad Tecnológica Nacional</h6>
                    <SimpleText color="gray" size="normal" className="m-0" text="Tecnicatura Universitaria en Programación" />
                    <SimpleText color="gray" size="mini" className="m-0 mt-1" text="Ago. 2021 – Ago. 2023" />
                </div>

                <div>
                    <h4 className="education-heading">Certificaciones</h4>
                    <div className="cert-list mt-3">
                        {certificaciones.map((cert, index) => (
                            cert.url ? (
                                <a className="cert-chip" href={cert.url} target="_blank" rel="noopener noreferrer" key={index}>
                                    {cert.title}
                                    <i className="bi bi-box-arrow-up-right"></i>
                                </a>
                            ) : (
                                <span className="cert-chip cert-chip-static" key={index}>{cert.title}</span>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationSection;
