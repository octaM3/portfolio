import type { FunctionComponent } from "react";

interface SectionProps {
    children: React.ReactNode;
}
 
const Section: FunctionComponent<SectionProps> = ({ children }) => {
    return (
        <section>
            {children}
        </section>
    );
}
 
export default Section;