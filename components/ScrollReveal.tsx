// components/ScrollReveal.tsx
import React, { useRef, useEffect, useState } from 'react';

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
};

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            // optionally unobserve to trigger only once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out transform ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
