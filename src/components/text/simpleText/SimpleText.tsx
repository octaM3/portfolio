import type { FunctionComponent } from "react";
import "../text.css";

interface SimpleTextProps {
    format: 'normal' | 'mini';
    text: string;
    className?: string;
}
 
const SimpleText: FunctionComponent<SimpleTextProps> = ({ format, text, className }) => {
    return (
        <p style={format === "normal" ? {fontSize: "16px"} : {fontSize: "14px"}} className={`simp-txt ${className ? className : ""}`} >
            {text}
        </p>
    );
}
 
export default SimpleText;