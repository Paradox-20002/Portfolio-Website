"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              MUHAMMAD NOMAN
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Full-Stack Software Engineer • React.js • Next.js • TypeScript • Node.js • Prisma
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Paradox-20002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/noman210900"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:buttnoman778@gmail.com"
              aria-label="Email"
              className="w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all ml-2"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 dark:text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} Muhammad Noman. All rights reserved.
          </div>
          <div>
            Architected with Next.js 14, Tailwind CSS & Framer Motion.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
