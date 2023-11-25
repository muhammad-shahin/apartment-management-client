import { useEffect } from 'react';

const useScroll = (elementRef, animationClass, offset = 0) => {
  const handleScroll = () => {
    const element = elementRef.current;

    if (element) {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - offset && rect.bottom >= 0) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    }
  };

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      window.addEventListener('scroll', handleScroll);
      // Trigger the initial check
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [elementRef, animationClass, offset]);

  return elementRef;
};

export default useScroll;
