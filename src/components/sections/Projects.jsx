import React from 'react';
import Reveal from '../Reveal';

const projects = [
  {
    title: 'Bloomora',
    description: 'The Living Yield Garden powered by the YO SDK. Deposit real assets into YO vaults and watch them grow into a beautiful, evolving digital garden. Addictive, gamified UX featuring daily streaks and savings goals that makes users actually want to check their savings every day.',
    tags: ['Solidity', 'Foundry', 'Typescript', 'React'],
    github: 'https://github.com/U-GOD/bloomora',
    demo: 'https://bloomora-8nsunbx70-fredrick-kabus-projects.vercel.app/'
  },
  {
    title: 'SuiIntents',
    description: 'An intent-based trading protocol built on the Sui blockchain that enables users to express high-level trading goals without managing execution complexity. Solvers compete via Dutch Auction to fulfill intents, optimizing for price, speed, and fees while leveraging DeepBook V3 for on-chain liquidity.',
    tags: ['Typescript', 'Move', 'CSS', 'Next.js'],
    github: 'https://github.com/U-GOD/Intent',
    demo: 'https://sui-intent.vercel.app/'
  },
  {
    title: 'StableGuard',
    description: 'A decentralized monitoring system that provides real-time, verifiable reserve health checks and automated safeguards for stablecoins, reducing depegging and run risks through Chainlink Runtime Environment orchestration.',
    tags: ['TypeScript', 'Solidity', 'Chainlink', 'Javascript'],
    github: 'https://github.com/U-GOD/StableGuard',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 flex flex-col justify-center">
      <div className="w-full max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Works</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-light max-w-2xl">
              A collection of decentralized applications, protocols, and developer tools I've built.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={index} delay={index * 150} className="h-full">
              <div className="group h-full flex flex-col bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)] hover:border-gray-300 dark:hover:border-gray-700">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-gray-800 dark:text-gray-200 transition-transform group-hover:scale-110 duration-300">
                    <iconify-icon icon="solar:box-linear" width="24"></iconify-icon>
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="p-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="View Source">
                      <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
                    </a>
                    <a href={project.demo} className="p-2 text-gray-400 hover:text-black dark:hover:text-white transition-colors" aria-label="Live Demo">
                      <iconify-icon icon="solar:global-linear" width="22"></iconify-icon>
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}