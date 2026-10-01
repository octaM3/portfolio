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

            <div className="skills-grid mt-5">
                {Array.from(skills.entries()).map(([category, skillList], index) => (
                    <CardContainer borderRadius={5} key={category} index={index % 4}>
                        <SkillCard name={category} skills={skillList} />
                    </CardContainer>

                ))}
            </div>
        </>
    );
}

export default SkillSection;