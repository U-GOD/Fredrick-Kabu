import React from 'react';
import Reveal from '../Reveal';

const skills = [
  'Solidity', 'Rust', 'EVM', 'Hardhat', 'Foundry', 'Move', 'Haskell',
  'ethers.js', 'Wagmi', 'RainbowKit', 'React', 'TypeScript', 
  'IPFS', 'Chainlink', 'Node.js', 'GraphQL'
];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">About Me</h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  I'm a passionate Blockchain Developer with a deep focus on protocol engineering and decentralized application architecture. My journey started in traditional full-stack development before diving down the Web3 rabbit hole.
                </p>
                <p>
                  I specialize in writing secure, gas-optimized smart contracts and building intuitive frontend interfaces that abstract away the complexities of blockchain interactions for end-users.
                </p>
                <p>
                  When I'm not auditing code or exploring new consensus mechanisms, I contribute to open-source tools and participate in global hackathons.
                </p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal delay={200}>
              <div className="bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 rounded-3xl p-8 shadow-xl shadow-black/5 dark:shadow-none">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
                  Technical Arsenal
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={skill} 
                      className="px-4 py-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-default"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}