import type { FunctionComponent } from "react";
import "../text.css";

interface SimpleTextProps {
    size: 'big' | 'normal' | 'mini';          //Indica el tamaño del texto de 16px para normal o 14px para mini
    text: string;
    className?: string;
    color: "gray" | "none";
    fontWeight?: 900 | 800 | 700 | 600 | 500 | 400 | 300 | 200 | 100;    
}

const SimpleText: FunctionComponent<SimpleTextProps> = ({
    size,
    text,
    className,
    color,
    fontWeight 
}) => {

    const fontSize =
        size === "big" ? "18px" :
        size === "normal" ? "16px" :
        "14px";

        const colorClass = color === "none" ? "simp-txt" : "simp-txt-gray";

    return (
        <p
            style={{
                fontSize,          
                fontWeight       // se aplica solo si existe
            }}
            className={`${colorClass} ${className ?? ""}`}
        >
            {text}
        </p>
    );
}
 
export default SimpleText;