import React, { useState } from 'react';
import Reveal from '../Reveal';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen py-24 flex flex-col justify-center relative pb-32">
      <div className="w-full max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        <div>
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let's Build <br/>Something.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-light mb-10 max-w-sm">
              Looking for a smart contract auditor or a lead developer for your next Web3 protocol? My inbox is always open.
            </p>
            
            <div className="flex gap-4">
              <a href="https://github.com/U-GOD" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all duration-300">
                <iconify-icon icon="simple-icons:github" width="20"></iconify-icon>
              </a>
              <a href="https://x.com/u_godfvr" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all duration-300">
                <iconify-icon icon="simple-icons:x" width="20"></iconify-icon>
              </a>
              <a href="https://www.linkedin.com/in/fredrick-kabu" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all duration-300">
                <iconify-icon icon="simple-icons:linkedin" width="20"></iconify-icon>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all duration-300">
                <iconify-icon icon="simple-icons:telegram" width="20"></iconify-icon>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className="space-y-4 bg-white dark:bg-[#111] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-black/5 dark:shadow-none">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input 
                type="text" 
                id="name"
                name="name"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Your Name" 
                className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow text-black dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="email@example.com" 
                className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow text-black dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea 
                id="message"
                name="message"
                required
                value={formState.message}
                onChange={handleChange}
                placeholder="How can I help you?" 
                rows="4"
                className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-shadow resize-none text-black dark:text-white"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-black dark:bg-white text-white dark:text-black font-medium rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors disabled:opacity-70"
            >
              {isSubmitting ? (
                <iconify-icon icon="line-md:loading-twotone-loop" width="20"></iconify-icon>
              ) : submitted ? (
                <>Sent Successfully <iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></>
              ) : (
                <>Send Message <iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon></>
              )}
            </button>
          </form>
        </Reveal>

      </div>
    </section>
  );
}