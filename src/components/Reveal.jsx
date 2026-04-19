import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export default function Reveal({ children, className, delay = 0 }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={clsx(
        'reveal-hidden',
        isVisible && 'reveal-visible',
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}