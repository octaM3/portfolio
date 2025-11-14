import IconButton from "../../buttons/iconButton/IconButton"
import SimpleText from "../../text/simpleText/SimpleText"
import Subtitle from "../../text/subtitle/Subtitle"
import Title from "../../text/title/Title"

const MainSection = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <SimpleText format="normal" text="HOLA, SOY" />
      <Title text="Octavio Curadelli" />
      <Subtitle text="Desarrollador Full Stack" format="center" type="blue" />
      <div className="w-50">
        <SimpleText format="normal" text="Creando experiencias web modernas y funcionales con atención al detalle y las mejores prácticas." />
      </div>
      <SimpleText format="mini" text="Godoy Cruz, Mendoza." />
      <div>

      </div>
      <div>
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
    </div>
  )
}

export default MainSection