import type { FunctionComponent } from "react";
import type { IProyecto } from "../../../../types/proyecto";


interface ProyectCardProps {
    proyecto: IProyecto;
}
 
const ProyectCard: FunctionComponent<ProyectCardProps> = ({ proyecto }) => {
    return (
        <div className="proyect-card">
            <h3>{proyecto.title}</h3>
        </div>
    );
}
 
export default ProyectCard;