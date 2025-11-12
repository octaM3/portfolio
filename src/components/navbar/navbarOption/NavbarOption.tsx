import type { FunctionComponent } from "react";

interface NavbarOptionProps {
    text: string;
    onClick: () => void;
}
 
const NavbarOption: FunctionComponent<NavbarOptionProps> = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className="navbar-option-btn mx-2">
            {text}
        </button>
    );
}
 
export default NavbarOption;