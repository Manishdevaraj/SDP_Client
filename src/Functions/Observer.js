import { useEffect, useState, useRef } from 'react';

function useIntersectionObserver(options) {
  const [entry, setEntry] = useState(null);
  const observer = useRef(null);

  const observe = (node) => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), options);
    if (node) observer.current.observe(node);
  };

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return [observe, entry];
}

export default useIntersectionObserver;
