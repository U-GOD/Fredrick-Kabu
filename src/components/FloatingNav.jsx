import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

const navItems = [
  { id: 'hero', label: 'Home', icon: 'solar:home-smile-linear' },
  { id: 'about', label: 'About', icon: 'solar:user-linear' },
  { id: 'projects', label: 'Projects', icon: 'solar:folder-with-files-linear' },
  { id: 'experience', label: 'Experience', icon: 'solar:suitcase-lines-linear' },
  { id: 'contact', label: 'Contact', icon: 'solar:letter-linear' },
];

export default function FloatingNav({ isDark, toggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 nav-island-enter">
      <div className="animate-float-bob">
        <nav className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full backdrop-blur-xl bg-white/70 dark:bg-[#1a1a1a]/70 border border-gray-200/50 dark:border-gray-800/50 shadow-2xl shadow-black/10 dark:shadow-white/5">
          
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={clsx(
                  "flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  isActive 
                    ? "bg-black text-white dark:bg-white dark:text-black shadow-sm" 
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50"
                )}
                aria-label={`Go to ${item.label} section`}
              >
                <iconify-icon icon={item.icon} width="18" height="18"></iconify-icon>
                <span className={clsx("hidden md:inline-block", isActive ? "block" : "hidden sm:block")}>
                  {item.label}
                </span>
              </button>
            );
          })}

          <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-700 mx-1 sm:mx-2"></div>

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
            aria-label="Toggle theme"
          >
            <iconify-icon 
              icon={isDark ? "solar:sun-linear" : "solar:moon-linear"} 
              width="20" 
              height="20"
              class="transition-transform duration-500 hover:rotate-45"
            ></iconify-icon>
          </button>
        </nav>
      </div>
    </div>
  );
}