import { useRef } from 'react'
import { SectionsContext } from './contexts/sectionsContext'
import NavMenu from './components/NavMenu'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Contact from './sections/Contact'

function App() {
  const aboutRef = useRef()
  const projectsRef = useRef()
  const educationRef = useRef()
  const contactRef = useRef()

  const sections = {
    'About' : aboutRef,
    'Projects' : projectsRef,
    'Education' : educationRef,
    'Contact' : contactRef,
  }

  return (
    <SectionsContext.Provider value={sections}>
      <NavMenu />
      <div className='flex justify-center py-28 px-[15%] md:px-[10%] w-full text-graphite'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[84.575rem]">
          <div className='w-full h-fit mb-16'>
            <Hero />
          </div>
          <div className='flex flex-col w-full relative gap-16 md:gap-20 lg:gap-28'>
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

export default App
