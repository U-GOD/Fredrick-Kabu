import React from 'react';
import Reveal from '../Reveal';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm text-xs font-medium text-gray-600 dark:text-gray-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for new projects
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            Building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-500">
              Decentralized Future
            </span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 font-light">
            Blockchain Developer & Web3 Builder focusing on smart contract security, scalable dApps, and seamless user experiences.<span className="animate-blink inline-block w-2 h-5 bg-black dark:bg-white ml-1 align-middle"></span>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <button 
            onClick={scrollToWork}
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">View My Work</span>
            <iconify-icon icon="solar:arrow-right-linear" width="20" class="relative z-10 transition-transform group-hover:translate-x-1"></iconify-icon>
            {/* Subtle glow effect behind button text */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black dark:from-gray-200 dark:to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </Reveal>
      </div>
    </section>
  );
}