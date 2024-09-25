import { useEffect } from 'react';

const useFadeInIntersectionObserver = (ref, setIsVisible) => {
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(callback, options);
    
    if (ref && ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, setIsVisible]);
}

export default useFadeInIntersectionObserver