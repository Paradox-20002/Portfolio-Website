"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Phone } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    // Create a link element to download the PDF file
    const link = document.createElement('a')
    link.href = '/Resume.pdf'
    link.download = 'Muhammad_Noman_Resume.pdf'
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 grid-bg"
    >
      {/* Minimal geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-px h-32 bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700 to-transparent"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-1/3 left-1/3 w-24 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-4"
            >
              Hi, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-extralight mb-8 tracking-tight"
            >
              <span className="text-gray-900 dark:text-white">Muhammad Noman</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 font-light tracking-wide"
            >
              Full-Stack Software Engineer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Building scalable, high-performance web applications with React.js, Next.js, TypeScript, and Node.js.
              Delivering end-to-end solutions from PostgreSQL and Prisma data models to responsive UIs and AI-driven features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={downloadResume}
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 text-sm font-light tracking-wide transition-all duration-300 border-0"
              >
                Download Resume
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 text-sm font-light tracking-wide transition-all duration-300 bg-transparent"
              >
                Get In Touch
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-6 justify-center lg:justify-start mt-8"
            >
              <motion.a
                href="https://github.com/Paradox-20002"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/noman210900"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:buttnoman778@gmail.com"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
              <motion.a
                href="tel:+923216013698"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Phone size={24} />
              </motion.a>
            </motion.div>

            {/* Tech Focus Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mt-8"
            >
              <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold mr-1">Stack:</span>
              {["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "AI Features"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs bg-gray-100/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 font-medium backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image with Increased Radius */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div whileHover={{ scale: 1.02 }} className="relative">
              {/* Animated Glow Backdrop */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-600/25 rounded-full blur-3xl opacity-60"
              />

              {/* Enlarged Avatar Container with Increased Radius */}
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] xl:w-[510px] xl:h-[510px] rounded-full overflow-hidden border-4 border-white/90 dark:border-gray-700/80 shadow-2xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 ring-1 ring-black/5 dark:ring-white/10">
                <Image
                  src="/profile.png"
                  alt="Muhammad Noman"
                  fill
                  className="object-cover object-top scale-100 transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Available Status Pill */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full shadow-xl border border-gray-200/80 dark:border-gray-700/80 flex items-center gap-2.5 whitespace-nowrap z-20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                  Available for Opportunities
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
