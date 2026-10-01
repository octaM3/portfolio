import type { FunctionComponent } from "react";
import "../text.css";

interface SubtitleProps {
    text: string;
    type: "normal" | "blue";
    format: 'center' | 'left';
    className?: string;
}

const Subtitle: FunctionComponent<SubtitleProps> = ({ text, format, type, className }) => {
    // Los títulos de sección se revelan al hacer scroll y dibujan su línea; el subtítulo azul del hero no.
    const isSectionTitle = type === "normal";

    return (
        <div
            className={`${format === "center" ? "subtitle-txt-center" : ""} ${isSectionTitle ? "subtitle-block" : ""}`}
            data-reveal={isSectionTitle ? "" : undefined}
        >
            <h2 className={`
                ${className ? className : ""} ${format === "center" ? "subtitle-txt-center" : "subtitle-txt-left"} ${type === "normal" ? "subtitle-txt" : "subtitle-txt-blue"}`}
            >
                {text}
            </h2>
            {isSectionTitle && <div className="subtitle-txt-line" ></div>}
        </div>
    );
}

export default Subtitle;
