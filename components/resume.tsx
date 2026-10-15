"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Download, ExternalLink, MapPin, Mail, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const downloadResume = () => {
    // Create a link element to download the PDF file
    const link = document.createElement("a")
    link.href = "/Resume.pdf"
    link.download = "Muhammad_Noman_Resume.pdf"
    link.target = "_blank"
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resumeData = {
    personalInfo: {
      name: "Muhammad Noman",
      title: "Full-Stack Software Engineer",
      email: "buttnoman778@gmail.com",
      phone: "+92-321-6013698",
      github: "https://github.com/Paradox-20002",
      linkedin: "https://linkedin.com/in/noman210900",
      location: "Lahore, Pakistan",
    },
    summary:
      "Full-stack developer with a BS in Computer Science and 2+ years of combined professional and freelance experience building web applications with React.js, Next.js, TypeScript, and Node.js. Works on both sides of a product: PostgreSQL/Prisma data models and REST APIs on the back end, fast and responsive interfaces on the front, then deploys it all to production. Experienced in building AI-driven features (AI image analysis, voice interfaces, WebMCP agent integration) delivering 90+ Lighthouse scores on client projects.",
    education: [
      {
        institution: "Air University Islamabad",
        degree: "Bachelor of Science in Computer Science",
        period: "Sep 2021 – Jul 2025",
        location: "Islamabad, Pakistan",
      },
    ],
    experience: [
      {
        company: "Enoves",
        position: "Associate Software Engineer",
        period: "Oct 2025 – Present",
        location: "Lahore, Pakistan",
        description:
          "Build and ship full-stack web applications with Next.js, React.js, TypeScript, Node.js, and Tailwind CSS. Own an internal blog CMS end-to-end with PostgreSQL and Prisma data models. Built a production booking platform for a North American client (niagaralimo.ca) with automated email dispatch and Framer Motion micro-interactions, delivering 90+ Lighthouse scores.",
      },
      {
        company: "Techionik Ltd",
        position: "Next.js Developer",
        period: "Feb 2026 – May 2026",
        location: "Lahore, Pakistan",
        description:
          "Developed pixel-perfect, responsive UIs with Next.js, React, TypeScript, and Tailwind CSS. Built a voice-driven accessibility layer with Web Speech API for real-time speech-to-text. Integrated frontend with headless CMS via REST APIs and implemented JSON-LD structured data to enhance SEO indexing.",
      },
    ],
    skills: {
      frontend: ["React.js", "Next.js (SSR/SSG)", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "REST APIs", "PostgreSQL", "Prisma (Schema Design, Migrations)", "Headless CMS"],
      languages: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Dart"],
      tools: ["Git", "GitHub", "Vercel", "Render", "Postman", "Jest", "Cursor AI", "Lighthouse"],
    },
  }

  return (
    <section id="resume" className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white tracking-tight">
            Resume
          </h2>
          <div className="w-12 h-px bg-gray-900 dark:bg-white mx-auto mb-16"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Download my resume or view my professional experience and qualifications below
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={downloadResume}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>

            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 bg-transparent"
              onClick={() => window.open(resumeData.personalInfo.github, "_blank")}
            >
              <ExternalLink className="mr-2" size={20} />
              View Portfolio
            </Button>
          </div>
        </motion.div>

        {/* Resume Content */}
        <div className="max-w-4xl mx-auto shadow-xl rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900 dark:bg-zinc-950 text-white p-10 md:p-12 border-b border-gray-800"
          >
            <h3 className="text-3xl font-bold mb-4">{resumeData.personalInfo.name}</h3>
            <p className="text-blue-400 font-medium mb-6">{resumeData.personalInfo.title}</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-blue-400" />
                <a href={`mailto:${resumeData.personalInfo.email}`} className="hover:underline">
                  {resumeData.personalInfo.email}
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                <a href={`tel:${resumeData.personalInfo.phone.replace(/[^0-9+]/g, '')}`} className="hover:underline">
                  {resumeData.personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Github className="w-4 h-4 mr-2 text-gray-300" />
                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2 text-blue-400" />
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-8 md:p-12 space-y-12">
            {/* Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Summary</h4>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{resumeData.summary}</p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education</h4>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500 dark:border-blue-400 pl-6 py-1">
                    <h5 className="font-semibold text-gray-800 dark:text-white text-lg">{edu.institution}</h5>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>{edu.period}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Experience</h4>
              <div className="space-y-8">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-purple-500 dark:border-purple-400 pl-6 py-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                      <h5 className="font-bold text-gray-800 dark:text-white text-lg">{exp.company}</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{exp.period}</span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">{exp.position}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Frontend Development</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.frontend.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Backend & Database</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.backend.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Programming Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.languages.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Tools & Platforms</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.tools.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
