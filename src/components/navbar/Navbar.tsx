import { useEffect, useRef, useState, type FunctionComponent } from "react";
import "./navbar.css"
import NavbarOption from "./navbarOption/NavbarOption";
import ThemeToggleButton from "../buttons/ThemeBtn/ThemeToggleButton";

interface NavbarProps {
    activeSection: string;
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

const Navbar: FunctionComponent<NavbarProps> = ({ onScrollToSection, activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let frame = 0;
        const update = () => {
            frame = 0;
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;
            progressRef.current?.style.setProperty("--progress", progress.toString());
            setScrolled(window.scrollY > 24);
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    const handleNavigate = (action: () => void) => {
        action();
        setIsOpen(false);
    };

    return (
        <div className={`nav-content navbar fixed-top ${scrolled || isOpen ? "nav-scrolled" : ""}`}>
            <div className="nav-progress" ref={progressRef} aria-hidden="true"></div>

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
                <NavbarOption text="Sobre Mi" active={activeSection === "aboutMe"} onClick={() => handleNavigate(onScrollToSection.aboutMe)} />
                <NavbarOption text="Experiencia" active={activeSection === "experience"} onClick={() => handleNavigate(onScrollToSection.experience)} />
                <NavbarOption text="Proyectos" active={activeSection === "projects"} onClick={() => handleNavigate(onScrollToSection.projects)} />
                <NavbarOption text="Formación" active={activeSection === "education"} onClick={() => handleNavigate(onScrollToSection.education)} />
                <NavbarOption text="Habilidades" active={activeSection === "skills"} onClick={() => handleNavigate(onScrollToSection.skills)} />
                <NavbarOption text="Contacto" active={activeSection === "contact"} onClick={() => handleNavigate(onScrollToSection.contact)} />
                <ThemeToggleButton />
            </div>
        </div>
    );
}
 
export default Navbar;