import type { FunctionComponent } from "react";

interface NavbarOptionProps {
    text: string;
    onClick: () => void;
    mainBtn?: boolean;
    active?: boolean;
}
 
const NavbarOption: FunctionComponent<NavbarOptionProps> = ({ onClick, text, mainBtn, active }) => {
    return (
        <button
            onClick={onClick}
            aria-current={active ? "true" : undefined}
            className={`nav-op-styles ${mainBtn ? "nav-main-option-btn" : "nav-option-btn mx-2"} ${active ? "nav-option-active" : ""}`}
        >
            {text}
        </button>
    );
}
 
export default NavbarOption;