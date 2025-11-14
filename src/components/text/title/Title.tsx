import type { FunctionComponent } from "react";
import "../text.css";

interface TitleProps {
    text: string;
    className?: string;
}
 
const Title: FunctionComponent<TitleProps> = ({ text, className }) => {
    return (
        <h1 className={`title-txt ${className ? className : ""}`}>
            {text}
        </h1>
    );
}
 
export default Title;