"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Smartphone, Globe, Database } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      image: "data:image/png;base64,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",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: null,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Car Rental App UI",
      description:
        "A modern and intuitive car rental mobile application with a beautiful user interface. Features include car browsing, booking management, payment integration, real-time availability, and user profile management with a focus on excellent UX/UI design.",
      technologies: ["Flutter", "Dart", "UI/UX Design", "State Management", "Responsive Design"],
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7NHiwqLPw2zHZeQhYg2b-YuNbUGArQBl5A&s",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: null,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "CHAPERONE Website",
      description:
        "Contributed to the development of CHAPERONE, a companion website, utilizing HTML, CSS, and basic JavaScript. Focused on creating a user-friendly interface and responsive design for better user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      type: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: null,
      color: "from-green-500 to-teal-500",
    },
    {
      title: "Flutter Music Player",
      description:
        "A feature-rich music player app built with Flutter and GetX state management. Includes user registration, playlist management, local data handling, and seamless API integrations for music streaming.",
      technologies: ["Flutter", "GetX", "REST APIs", "SharedPreferences", "Audio Streaming"],
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "data:image/jpeg;base64,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",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: null,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js, TailwindCSS, and Framer Motion. Features smooth animations, dark/light theme toggle, and optimized performance across all devices.",
      technologies: ["Next.js", "TailwindCSS", "Framer Motion", "TypeScript", "Responsive Design"],
      type: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      image: "/my_pic.png",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: null,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Firebase Chat App",
      description:
        "Real-time chat application built with Flutter and Firebase. Features include user authentication, real-time messaging, image sharing, push notifications, and offline message synchronization.",
      technologies: ["Flutter", "Firebase", "Real-time Database", "Push Notifications", "Authentication"],
      type: "Mobile App",
      icon: <Smartphone className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop&crop=center",
      github: "https://github.com/Alpha-Bravo-Draco",
      demo: null,
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
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 h-9 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors bg-transparent flex items-center justify-center"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    disabled={!project.demo}
                    className={`flex-1 h-9 ${
                      project.demo 
                        ? `bg-gradient-to-r ${project.color} hover:opacity-90 text-white border-none` 
                        : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed border-none'
                    } flex items-center justify-center`}
                    onClick={project.demo ? () => window.open(project.demo!, "_blank") : undefined}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.demo ? 'Demo' : 'Coming Soon'}
                  </Button>
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
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 bg-transparent"
            onClick={() => window.open("https://github.com/Alpha-Bravo-Draco", "_blank")}
          >
            <Github className="mr-2" size={20} />
            View More on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
