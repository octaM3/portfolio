import type { FunctionComponent } from "react";
import Subtitle from "../../text/subtitle/Subtitle";
import experiencia from "../../../data/experiencia";
import ExperienceCard from "../../cards/experienceCard/ExperienceCard";
import CardContainer from "../../cards/CardContainer";

const ExperienceSection: FunctionComponent = () => {
    return (
        <div>
            <Subtitle text="Experiencia" format="center" type="normal" />

            <div className="row my-5 w-100">
                {experiencia.map((exp, index) => (
                    <div className="col-lg-6 mb-4 d-flex justify-content-center" key={index}>
                        <CardContainer borderRadius={10} index={index % 2}>
                            <ExperienceCard experiencia={exp} />
                        </CardContainer>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExperienceSection;
