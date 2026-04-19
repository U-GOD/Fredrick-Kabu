import React from 'react';
import Reveal from '../Reveal';

const experiences = [
  {
    role: 'Blockchain Developer',
    company: 'Velsync',
    date: 'Dec 2025 - Jan 2026',
    description: 'Blockchain internship focused on smart contract development fundamentals. Spent the month learning Solidity and smart contract testing with Foundry, studying the codebase, and building foundational skills in protocol engineering.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-24 flex flex-col justify-center bg-gray-50/50 dark:bg-[#0a0a0a]">
      <div className="w-full max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Experience</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-light">My professional journey in engineering.</p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-gray-800 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <Reveal key={index} delay={index * 150}>
                  <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white dark:bg-black border-2 border-black dark:border-white z-10"></div>

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                      <div className="bg-white dark:bg-[#111] p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2 block">
                          {exp.date}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight mb-1">{exp.role}</h3>
                        <h4 className="text-md text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-light">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}