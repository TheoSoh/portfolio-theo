import { useEffect, useState } from 'react';
import { useSectionsContext } from '../contexts/sectionsContext';
import useSectionIntersectionObserver from './useSectionIntersectionObserver';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState();
  const sections = useSectionsContext();

  const handleScroll = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useSectionIntersectionObserver(sections, setActiveSection);

  useEffect(() => {
    if (activeSection && activeSection.current) {
      handleScroll(activeSection);
    }
  }, [activeSection]);

  return (
    <nav className="fade-in-x hidden h-full w-full items-center lg:flex">
      <ul className="flex w-fit select-none flex-col">
        {Object.entries(sections).map(([key, sectionRef]) => (
          <li key={key}>
            <button
              type="button"
              aria-label="Navigate to section"
              {...(activeSection !== sectionRef.current && {
                onClick: () => setActiveSection(sectionRef),
              })}
              className={`${activeSection === sectionRef.current ? 'cursor-default bg-graphite' : 'bg-green hover:bg-gradient-to-t from-light-green via-green to-green'} text-[transparent] font-mono text-lg font-bold bg-clip-text`}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
