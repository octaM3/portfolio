import type { FunctionComponent } from "react";
import "../text.css";

interface SimpleTextProps {
    size: 'big' | 'normal' | 'mini';          //Indica el tamaño del texto de 16px para normal o 14px para mini
    text: string;
    className?: string;
}
 
const SimpleText: FunctionComponent<SimpleTextProps> = ({ size, text, className }) => {
    return (
        <p style={size === "big" ? {fontSize: "18px"} : size === "normal" ? {fontSize: "16px"} : {fontSize: "14px"}} className={`simp-txt ${className ? className : ""}`} >
            {text}
        </p>
    );
}
 
export default SimpleText;