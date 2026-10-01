import type { PointerEvent } from "react";
import "./cards.css";

interface CardContainerProps {
    children: React.ReactNode;
    borderRadius?: number;
    index?: number;
}

// Actualiza la posición del spotlight que sigue al cursor dentro de la tarjeta
const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};

const CardContainer = ({ children, borderRadius, index = 0 }: CardContainerProps) => {
    return (
        <div
            style={{ borderRadius: `${borderRadius}px`, "--i": index } as React.CSSProperties}
            className="card-container"
            onPointerMove={handlePointerMove}
            data-reveal=""
        >
            {children}
        </div>
    );
}
 
export default CardContainer;
