import type { FunctionComponent } from "react";
import "../text.css";

interface SubtitleProps {
    text: string;
    type: "normal" | "blue";
    format: 'center' | 'left';
    className?: string;
}

const Subtitle: FunctionComponent<SubtitleProps> = ({ text, format, type, className }) => {
    return (
        <div className={`${format === "center" && "subtitle-txt-center"}`}>
            <h2 className={`
                ${className ? className : ""} ${format === "center" ? "subtitle-txt-center" : "subtitle-txt-left"} ${type === "normal" ? "subtitle-txt" : "subtitle-txt-blue"}`}
            >
                {text}
            </h2>
            {type === "normal" && <div className="subtitle-txt-line" ></div>}
        </div>
    );
}

export default Subtitle;