import { useEffect, useState } from 'react'
import { useSectionsContext } from '../contexts/sectionsContext'
import useIntersectionObserver from './useIntersectionObserver'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState()
  const sections = useSectionsContext()

  const handleScroll = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useIntersectionObserver(sections, setActiveSection)

  useEffect(() => {
    if (activeSection && activeSection.current) {
      handleScroll(activeSection)
    }
  }, [activeSection])

  return (
    <nav className='flex w-full h-full items-center'>
      <ul className='flex flex-col w-fit '>
        {Object.entries(sections).map(([key, sectionRef]) => (
          <li key={key}>
            <p
            {...(activeSection !== sectionRef.current && {onClick:() => setActiveSection(sectionRef)})}
            className={`${activeSection === sectionRef.current ? 'text-graphite' : 'text-green cursor-pointer'} 
            font-mono font-bold md:text-lg`}
            >
              {key}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation