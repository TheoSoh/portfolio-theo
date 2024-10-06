import { useEffect, useState } from 'react'
import { useSectionsContext } from '../contexts/sectionsContext'
import useSectionIntersectionObserver from './useSectionIntersectionObserver'

const Navigation = () => {
  const [activeSection, setActiveSection] = useState()
  const sections = useSectionsContext()

  const handleScroll = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useSectionIntersectionObserver(sections, setActiveSection)

  useEffect(() => {
    if (activeSection && activeSection.current) {
      handleScroll(activeSection)
    }
  }, [activeSection])

  return (
    <nav className='hidden md:flex w-full h-full items-center fade-in-x '>
      <ul className='flex flex-col w-fit '>
        {Object.entries(sections).map(([key, sectionRef]) => (
          <li key={key}>
            <button
            type='button'
            aria-label='Navigate to section'
            {...(activeSection !== sectionRef.current && {onClick:() => setActiveSection(sectionRef)})}
            className={`${activeSection === sectionRef.current ? 'text-graphite cursor-default' : 'text-green active:text-light-green'} 
            font-mono font-bold text-lg `}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation