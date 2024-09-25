import { useEffect } from 'react';

const useIntersectionObserver = (sections, setActiveSection) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          setActiveSection(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const sectionRefs = Object.values(sections);
    sectionRefs.forEach((sectionRef) => {
      if (sectionRef) observer.observe(sectionRef.current);
    });

    return () => {
      sectionRefs.forEach((sectionRef) => {
        if (sectionRef) observer.unobserve(sectionRef.current);
      });
    };
  }, [sections, setActiveSection]);
};

export default useIntersectionObserver;