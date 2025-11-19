import type { FunctionComponent } from "react";
import "./sections.css";

interface SectionProps {
    children: React.ReactNode;
    ref: React.Ref<HTMLElement>;
    className?: string;
    withPadding: boolean;
}

const Section: FunctionComponent<SectionProps> = ({ children, ref, className, withPadding }) => {
    return (
        <section style={ withPadding ? { paddingTop: "140px", paddingBottom: "140px" } : {}} className={`${className && className}`} ref={ref}>
            <div className="container-section">
                {children}
            </div>
        </section>
    );
}

export default Section;