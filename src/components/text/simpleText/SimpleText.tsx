import type { FunctionComponent } from "react";

interface SimpleTextProps {
    format: 'normal' | 'mini';
    text: string;
}
 
const SimpleText: FunctionComponent<SimpleTextProps> = ({ format, text }) => {
    return (
        <p className={`${format === "normal" ? "" : ""}`}>
            {text}
        </p>
    );
}
 
export default SimpleText;