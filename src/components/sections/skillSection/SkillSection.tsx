import type { FunctionComponent } from "react";
import Subtitle from "../../text/subtitle/Subtitle";

interface SkillSectionProps {
    
}
 
const SkillSection: FunctionComponent<SkillSectionProps> = () => {
    return (
        <div>
            <Subtitle text="Habilidades" format="center" type="normal" />
        </div>
    );
}
 
export default SkillSection;