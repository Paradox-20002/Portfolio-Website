"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Flutter", level: 70, color: "from-blue-500 to-cyan-500" },
        { name: "Dart", level: 70, color: "from-blue-600 to-blue-800" },
        { name: "JavaScript", level: 40, color: "from-yellow-400 to-orange-500" },
        { name: "HTML/CSS", level: 75, color: "from-orange-500 to-red-500" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Firebase", level: 55, color: "from-yellow-500 to-orange-600" },
        { name: "REST APIs", level: 40, color: "from-green-500 to-teal-500" },
        { name: "Python", level: 30, color: "from-blue-500 to-green-500" },
        { name: "C++", level: 65, color: "from-purple-500 to-pink-500" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 65, color: "from-gray-600 to-gray-800" },
        { name: "VS Code", level: 90, color: "from-blue-500 to-purple-500" },
        { name: "Figma", level: 35, color: "from-pink-500 to-purple-500" },
        { name: "Postman", level: 70, color: "from-orange-500 to-red-500" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white tracking-tight">
            Expertise
          </h2>
          <div className="w-12 h-px bg-gray-900 dark:bg-white mx-auto mb-16"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800/50 p-10 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">{category.title}</h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>

                    <div className="w-full bg-gray-100 dark:bg-gray-700 h-1 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className="h-full bg-gray-900 dark:bg-white"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Team Collaboration", "Problem Solving", "Creativity", "Adaptability", "Multi-Tasking"].map(
              (skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-6 py-2 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-light tracking-wide hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
