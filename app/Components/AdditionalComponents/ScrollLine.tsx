import React, { useState, useEffect, useRef } from 'react';

const ScrollLine: React.FC = () => {
  const [lineWidth, setLineWidth] = useState<number>(0);
  const [inView, setInView] = useState<boolean>(false);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (inView) {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;

      setLineWidth(scrollPercentage);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [inView]);

  const lineStyle: React.CSSProperties = {
    width: `${lineWidth}%`,
    height: '2px',
    boxShadow:'0px 0px 5px var(--accent)',
    backgroundColor: 'var(--sky)',
    transition: 'width 0.5s ease-out',
    margin: '70px 0',
  };

  return <div ref={lineRef} style={lineStyle}></div>;
};

export default ScrollLine;
