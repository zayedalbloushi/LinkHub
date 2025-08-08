'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, PlayCircle, FileDown } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-black text-white">
      {/* Animated background (reuses your globals.css animation) */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-blue-700 via-purple-700 to-fuchsia-700 bg-[length:200%_200%] animate-gradient-xy" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-fuchsia-500 opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-orange-400 opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.07),rgba(0,0,0,0))]" />
      </div>

      {/* Header */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center gap-3">
          <img src="/profile.jpg" alt="Example" className="h-9 w-9 rounded-full ring-2 ring-white/10" />
          <span className="text-sm font-semibold tracking-wide">John Doe</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          <Link
            href="/links"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-xs text-white/85 transition hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Links <ArrowRight className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4">
        {/* Hero */}
        <section className="grid items-center gap-8 py-10 md:grid-cols-2 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-xl"
          >
            <h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">
             Breif Introduction of John Doe
            </h1>
            <p className="mt-4 text-pretty text-sm text-white/75 md:text-base">
             Example text for the introduction section. The quick brown fox jumps over the lazy dog.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/links"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium transition hover:opacity-90"
              >
                Explore my work <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/Example.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV <FileDown className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/example"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/example"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {['Example', 'Example', 'Example'].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            className="relative mx-auto aspect-square w-72 max-w-sm md:w-96"
          >
            <div className="absolute inset-0 -m-2 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,rgba(236,72,153,0.6),rgba(14,165,233,0.6),rgba(99,102,241,0.6),rgba(236,72,153,0.6))] blur-xl" />
            <img
              src="/profile.jpg"
              alt="John Doe"
              className="relative h-full w-full rounded-3xl object-cover ring-4 ring-white/10"
            />
          </motion.div>
        </section>

        {/* Projects — public only (from GitHub/CV) */}
        <section id="projects" className="py-10 md:py-16">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-semibold md:text-3xl">Selected Projects</h2>
            <a href="https://github.com/example" target="_blank" className="text-sm text-white/80 hover:text-white">
              View all →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Example',
                desc: 'The quick brown fox jumps over the lazy dog.',
                chips: ['example', 'example', 'example'],
                href: 'https://github.com/example/example',
              },
              {
                title: 'Example',
                desc: 'The quick brown fox jumps over the lazy dog.',
                chips: ['example', 'example', 'example'],
                href: 'https://github.com/example/example',
              }, {
                title: 'Example',
                desc: 'The quick brown fox jumps over the lazy dog.',
                chips: ['example', 'example', 'example'],
                href: 'https://github.com/example/example',
              },
            ].map((p) => (
              <motion.a
                key={p.title}
                href={p.href}
                target={p.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition hover:bg-white/[0.08]"
              >
                <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/75">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.chips.map((c) => (
                    <span key={c} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/80">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 transition group-hover:text-white">
                  <PlayCircle className="h-4 w-4" />
                  Learn more
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="grid gap-6 py-10 md:grid-cols-2 md:py-16">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-sm text-white/75">
            Example text for the about section. 
            </p>
            <p className="mt-3 text-sm text-white/75">
             More Example text to fill the section.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
            <h3 className="text-xl font-semibold">Capabilities</h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-white/80">
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Example Skill</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Example Skill</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Example Skill</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Example Skill</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Example Skill</li>
              <li className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">Example Skill</li>
              
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-14">
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center">
            <h2 className="text-2xl font-semibold">Let’s build something useful</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-white/75">
              For collaborations, consulting, or speaking—reach out. I read everything.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="mailto:contact@example.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90"
              >
                Email me <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/links"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10"
              >
                All links
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mx-auto w-full max-w-6xl px-4 pb-8">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Zayed Albloushi</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/example" target="_blank" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com/in/example" target="_blank" className="hover:text-white">LinkedIn</a>
            <Link href="/links" className="hover:text-white">Links</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
