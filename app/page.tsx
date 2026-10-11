"use client";

import { FormEvent, ReactNode, useEffect, useState } from "react";
import { email, experience, projects, skills } from "./content";

const sections = [
  { id: "hero", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "projects", label: "Work", icon: "folder" },
  { id: "experience", label: "Experience", icon: "case" },
  { id: "contact", label: "Contact", icon: "mail" },
] as const;

export default function Home() {
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);
  const [dark, setDark] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? scrolled / height : 0);

      const marker = scrolled + window.innerHeight * 0.35;
      let current = "hero";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= marker) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio note from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${from}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div className="relative min-h-screen selection:bg-gray-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <div className="fixed top-0 left-0 z-50 h-1 w-full bg-black/5 dark:bg-white/5">
        <div
          className="h-full bg-gray-800 transition-[width] duration-150 ease-out dark:bg-gray-200"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <main>
        <section
          id="hero"
          className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
        >
          <div className="dot-grid pointer-events-none absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" />
          <div className="rise relative z-10 mx-auto max-w-5xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border border-gray-200 bg-gray-50/50 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400">
              Available for new projects
            </div>
            <h2 className="mb-4 text-xl font-medium text-gray-600 md:text-2xl dark:text-gray-400">
              Hi, I&apos;m Fredrick <span aria-hidden>👋</span>
            </h2>
            <h1 className="mb-6 text-5xl font-bold tracking-tighter md:text-7xl lg:text-8xl">
              Building the{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent dark:from-white dark:to-gray-500">
                Decentralized Future
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg font-light text-gray-600 md:text-xl dark:text-gray-400">
              Blockchain engineer focused on protocols, smart contract security,
              and the machinery underneath decentralized markets.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 font-medium text-white transition-transform hover:scale-105 active:scale-95 dark:bg-white dark:text-black"
            >
              View My Work
              <Arrow />
            </a>
          </div>
        </section>

        <section id="about" className="relative flex items-center py-24">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
                About Me
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  I&apos;m a blockchain engineer. I like the part of a system
                  you can specify: the state it keeps, the rules for moving
                  value, and what happens when something has to stop.
                </p>
                <p>
                  I write Solidity and Rust, and test the contracts with
                  Foundry. Most of the time goes to the parts that have to fail
                  closed: escrow, revocation, oracle attestations, and
                  settlement.
                </p>
                <p>
                  The other thread is applied cryptography, which I am working
                  through in Rust: extended gcd, modular exponentiation,
                  primitive roots. I like a formula you can check, which is
                  also how I want a protocol to read.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-xl shadow-black/5 dark:border-gray-800 dark:bg-[#111] dark:shadow-none">
              <h3 className="mb-6 text-xl font-semibold">Technical Arsenal</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:border-black dark:border-gray-800 dark:bg-[#1a1a1a] dark:hover:border-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="flex flex-col justify-center py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Selected Works
              </h2>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                Protocols, contracts, and libraries. The part worth reading is
                the mechanism.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] dark:border-gray-800 dark:bg-[#0f0f0f] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.04)]"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 font-mono text-sm text-gray-800 transition-transform duration-300 group-hover:scale-110 dark:bg-gray-900 dark:text-gray-200">
                    {project.name.slice(0, 2)}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mb-8 flex-grow text-sm leading-relaxed font-light text-gray-600 dark:text-gray-400">
                    {project.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                    <ul className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800/50 dark:text-gray-300"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-900 underline-offset-4 hover:underline dark:text-gray-100"
                    >
                      Source
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="flex flex-col justify-center bg-gray-50/50 py-24 dark:bg-[#0a0a0a]"
        >
          <div className="mx-auto w-full max-w-4xl px-6">
            <div className="mb-20 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Experience
              </h2>
              <p className="text-lg font-light text-gray-600 dark:text-gray-400">
                My professional journey in engineering.
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 hidden w-px -translate-x-1/2 bg-gray-200 md:left-1/2 md:block dark:bg-gray-800" />
              <div className="space-y-12">
                {experience.map((job) => (
                  <div
                    key={job.org}
                    className="relative flex flex-col items-center md:flex-row-reverse"
                  >
                    <div className="absolute left-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-black bg-white md:flex dark:border-white dark:bg-black" />
                    <div className="w-full md:w-1/2 md:pl-12">
                      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:border-gray-800 dark:bg-[#111]">
                        <span className="mb-2 block text-xs font-semibold tracking-wider text-gray-500 uppercase">
                          {job.dates}
                        </span>
                        <h3 className="mb-1 text-xl font-bold tracking-tight">
                          {job.role}
                        </h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                          {job.org}
                        </p>
                        <p className="text-sm leading-relaxed font-light text-gray-600 dark:text-gray-400">
                          {job.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative flex flex-col justify-center py-24 pb-40">
          <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
                Let&apos;s Build
                <br />
                Something.
              </h2>
              <p className="mb-10 max-w-sm text-lg font-light text-gray-600 dark:text-gray-400">
                Need a protocol read carefully, or someone to build the part
                that isn&apos;t the interface? Write me.
              </p>
              <div className="flex gap-3">
                <Social href="https://github.com/U-GOD" label="GitHub">
                  <Github />
                </Social>
                <Social href="https://x.com/u_godfvr" label="X">
                  <XIcon />
                </Social>
                <Social
                  href="https://www.linkedin.com/in/fredrick-kabu"
                  label="LinkedIn"
                >
                  <LinkedIn />
                </Social>
                <Social href={`mailto:${email}`} label="Email">
                  <Mail />
                </Social>
              </div>
            </div>
            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl shadow-black/5 dark:border-gray-800 dark:bg-[#111] dark:shadow-none"
            >
              <Field label="Name" name="name" type="text" placeholder="Your Name" />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="email@example.com"
              />
              <label className="block text-sm font-medium">
                Message
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="How can I help you?"
                  className="mt-2 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-black transition-shadow focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-800 dark:bg-[#1a1a1a] dark:text-white dark:focus:ring-white"
                />
              </label>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                {sent ? "Opening mail" : "Send Message"}
                <Arrow />
              </button>
            </form>
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
        <nav
          aria-label="Sections"
          className="float-bob flex items-center gap-1 rounded-full border border-gray-200/50 bg-white/70 px-3 py-2 shadow-2xl shadow-black/10 backdrop-blur-xl sm:gap-2 dark:border-gray-800/50 dark:bg-[#1a1a1a]/70 dark:shadow-white/5"
        >
          {sections.map((section) => {
            const on = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-label={`Go to ${section.label}`}
                aria-current={on ? "true" : undefined}
                className={`flex items-center rounded-full px-3 py-2.5 text-sm font-medium transition-all duration-300 sm:px-4 ${
                  on
                    ? "bg-black text-white shadow-sm dark:bg-white dark:text-black"
                    : "text-gray-600 hover:bg-gray-100/50 hover:text-black dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
                }`}
              >
                <Icon name={section.icon} />
              </a>
            );
          })}
          <div className="mx-1 h-6 w-px bg-gray-300 sm:mx-2 dark:bg-gray-700" />
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-100/50 hover:text-black dark:text-gray-400 dark:hover:bg-gray-800/50 dark:hover:text-white"
          >
            {dark ? <Sun /> : <Moon />}
          </button>
        </nav>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <label className="block text-sm font-medium">
      {label}
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-black transition-shadow focus:ring-2 focus:ring-black focus:outline-none dark:border-gray-800 dark:bg-[#1a1a1a] dark:text-white dark:focus:ring-white"
      />
    </label>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-colors hover:border-black hover:text-black dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:border-white dark:hover:text-white"
    >
      {children}
    </a>
  );
}

function Icon({ name }: { name: (typeof sections)[number]["icon"] }) {
  if (name === "home") return <HomeIcon />;
  if (name === "user") return <User />;
  if (name === "folder") return <Folder />;
  if (name === "case") return <Case />;
  return <Mail />;
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function User() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 19.2c1.4-2.6 3.7-3.7 6.5-3.7s5.1 1.1 6.5 3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Folder() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3.5 7.5A1.5 1.5 0 0 1 5 6h4l2 2h8a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5v-10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function Case() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Mail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function Moon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M16.5 3.5A8.5 8.5 0 1 0 20.5 16 7 7 0 0 1 16.5 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function Sun() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Github() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.9 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.9c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M14.7 10.3 22 2h-2.2l-6.3 7.2L8.2 2H2l7.7 11.1L2 22h2.2l6.8-7.8L15.6 22H22l-7.3-11.7Zm-2.4 2.8-.8-1.1L5 3.5h2.7l5 7.2.8 1.1 6.5 9.2h-2.7l-5.4-7.9Z" />
    </svg>
  );
}

function LinkedIn() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.7 3.3A2.2 2.2 0 1 0 4.7 7.7 2.2 2.2 0 0 0 4.7 3.3ZM3 9h3.4v12H3V9Zm6.2 0H12.5v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5V21H17v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.2V9Z" />
    </svg>
  );
}
