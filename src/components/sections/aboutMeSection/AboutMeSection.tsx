import type { FunctionComponent } from "react";
import Subtitle from "../../text/subtitle/Subtitle";
import SimpleText from "../../text/simpleText/SimpleText";

interface AboutMeSectionProps {

}

const AboutMeSection: FunctionComponent<AboutMeSectionProps> = () => {
    return (
        <div>
            <Subtitle text="Sobre Mí" format="left" type="normal" />

            <div className="mt-5">
                <SimpleText
                    color="gray"
                    text={"Soy Octavio Curadelli, Desarrollador Full Stack de Mendoza, Argentina, con más de 2 años de experiencia diseñando, desarrollando y desplegando en producción aplicaciones web, APIs y arquitecturas backend con Python, FastAPI, NestJS, React y Next.js."}
                    size="big"
                />
                <SimpleText
                    color="gray"
                    text={"Construí soluciones end-to-end para los sectores de logística, turismo, videojuegos y cloud, integrando pasarelas de pago (Mercado Pago, Stripe), bases de datos relacionales (PostgreSQL, MariaDB) y plataformas de datos (Databricks, Snowflake)."}
                    size="big"
                />
                <SimpleText
                    color="gray"
                    text={"Trabajo tanto en equipo como de forma autónoma, haciéndome cargo del ciclo completo del producto. Soy Técnico Universitario en Programación egresado de la Universidad Tecnológica Nacional."}
                    size="big"
                />
            </div>
        </div>
    );
}

export default AboutMeSection;