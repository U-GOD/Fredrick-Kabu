import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';
import FloatingNav from './components/FloatingNav';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

function App() {
  // Initialize theme from localStorage or system preference, default to dark
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default to dark as requested
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="relative w-full selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <ProgressBar />
      
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <FloatingNav isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;