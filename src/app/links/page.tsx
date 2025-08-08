'use client';

import { useCallback, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  Github,
  Linkedin,
  BadgeCheck,
  Link as LinkIcon,
  Sparkles,
  Copy,
  Check,
  Music2,
} from 'lucide-react';

type LinkItem = {
  title: string;
  url: string;
  icon: JSX.Element;
  className: string;
  subtitle?: string;
};

export default function LinksPage() {
  const [copied, setCopied] = useState(false);
  const profileUrl = useMemo(
    () =>
      typeof window !== 'undefined'
        ? window.location.origin + '/links'
        : 'https://example.com/links',
    []
  );

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profileUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch {}
  }, [profileUrl]);

  const links: LinkItem[] = [
    {
      title: 'Instagram',
      url: 'https://instagram.com/example',
      icon: <Instagram className="h-5 w-5" />,
      className: 'from-pink-500 via-red-500 to-amber-400 text-white',
      subtitle: '@example',
    },
    {
      title: 'TikTok',
      url: 'https://tiktok.com/@example',
      icon: <Music2 className="h-5 w-5" />,
      className: 'from-cyan-400 to-fuchsia-500 text-white',
      subtitle: '@example',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/example',
      icon: <Github className="h-5 w-5" />,
      className:
        'from-neutral-900 to-neutral-800 text-white border border-neutral-700/60',
      subtitle: 'Open Source',
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com/in/example',
      icon: <Linkedin className="h-5 w-5" />,
      className: 'from-sky-600 to-blue-700 text-white',
      subtitle: 'Let’s connect',
    },
  ];

  return (
    <div className="relative min-h-dvh overflow-hidden bg-black text-white">
      {/* Animated full-screen gradient */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-blue-700 via-purple-700 to-fuchsia-700 bg-[length:200%_200%] animate-gradient-xy" />

      {/* Gradient blobs for depth */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-400 via-cyan-400 to-fuchsia-500 opacity-60 blur-3xl animate-[spin_40s_linear_infinite]" />
        <div className="absolute -bottom-40 -right-32 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-fuchsia-500 via-pink-500 to-orange-400 opacity-60 blur-3xl animate-[spin_55s_linear_infinite_reverse]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(62, 81, 255, 0.07),rgba(255, 0, 0, 0))]" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22><path d=%22M0 159.5H160M.5 0V160%22 stroke=%22white%22 stroke-opacity=%220.45%22 stroke-width=%220.5%22/></svg>')]" />
      </div>

      <main className="mx-auto grid min-h-dvh max-w-xl place-items-center px-4 py-10">
        {/* Gradient border + glass card */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full rounded-[1.25rem] p-[1px] bg-gradient-to-br from-white/25 via-white/10 to-white/5"
        >
          <div className="rounded-[1.2rem] border border-white/10 bg-black/50 p-6 backdrop-blur-xl shadow-[0_6px_40px_-12px_rgba(0,0,0,0.55)]">
            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                {/* Animated conic ring */}
                <div className="absolute inset-0 -m-1 rounded-full bg-[conic-gradient(var(--tw-gradient-stops))] from-fuchsia-500 via-cyan-400 to-fuchsia-500 blur-[6px] opacity-60 animate-[spin_10s_linear_infinite]" />
                <img
                  src="/profile.jpg"
                  alt="John Doe"
                  className="relative h-28 w-28 rounded-full object-cover ring-4 ring-white/10"
                />
                <span className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2 py-1 text-xs font-medium text-white shadow">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Verified
                </span>
              </div>

              <h1 className="text-2xl font-semibold">John Doe</h1>
              <p className="mt-1 max-w-sm text-balance text-sm text-white/70">
                Example • Example • Example
              </p>

              {/* Chips */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {['Example', 'Example', 'Example'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="mt-7 space-y-3">
              {links.map((item) => (
                <motion.a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.985 }}
                  className={`group relative flex items-center justify-between overflow-hidden rounded-xl px-4 py-3 shadow transition focus:outline-none focus:ring-2 focus:ring-white/30 bg-gradient-to-r ${item.className}`}
                >
                  {/* Sheen effect */}
                  <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.25),transparent)] transition-transform duration-700 group-hover:translate-x-[120%]" />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-black/15">
                      {item.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-medium leading-none">{item.title}</span>
                      {item.subtitle && (
                        <span className="mt-0.5 text-xs opacity-80">{item.subtitle}</span>
                      )}
                    </div>
                  </div>
                  <LinkIcon className="relative z-10 h-5 w-5 opacity-85 transition group-hover:translate-x-0.5" />
                </motion.a>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.06] px-3 py-2 text-xs text-white/85 transition hover:bg-white/[0.1] focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                {copied ? 'Copied' : 'Copy Link'}
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 flex items-center justify-center">
              <p className="text-xs text-white/60">
                © {new Date().getFullYear()} Zayed Albloushi • All rights reserved
              </p>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
