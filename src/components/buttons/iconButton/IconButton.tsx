import type { FunctionComponent } from "react";
import "./iconButton.css"

interface IconButtonProps {
    onClick?: () => void;
    className?: string;
    href?: string;
    children: React.ReactNode;  
}

const IconButton: FunctionComponent<IconButtonProps> = ({ className, onClick, children, href }) => {

    if(href) {
        return (
            <a
                href={href}
                className={`icon-format icon-link ${className ? className : ""}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {children}
            </a>
        );
    }
    
    return (
        <button
            onClick={onClick ? onClick : () => {}}
            className={`icon-format icon-button ${className ? className : ""}`}
        >
            {children}
        </button>
    );
}

export default IconButton;