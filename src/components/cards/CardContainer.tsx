import "./cards.css";

interface CardContainerProps {
    children: React.ReactNode;
    borderRadius?: number;
}

const CardContainer = ({ children, borderRadius }: CardContainerProps) => {
    return (
        <div style={{ borderRadius: `${borderRadius}px` }} className="card-container">
            {children}
        </div>
    );
}
 
export default CardContainer;