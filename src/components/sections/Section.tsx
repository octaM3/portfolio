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
        <section className={`${className ?? ""} ${withPadding ? "section-padding" : ""}`} ref={ref}>
            <div className="container-section">
                {children}
            </div>
        </section>
    );
}

export default Section;