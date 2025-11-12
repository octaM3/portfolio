import type { FunctionComponent } from "react";
import "./sections.css";

interface SectionProps {
    children: React.ReactNode;
    ref: React.Ref<HTMLElement>;
}
 
const Section: FunctionComponent<SectionProps> = ({ children, ref }) => {
    return (
        <section ref={ref}>
            {children}
        </section>
    );
}
 
export default Section;