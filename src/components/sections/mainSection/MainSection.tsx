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
    <div className="position-relative d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <SimpleText size="big" text="HOLA, SOY" />
      <Title text="Octavio Curadelli" />
      <Subtitle text="Desarrollador Full Stack" format="center" type="blue" />
      <div className="w-50 mt-3">
        <SimpleText size="big" text="Creando experiencias web modernas y funcionales con atención al detalle y las mejores prácticas." />
      </div>
      <div className="d-flex align-items-center my-2">
        <i className="bi bi-geo-alt-fill me-2"></i>
        <SimpleText className="m-0" size="mini" text="Mendoza, Argentina." />
      </div>
      
      <div className="my-4">
        <Button className="me-3" size="normal" type="blue" text="Ver Proyectos" onClick={onScrollToSection.projects} />
        <Button className="ms-3" size="normal" type="plain" text="Contactar" onClick={onScrollToSection.contact} />
      </div>
      <div className="mt-2">
        <IconButton className="m-2" href="https://github.com/octaM3">
          <i className="bi bi-github"></i>
        </IconButton>
        <IconButton className="m-2" href="https://www.linkedin.com/in/octavio-curadelli-258654288/">
          <i className="bi bi-linkedin"></i>
        </IconButton>
        <IconButton className="m-2" href="octaviodevcuradelli@gmail.com">
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