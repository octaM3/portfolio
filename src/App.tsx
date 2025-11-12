import { useRef } from 'react';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Section from './components/section/Section'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null> ) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar onScrollToSection={{
        home: () => scrollToSection(homeRef),
        aboutMe: () => scrollToSection(aboutMeRef),
        skills: () => scrollToSection(skillsRef),
        projects: () => scrollToSection(projectsRef),
        contact: () => scrollToSection(contactRef),
      }} />

      <Section ref={homeRef}>
        <h1>hola mundo</h1>
        <div style={{ height: "1000px" }}></div>
      </Section>

      <Section ref={aboutMeRef}>
        <>sombre mi</>
        <div style={{ height: "1000px" }}></div>
      </Section>

      <Section ref={skillsRef}>
        <>skills</>
        <div style={{ height: "1000px" }}></div>
      </Section>

      <Section ref={projectsRef}>
        <>proyectos</>
        <div style={{ height: "1000px" }}></div>
      </Section>

      <Section ref={contactRef}>
        <>contacto</>
        <div style={{ height: "1000px" }}></div>
      </Section>
    </>
  )
}

export default App
