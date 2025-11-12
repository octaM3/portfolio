import type { FunctionComponent } from "react";

interface NavbarOptionProps {
    text: string;
    onClick: () => void;
}
 
const NavbarOption: FunctionComponent<NavbarOptionProps> = ({ onClick, text }) => {
    return (
        <button onClick={onClick} className="btn btn-link">
            {text}
        </button>
    );
}
 
export default NavbarOption;