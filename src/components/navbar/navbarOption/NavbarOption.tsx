import type { FunctionComponent } from "react";

interface NavbarOptionProps {
    text: string;
    onClick: () => void;
    mainBtn?: boolean;
}
 
const NavbarOption: FunctionComponent<NavbarOptionProps> = ({ onClick, text, mainBtn }) => {
    return (
        <button onClick={onClick} className={`nav-op-styles ${mainBtn ? "nav-main-option-btn" : "nav-option-btn mx-2"}`}>
            {text}
        </button>
    );
}
 
export default NavbarOption;