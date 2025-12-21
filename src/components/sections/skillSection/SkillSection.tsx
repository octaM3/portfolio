import type { FunctionComponent } from "react";
import Subtitle from "../../text/subtitle/Subtitle";
import SkillCard from "../../cards/skillsCard/SkillCard";
import skills from "../../../data/skills";
import CardContainer from "../../cards/CardContainer";

interface SkillSectionProps {

}

const SkillSection: FunctionComponent<SkillSectionProps> = () => {
    return (
        <>
            <Subtitle text="Habilidades" format="center" type="normal" />

            <div className="d-flex justify-content-center gap-3 flex-nowrap mt-5">
                {Array.from(skills.entries()).map(([category, skillList]) => (
                    <CardContainer borderRadius={5}>
                        <SkillCard name={category} skills={skillList} key={category} />
                    </CardContainer>

                ))}
            </div>
        </>
    );
}

export default SkillSection;