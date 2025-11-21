import type { FunctionComponent } from "react";
import "../cards.css";
import SkillLabel from "../../Labels/skillLabel/SkillLabel";
import SimpleText from "../../text/simpleText/SimpleText";

interface SkillCardProps {
    name: string;
    skills: string[];
}

const SkillCard: FunctionComponent<SkillCardProps> = ({ name, skills }) => {
    return (
        <div className="skill-card">
            <SimpleText color="none" fontWeight={700} size="big" text={name} className="mt-4" /> 

            <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <SkillLabel txt={skill} key={i} />
                ))}
            </div>
        </div>
    );
}

export default SkillCard;