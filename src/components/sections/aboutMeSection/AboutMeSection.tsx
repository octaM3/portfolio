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
                    text={"Mi nombre es Octavio Curadelli, un apasionado por la programación y profundamente motivado para seguir aprendiendo y creciendo profesionalmente. Recientemente finalicé mis estudios como Técnico Programador en la Universidad Tecnológica Nacional, lo que me ha dado una sólida base técnica y el impulso para enfrentar nuevos desafíos."}
                    size="big"
                />
                <SimpleText
                    color="gray"
                    text={"parrafo 2"}
                    size="big"
                />
                <SimpleText
                    color="gray"
                    text={"parrafo 3"}
                    size="big"
                />
            </div>
        </div>
    );
}

export default AboutMeSection;