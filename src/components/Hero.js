"use client"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Phone } from "lucide-react"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadResume = () => {
    const resumeContent = `Muhammad Noman - Resume
    
Email: buttnoman778@gmail.com
GitHub: https://github.com/Alpha-Bravo-Draco
LinkedIn: linkedin.com/in/muhammad-noman-2ba218221/
Mobile: +92-321-6013698

SUMMARY
Versatile Developer with a primary focus on mobile application development using Flutter and Dart. Skilled in building innovative, user-friendly apps with clean, efficient code. In addition to app development, I have a solid foundation in full-stack web development using the MERN stack and an emerging interest in data analytics and visualization.

EDUCATION
Air University Islamabad (Sep 2021 - July 2025)
Bachelors in Computer Science

EXPERIENCE
- AIONS (Intern, Sept 2023 - Dec 2023)
- MyImpactMeter (Intern, July 2024 - Sep 2024)  
- Devverse (Freelance, Mar 2025 - Apr 2025)

SKILLS
Languages: Dart, JavaScript, C++, HTML, CSS, Python
Databases: Firebase
Tools: Visual Studio Code, Postman, Git, Figma

PROJECTS
Easy First Aid (2024) - Smart first aid mobile app using Flutter and Firebase with AI-powered medical support features.`

    const blob = new Blob([resumeContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "Muhammad_Noman_Resume.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
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
              Flutter Developer & Mobile App Specialist
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Specializing in mobile app development with Flutter and Dart, with expertise in full-stack web development
              and emerging interest in data analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button onClick={downloadResume} className="btn btn-primary px-8 py-3 text-sm font-light tracking-wide">
                Download Resume
              </button>

              <button onClick={scrollToContact} className="btn btn-outline px-8 py-3 text-sm font-light tracking-wide">
                Get In Touch
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex gap-6 justify-center lg:justify-start mt-8"
            >
              <motion.a
                href="https://github.com/Alpha-Bravo-Draco"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/muhammad-noman-2ba218221/"
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
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20"
              />
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl">
                <img src="/profile.jpg" alt="Muhammad Noman" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
