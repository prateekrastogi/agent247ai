
'use client';

import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = (options: IntersectionObserverInit) => {
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasIntersected(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current; // Capture ref.current here

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use the captured value here
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, hasIntersected] as const;
};
