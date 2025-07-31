"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Code, Users, Zap } from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Specialized in Flutter and Dart with multiple successful projects",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Experienced in agile workflows, sprints, and code reviews",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Solid foundation in MERN stack and web technologies",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always keeping up with evolving tech trends and best practices",
    },
  ]

  return (
    <section id="about" className="py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white tracking-tight">
            About
          </h2>
          <div className="w-12 h-px bg-gray-900 dark:bg-white mx-auto mb-16"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I'm a versatile developer with a primary focus on mobile application development using Flutter and Dart.
                My passion lies in building innovative, user-friendly apps with clean, efficient code that makes a real
                difference in people's lives.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Currently pursuing my Bachelor's in Computer Science at Air University Islamabad, I have gained valuable
                experience through internships at AIONS, MyImpactMeter, and freelance work with Devverse. These
                experiences have shaped me into a fast learner, effective team player, and dedicated problem solver.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Beyond mobile development, I have a solid foundation in full-stack web development using the MERN stack
                and an emerging interest in data analytics and visualization. I actively keep up with evolving tech
                trends and best practices across multiple domains.
              </motion.p>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 p-8 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white mr-6">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">{achievement.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
