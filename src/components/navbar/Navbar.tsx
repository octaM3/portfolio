import { useState, type FunctionComponent } from "react";
import "./navbar.css"
import NavbarOption from "./navbarOption/NavbarOption";
import ThemeToggleButton from "../buttons/ThemeBtn/ThemeToggleButton";

interface NavbarProps {
    onScrollToSection:{
        home: () => void;
        aboutMe: () => void;
        experience: () => void;
        education: () => void;
        skills: () => void;
        projects: () => void;
        contact: () => void;
    }
}

const Navbar: FunctionComponent<NavbarProps> = ({ onScrollToSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigate = (action: () => void) => {
        action();
        setIsOpen(false);
    };

    return (
        <div className='nav-content navbar fixed-top'>

                <NavbarOption text="<Dev />" onClick={() => handleNavigate(onScrollToSection.home)} mainBtn={true} />

            <button
                className="nav-toggle"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label="Abrir menú"
                aria-expanded={isOpen}
            >
                <i className={`bi ${isOpen ? "bi-x-lg" : "bi-list"}`}></i>
            </button>

            <div className={`nav-links ${isOpen ? "nav-links-open" : ""}`}>
                <NavbarOption text="Sobre Mi" onClick={() => handleNavigate(onScrollToSection.aboutMe)} />
                <NavbarOption text="Experiencia" onClick={() => handleNavigate(onScrollToSection.experience)} />
                <NavbarOption text="Proyectos" onClick={() => handleNavigate(onScrollToSection.projects)} />
                <NavbarOption text="Formación" onClick={() => handleNavigate(onScrollToSection.education)} />
                <NavbarOption text="Habilidades" onClick={() => handleNavigate(onScrollToSection.skills)} />
                <NavbarOption text="Contacto" onClick={() => handleNavigate(onScrollToSection.contact)} />
                <ThemeToggleButton />
            </div>
        </div>
    );
}
 
export default Navbar;