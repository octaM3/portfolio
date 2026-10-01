import type { FunctionComponent } from "react";
import "./button.css"

interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    href?: string;
    hasIcon?: React.ReactNode;
    type: "blue" | "plain";
    size: "small" | "normal";
    iconEnd?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ text, className, hasIcon, href, onClick, type, size, iconEnd }) => {

    if (href) {
        return (
            <a
                className={`generic-btn ${type === "blue" ? "generic-btn-blue" : "generic-btn-plain"} ${className ? className : ""}`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
            >
                {!iconEnd && hasIcon}
                {text}
                {iconEnd && hasIcon}
            </a>
        );
    }

    return (
        <button
            onClick={onClick} 
            className={`generic-btn ${size === "normal" ? "normal-size-g-btn" : "small-size-g-btn"} ${type === "blue" ? "generic-btn-blue" : "generic-btn-plain"} ${className ? className : ""}`}
        >
            {!iconEnd && hasIcon}
            {text}
            {iconEnd && hasIcon}
        </button>
    );
}

export default Button;