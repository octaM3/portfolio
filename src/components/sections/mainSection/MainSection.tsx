import type { FunctionComponent } from "react"
import Button from "../../buttons/button/Button"
import IconButton from "../../buttons/iconButton/IconButton"
import SimpleText from "../../text/simpleText/SimpleText"
import Subtitle from "../../text/subtitle/Subtitle"
import Title from "../../text/title/Title"

interface MainSectionProps {
  onScrollToSection: {
    projects: () => void;
    contact: () => void;
  }
}

const MainSection: FunctionComponent<MainSectionProps> = ({ onScrollToSection }) => {

  return (
    <div className="position-relative d-flex flex-column align-items-center justify-content-center main-hero text-center">
      <SimpleText color="gray" size="big" className="hero-step hero-step-1" text="HOLA, SOY" />
      <Title text="Octavio Curadelli" className="hero-step hero-step-2" />
      <Subtitle text="Desarrollador Full Stack" format="center" type="blue" className="hero-step hero-step-3" />
      <div className="main-hero-desc mt-3 hero-step hero-step-4">
        <SimpleText color="gray" size="big" text="Diseño, desarrollo y despliego en producción aplicaciones web, APIs y arquitecturas backend, de punta a punta." />
      </div>
      <div className="d-flex align-items-center my-2 hero-step hero-step-4">
        <i className="bi bi-geo-alt-fill me-2"></i>
        <SimpleText color="gray" className="m-0" size="mini" text="Mendoza, Argentina." />
      </div>

      <div className="d-flex flex-wrap justify-content-center gap-3 my-4 hero-step hero-step-5">
        <Button size="normal" type="blue" text="Ver Proyectos" onClick={onScrollToSection.projects} hasIcon={<i className="bi bi-arrow-right btn-arrow"></i>} iconEnd />
        <Button size="normal" type="plain" text="Contactar" onClick={onScrollToSection.contact} />
      </div>
      <div className="mt-2 hero-step hero-step-6">
        <IconButton className="m-2" href="https://github.com/octaM3">
          <i className="bi bi-github"></i>
        </IconButton>
        <IconButton className="m-2" href="https://www.linkedin.com/in/octavio-curadelli-258654288/">
          <i className="bi bi-linkedin"></i>
        </IconButton>
        <IconButton className="m-2" href="mailto:octaviodevcuradelli@gmail.com">
          <i className="bi bi-envelope"></i>
        </IconButton>
      </div>

      <div className="bouncing-container position-absolute mb-5">
        <i className="bi bi-arrow-down"></i>
      </div>

    </div>
  )
}

export default MainSection