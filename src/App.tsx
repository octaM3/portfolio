import { useRef } from 'react';
import Navbar from './components/navbar/Navbar';
import Section from './components/sections/Section'
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import MainSection from './components/sections/mainSection/MainSection';
import AboutMeSection from './components/sections/aboutMeSection/AboutMeSection';
import ExperienceSection from './components/sections/experienceSection/ExperienceSection';
import EducationSection from './components/sections/educationSection/EducationSection';
import SkillSection from './components/sections/skillSection/SkillSection';
import ProyectsSection from './components/sections/proyectsSection/ProyectsSection';
import ContactSection from './components/sections/contactSection/ContactSection';

function App() {

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutMeRef = useRef<HTMLElement | null>(null);
  const experienceRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
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
        experience: () => scrollToSection(experienceRef),
        projects: () => scrollToSection(projectsRef),
        education: () => scrollToSection(educationRef),
        skills: () => scrollToSection(skillsRef),
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

      <Section withPadding={true} className='primary-bg-section' ref={experienceRef}>
        <ExperienceSection />
      </Section>

      <Section withPadding={true} className='secondary-bg-section' ref={projectsRef}>
        <ProyectsSection />
      </Section>

      <Section withPadding={true} className='primary-bg-section' ref={educationRef}>
        <EducationSection />
      </Section>

      <Section withPadding={true} className='secondary-bg-section' ref={skillsRef}>
        <SkillSection />
      </Section>

      <Section withPadding={true} className='primary-bg-section' ref={contactRef}>
        <ContactSection />
      </Section>
    </>
  )
}

export default App
