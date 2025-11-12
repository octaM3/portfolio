import type { FunctionComponent } from "react";
import "./navbar.css"
import NavbarOption from "./navbarOption/NavbarOption";
import ThemeToggleButton from "../buttons/ThemeBtn/ThemeToggleButton";

interface NavbarProps {
    onScrollToSection:{
        home: () => void;
        aboutMe: () => void;
        skills: () => void;
        projects: () => void;
        contact: () => void;
    }
}
 
const Navbar: FunctionComponent<NavbarProps> = ({ onScrollToSection }) => {
    return (
        <div className='navbar-content navbar fixed-top'>

                <NavbarOption text="<Dev />" onClick={onScrollToSection.home} />

            <div>
                <NavbarOption text="Sobre Mi" onClick={onScrollToSection.aboutMe} />
                <NavbarOption text="Habilidades" onClick={onScrollToSection.skills} />
                <NavbarOption text="Proyectos" onClick={onScrollToSection.projects} />
                <NavbarOption text="Contacto" onClick={onScrollToSection.contact} />
                <ThemeToggleButton />
            </div>
        </div>
    );
}
 
export default Navbar;