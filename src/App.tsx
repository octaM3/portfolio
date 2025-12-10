import { useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import Section from './components/sections/Section'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import MainSection from './components/sections/mainSection/MainSection';
import AboutMeSection from './components/sections/aboutMeSection/AboutMeSection';
import SkillSection from './components/sections/skillSection/SkillSection';
import ProyectsSection from './components/sections/proyectsSection/ProyectsSection';

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

      <Section withPadding={false} className='primary-bg-section' ref={homeRef}>
        <MainSection onScrollToSection={{
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef),
        }} />
      </Section>

      <Section withPadding={true} className='secondary-bg-section' ref={aboutMeRef}>
        <AboutMeSection />
      </Section>

      <Section withPadding={true} className='primary-bg-section' ref={skillsRef}>
        <SkillSection />
      </Section>

      <Section withPadding={true} className='secondary-bg-section' ref={projectsRef}>
        <ProyectsSection />
      </Section>

      <Section withPadding={true} className='primary-bg-section' ref={contactRef}>
        <>contacto</>
        <div style={{ height: "1000px" }}></div>
      </Section>
    </>
  )
}

export default App
