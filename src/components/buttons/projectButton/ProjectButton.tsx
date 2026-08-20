import "./projectButton.css";

interface ProjectButtonProps {
    text: string;
    href: string;
    icon?: string;
}

const ProjectButton = ({ text, href, icon }: ProjectButtonProps) => {
    return (
        <a className="project-btn" href={href} target="_blank" rel="noopener noreferrer">
            {icon && <i className={`bi ${icon} me-1`}></i>}
            {text}
        </a>
    );
}

export default ProjectButton;
