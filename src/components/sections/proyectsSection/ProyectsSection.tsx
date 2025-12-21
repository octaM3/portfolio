import type { FunctionComponent } from "react";
import Subtitle from "../../text/subtitle/Subtitle";
import proyectos from "../../../data/proyectos";
import proyectosPersonales from "../../../data/proyectosPersonales";
import ProyectCard from "../../cards/projectCard/ProjectCard";
import CardContainer from "../../cards/CardContainer";


interface ProyectsSectionProps {

}

const ProyectsSection: FunctionComponent<ProyectsSectionProps> = () => {



    return (
        <div>
            <Subtitle text="Proyectos" format="center" type="normal" />

            <div className="row my-5 w-100">
                {proyectos.map((p, index) => (
                    <div className="col-lg-6 mb-4 d-flex justify-content-center" key={index}>
                        <CardContainer borderRadius={10}>
                            <ProyectCard proyecto={p} />
                        </CardContainer>
                    </div>
                ))}

            </div>

            <Subtitle text="Proyectos Personales" format="center" type="normal" />

            <div className="row my-5">
                {proyectosPersonales.map((p, index) => (
                    <div className="col-lg-6 mb-4 d-flex justify-content-center" key={index}>
                        <CardContainer borderRadius={10}>
                            <ProyectCard proyecto={p} />
                        </CardContainer>

                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProyectsSection;