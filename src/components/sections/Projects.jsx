import React from 'react';
import Reveal from '../Reveal';

const projects = [
  {
    title: 'DeFi Lending Protocol',
    description: 'A non-custodial liquidity protocol enabling users to earn interest on deposits and borrow assets. Features isolated lending markets and custom interest rate models.',
    tags: ['Solidity', 'Foundry', 'React', 'Wagmi'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Omnichain NFT Bridge',
    description: 'Secure cross-chain message passing infrastructure allowing NFT collections to be seamlessly bridged across EVM-compatible networks using LayerZero.',
    tags: ['Solidity', 'Hardhat', 'LayerZero', 'Next.js'],
    github: '#',
    demo: '#'
  },
  {
    title: 'DAO Governance Dashboard',
    description: 'Comprehensive voting and proposal management interface integrating directly with Governor Bravo contracts. Includes real-time delegation analytics.',
    tags: ['TypeScript', 'GraphQL', 'The Graph', 'Tailwind'],
    github: '#',
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