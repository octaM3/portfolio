interface ProjectButtonProps {
    text: string
    href: string
}
 
const ProjectButton = ({ text, href }: ProjectButtonProps) => {
    return (
        <a className="" href={href}>{text}</a>
    );
}
 
export default ProjectButton;