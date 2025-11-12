import type { FunctionComponent } from "react";
import "./iconButton.css"

interface IconButtonProps {
    onClick?: () => void;
    className?: string;
    children: React.ReactNode;  
}

const IconButton: FunctionComponent<IconButtonProps> = ({ className, onClick, children }) => {
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className={`icon-button ${className ? className : ""}`}
        >
            {children}
        </button>
    );
}

export default IconButton;