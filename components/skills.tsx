"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Code2, 
  Database, 
  Cpu, 
  Wrench, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Server, 
  Layout, 
  Workflow 
} from "lucide-react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [activeTab, setActiveTab] = useState("all")

  const categories = [
    { id: "all", label: "Full Ecosystem", icon: <Workflow className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend", icon: <Layout className="w-4 h-4" /> },
    { id: "backend", label: "Backend & DB", icon: <Server className="w-4 h-4" /> },
    { id: "ai", label: "AI & Emerging", icon: <Cpu className="w-4 h-4" /> },
    { id: "tools", label: "DevOps & Tools", icon: <Wrench className="w-4 h-4" /> },
  ]

  const skillsData = [
    {
      category: "frontend",
      name: "Next.js (App Router, SSR, SSG)",
      level: "Production Core",
      tag: "Framework",
      description: "Server/Client components, dynamic routing, caching strategies, and SEO-optimized rendering.",
      highlight: true,
    },
    {
      category: "frontend",
      name: "React.js & Hooks",
      level: "Advanced",
      tag: "Library",
      description: "Custom hooks, state management, memoization, and component lifecycle architectures.",
      highlight: true,
    },
    {
      category: "frontend",
      name: "TypeScript",
      level: "Daily Driver",
      tag: "Language",
      description: "Strict type safety, generics, discriminated unions, and scalable codebase architecture.",
      highlight: true,
    },
    {
      category: "frontend",
      name: "Tailwind CSS & Framer Motion",
      level: "Advanced",
      tag: "UI & Animation",
      description: "Rapid responsive utility layouts, fluid micro-interactions, layout transitions, and glassmorphism.",
      highlight: false,
    },
    {
      category: "frontend",
      name: "Redux Toolkit & Context API",
      level: "Proficient",
      tag: "State Management",
      description: "Predictable client-state pipelines, asynchronous thunks, and normalized data slices.",
      highlight: false,
    },
    {
      category: "backend",
      name: "PostgreSQL",
      level: "Production Core",
      tag: "Database",
      description: "Relational data modeling, foreign keys, indexing, query optimization, and transaction safety.",
      highlight: true,
    },
    {
      category: "backend",
      name: "Prisma ORM",
      level: "Advanced",
      tag: "Data Layer",
      description: "Declarative schema design, automated migrations, type-safe queries, and relation modeling.",
      highlight: true,
    },
    {
      category: "backend",
      name: "Node.js & RESTful APIs",
      level: "Advanced",
      tag: "Runtime",
      description: "Clean REST architecture, middleware authentication, automated email dispatch, and payload validation.",
      highlight: true,
    },
    {
      category: "backend",
      name: "Headless CMS Integration",
      level: "Proficient",
      tag: "Content API",
      description: "Decoupled publishing pipelines, webhook synchronizations, and dynamic content feeds.",
      highlight: false,
    },
    {
      category: "ai",
      name: "WebMCP Agent Integration",
      level: "Emerging Core",
      tag: "AI Protocol",
      description: "Model Context Protocol tools for web agents to browse, read, and manipulate live DOM states.",
      highlight: true,
    },
    {
      category: "ai",
      name: "Web Speech API (Voice Interface)",
      level: "Implemented",
      tag: "Browser AI",
      description: "Real-time speech-to-text voice recognition for hands-free form input and accessibility.",
      highlight: false,
    },
    {
      category: "ai",
      name: "AI Image & Vision Analysis",
      level: "Implemented",
      tag: "Computer Vision",
      description: "Automated injury classification, visual verification algorithms, and smart media pipelines.",
      highlight: false,
    },
    {
      category: "tools",
      name: "Git & GitHub Workflows",
      level: "Daily Driver",
      tag: "Version Control",
      description: "Branching workflows, peer code reviews, continuous integration, and semantic versioning.",
      highlight: false,
    },
    {
      category: "tools",
      name: "Vercel & Render Cloud",
      level: "Production Core",
      tag: "Deployment",
      description: "Serverless edge functions, custom domains, environment secret isolation, and preview branches.",
      highlight: true,
    },
    {
      category: "tools",
      name: "Lighthouse Performance & SEO",
      level: "90+ Score Standard",
      tag: "Auditing",
      description: "Core Web Vitals auditing, asset minification, image next-gen formatting, and schema markup.",
      highlight: true,
    },
    {
      category: "tools",
      name: "Cursor AI & Modern Dev Tools",
      level: "Expert User",
      tag: "Productivity",
      description: "Agentic coding workflows, Postman API testing, Jest unit test structures, and rapid prototyping.",
      highlight: false,
    },
  ]

  const filteredSkills = activeTab === "all" 
    ? skillsData 
    : skillsData.filter((s) => s.category === activeTab)

  return (
    <section id="skills" className="py-28 bg-white dark:bg-zinc-900/40 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Technologies vetted by <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              real-world production demands
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            Every library, database, and tool in my stack has been tested on client and internal production deployments.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                    : "bg-zinc-100 dark:bg-zinc-800/70 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-transparent"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-6 border transition-all relative flex flex-col justify-between ${
                skill.highlight
                  ? "bg-gradient-to-br from-white to-blue-50/30 dark:from-zinc-900 dark:to-blue-950/20 border-blue-200/80 dark:border-blue-900/40 shadow-sm"
                  : "bg-white dark:bg-zinc-900/60 border-zinc-200/80 dark:border-zinc-800/80 shadow-xs"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                    {skill.tag}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-2 tracking-tight">
                  {skill.name}
                </h3>
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>Verified in Production</span>
                <span className="text-emerald-500 font-semibold">● Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
