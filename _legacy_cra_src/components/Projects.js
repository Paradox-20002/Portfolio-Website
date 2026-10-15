"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Easy First Aid",
      description:
        "A smart first aid mobile app using Flutter and Firebase that offers instant medical support through AI. Features include symptom checking, injury detection via image analysis, fall detection using phone sensors, real-time parent-child tracking, emergency calling, and an AI chatbot powered by Gemini.",
      technologies: ["Flutter", "Dart", "Firebase", "Python", "AI/ML", "Gemini API"],
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: "#",
      color: "from-red-500 to-pink-500",
    },
    {
      title: "CHAPERONE Website",
      description:
        "Contributed to the development of CHAPERONE, a companion website, utilizing HTML, CSS, and basic JavaScript. Focused on creating a user-friendly interface and responsive design for better user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      type: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "MyImpactMeter Integration",
      description:
        "Worked on Flutter app development for Pakistan's first digital impact platform. Implemented REST APIs, managed user authentication, optimized performance, and handled playlist management with local data storage using SharedPreferences.",
      technologies: ["Flutter", "REST APIs", "Authentication", "SharedPreferences", "GetX"],
      type: "Mobile App",
      icon: <Database className="w-6 h-6" />,
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: "#",
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Flutter Music Player",
      description:
        "A feature-rich music player app built with Flutter and GetX state management. Includes user registration, playlist management, local data handling, and seamless API integrations for music streaming.",
      technologies: ["Flutter", "GetX", "REST APIs", "SharedPreferences", "Audio Streaming"],
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: "#",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React.js and Framer Motion. Features smooth animations, dark/light theme toggle, and optimized performance across all devices.",
      technologies: ["React.js", "Framer Motion", "CSS3", "Responsive Design"],
      type: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: "#",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Firebase Chat App",
      description:
        "Real-time chat application built with Flutter and Firebase. Features include user authentication, real-time messaging, image sharing, push notifications, and offline message synchronization.",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Push Notifications", "Authentication"],
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "/placeholder.svg?height=300&width=400",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: "#",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="projects" className="py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white tracking-tight">
            Selected Work
          </h2>
          <div className="w-12 h-px bg-gray-900 dark:bg-white mx-auto mb-16"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in mobile and web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                {/* Project Type Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center px-4 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white text-xs font-light tracking-wide border border-gray-200 dark:border-gray-700">
                    {project.icon}
                    <span className="ml-2">{project.type}</span>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs font-light tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 btn btn-outline text-sm py-3"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </button>
                  <button
                    className={`flex-1 btn text-sm py-3 text-white border-none bg-gradient-to-r ${project.color} hover:opacity-90`}
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button
            className="btn btn-outline text-lg px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://github.com/Alpha-Bravo-Draco", "_blank")}
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
