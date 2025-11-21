import type { FunctionComponent } from "react";
import "../labels.css";

interface SkillLabelProps {
    txt: string;
}
 
const SkillLabel: FunctionComponent<SkillLabelProps> = ({ txt }) => {
    return (
        <div className="skill-label">{txt}</div>
    );
}
 
export default SkillLabel;