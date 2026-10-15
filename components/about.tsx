"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Code2, 
  Database, 
  Bot, 
  Sparkles, 
  Gauge, 
  Layers, 
  CheckCircle2, 
  Terminal,
  ArrowUpRight,
  GraduationCap,
  Briefcase
} from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const stats = [
    { value: "2+", label: "Years Experience", description: "Full-stack & mobile engineering" },
    { value: "90+", label: "Lighthouse Score", description: "Consistently delivered for clients" },
    { value: "5+", label: "Shipped Projects", description: "SaaS, CMS, Mobile & AI Platforms" },
    { value: "100%", label: "Client Satisfaction", description: "On-time delivery & clean code" },
  ]

  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      title: "Full-Stack Architecture",
      desc: "PostgreSQL & Prisma data modeling, RESTful API design, and server-side Next.js rendering.",
    },
    {
      icon: <Gauge className="w-5 h-5 text-emerald-500" />,
      title: "Performance & SEO",
      desc: "JSON-LD structured data, SSR optimizations, and lightning-fast load times with 90+ Lighthouse scores.",
    },
    {
      icon: <Bot className="w-5 h-5 text-purple-500" />,
      title: "AI & Voice Integration",
      desc: "WebMCP agent workflows, Web Speech API real-time voice input, and computer vision injury analysis.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-amber-500" />,
      title: "UI/UX & Micro-Interactions",
      desc: "Responsive layout design, Framer Motion choreography, and accessible component architectures.",
    },
  ]

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-zinc-50/70 dark:bg-zinc-950/70">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Crafting products that bridge <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              robust backends with intuitive UIs
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            A software engineer who cares deeply about architecture, type-safety, visual polish, and performance.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bento Card 1: Core Story (Span 7) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900/80 rounded-2xl p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
                Full-Stack Software Engineer based in Lahore, Pakistan
              </h3>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-300 text-sm md:text-base leading-relaxed">
                <p>
                  I hold a <strong>BS in Computer Science</strong> from <strong>Air University Islamabad</strong> (Sep 2021 – Jul 2025) and have spent the last 2+ years designing, building, and deploying scalable web and mobile applications.
                </p>
                <p>
                  At <strong>Enoves</strong>, I operate as an Associate Software Engineer building production Next.js/TypeScript applications, authoring PostgreSQL data models and Prisma migrations, and shipping client platforms like <em>niagaralimo.ca</em> that achieve <strong>90+ Google Lighthouse scores</strong>.
                </p>
                <p>
                  Previously at <strong>Techionik Ltd</strong>, I specialized in high-performance Next.js architectures, voice accessibility layers with the Web Speech API, and headless CMS integrations with JSON-LD structured data for deep SEO discoverability.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Current Role</div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Software Engineer @ Enoves</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Alma Mater</div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Air University Islamabad</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Stats Grid (Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900/80 rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:-translate-y-1 transition-all group"
              >
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-4">
                  <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{stat.label}</div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 leading-snug">{stat.description}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bento Card 3: 4 Engineering Pillars (Span 12) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-12 bg-white dark:bg-zinc-900/80 rounded-2xl p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  Core Engineering Capabilities
                </h4>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  How I create sustainable value across the software lifecycle
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80"
                >
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-4 shadow-xs">
                    {pillar.icon}
                  </div>
                  <h5 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-2">{pillar.title}</h5>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
