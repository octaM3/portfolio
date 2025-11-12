import type { FunctionComponent } from "react";

interface SubtitleProps {
    text: string;
    format: 'center' | 'left';
}
 
const Subtitle: FunctionComponent<SubtitleProps> = ({ text, format }) => {
    return (
        <h2 className={`${format === "center" ? "" : ""}`}>
            {text}
        </h2>
    );
}
 
export default Subtitle;