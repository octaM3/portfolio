import type { FunctionComponent, PointerEvent } from "react";
import "./sections.css";

interface SectionProps {
    children: React.ReactNode;
    ref: React.Ref<HTMLElement>;
    className?: string;
    withPadding: boolean;
}

// Mueve el brillo de fondo de la sección siguiendo al cursor
const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
};

// Al salir el cursor, el brillo vuelve a su posición por defecto (centrado en el hero)
const handlePointerLeave = (e: PointerEvent<HTMLElement>) => {
    e.currentTarget.style.removeProperty("--glow-x");
    e.currentTarget.style.removeProperty("--glow-y");
};

const Section: FunctionComponent<SectionProps> = ({ children, ref, className, withPadding }) => {
    return (
        <section
            className={`section-glow-host ${className ?? ""} ${withPadding ? "section-padding" : ""}`}
            ref={ref}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
        >
            <div className="section-glow" aria-hidden="true"></div>
            <div className="container-section">
                {children}
            </div>
        </section>
    );
}

export default Section;
