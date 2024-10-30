import { useRef } from 'react';
import { SectionsContext } from './contexts/sectionsContext';
import About from './sections/About';
import Contact from './sections/Contact';
import Education from './sections/Education';
import Hero from './sections/Hero';
import Projects from './sections/Projects';

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();
  const educationRef = useRef();
  const contactRef = useRef();

  const sections = {
    About: aboutRef,
    Projects: projectsRef,
    Education: educationRef,
    Contact: contactRef,
  };

  return (
    <SectionsContext.Provider value={sections}>
      <div className="flex w-full justify-center px-[15%] py-[15vh] text-graphite md:px-[10%]">
        <div className="grid w-full max-w-[84rem] grid-cols-1 md:grid-cols-2">
          <div className="mb-20 h-fit w-full">
            <Hero />
          </div>
          <div className="flex w-full flex-col">
            <About sectionRef={aboutRef} />
            <Projects sectionRef={projectsRef} />
            <Education sectionRef={educationRef} />
            <Contact sectionRef={contactRef} />
          </div>
        </div>
      </div>
    </SectionsContext.Provider>
  );
}

export default App;
