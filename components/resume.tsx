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
    const link = document.createElement('a')
    link.href = '/Resume.pdf'
    link.download = 'Muhammad_Noman_Resume.pdf'
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const resumeData = {
    personalInfo: {
      name: "Muhammad Noman",
      email: "buttnoman778@gmail.com",
      phone: "+92-321-6013698",
      github: "https://github.com/Alpha-Bravo-Draco",
      linkedin: "https://linkedin.com/in/muhammad-noman-2ba218221/",
      location: "Lahore, Pakistan",
    },
    summary:
      "Versatile Developer with a primary focus on mobile application development using Flutter and Dart. Skilled in building innovative, user-friendly apps with clean, efficient code. In addition to app development, I have a solid foundation in full-stack web development using the MERN stack and an emerging interest in data analytics and visualization. A fast learner, effective team player, and problem solver who actively keeps up with evolving tech trends and best practices across multiple domains.",
    education: [
      {
        institution: "Air University Islamabad",
        degree: "Bachelors in Computer Science",
        period: "Sep 2021 - July 2025",
        location: "Lahore, Pakistan",
      },
      {
        institution: "Punjab Group of Colleges (PGC)",
        degree: "FSC Pre-Engineering",
        period: "Feb 2018 - July 2020",
        location: "Lahore, Pakistan",
      },
    ],
    experience: [
      {
        company: "Devverse",
        position: "Freelance",
        period: "Mar 2025 - Apr 2025",
        location: "Islamabad, Pakistan",
        description:
          "Contributed to backend integrations and frontend development using Flutter and GetX. Key tasks included user registration and playlist management via REST APIs, UI development and integration, local data handling with SharedPreferences, and API response debugging and error handling.",
      },
      {
        company: "MyImpactMeter",
        position: "Intern",
        period: "July 2024 - Sep 2024",
        location: "Lahore, Pakistan",
        description:
          "Worked on Flutter app development, implementing REST APIs, managing user authentication, and optimizing performance. Gained experience with agile workflows, including sprints and code reviews.",
      },
      {
        company: "AIONS",
        position: "Intern",
        period: "Sept 2023 - Dec 2023",
        location: "Lahore, Pakistan",
        description:
          "Contributed to the development of CHAPERONE, a companion website, utilizing HTML, CSS, and basic JavaScript.",
      },
    ],
    skills: {
      languages: ["Dart", "JavaScript", "C++", "HTML", "CSS", "Python"],
      databases: ["Firebase"],
      tools: ["Visual Studio Code", "Postman", "Git", "Figma"],
      softSkills: ["Team Collaboration", "Problem Solving", "Creativity", "Adaptability", "Multi-Tasking"],
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-12"
          >
            <h3 className="text-3xl font-bold mb-4">{resumeData.personalInfo.name}</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {resumeData.personalInfo.email}
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                {resumeData.personalInfo.phone}
              </div>
              <div className="flex items-center">
                <Github className="w-4 h-4 mr-2" />
                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  GitHub Profile
                </a>
              </div>
              <div className="flex items-center">
                <Linkedin className="w-4 h-4 mr-2" />
                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </motion.div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-12 space-y-12">
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
                  <div key={index} className="border-l border-gray-300 dark:border-gray-600 pl-6">
                    <h5 className="font-semibold text-gray-800 dark:text-white">{edu.institution}</h5>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.degree}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <span>{edu.period}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="w-3 h-3 mr-1" />
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
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l border-gray-300 dark:border-gray-600 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h5 className="font-semibold text-gray-800 dark:text-white">{exp.company}</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                    </div>
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-1">{exp.position}</p>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
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
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Programming Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.languages.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Tools & Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {[...resumeData.skills.databases, ...resumeData.skills.tools].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full"
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
