interface ProjectTecnologyLabelProps {
    text: string;
}

const ProjectTecnologyLabel = ({ text }: ProjectTecnologyLabelProps) => {
    return (
        <div className="card-tecnology-label">
            {text}
        </div>
    );
}
 
export default ProjectTecnologyLabel;