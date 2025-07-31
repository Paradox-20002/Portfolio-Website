"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()



  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "buttnoman778@gmail.com",
      link: "mailto:buttnoman778@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+92-321-6013698",
      link: "tel:+923216013698",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Lahore, Pakistan",
      link: "#",
      color: "from-blue-500 to-purple-500",
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Alpha-Bravo-Draco",
      color: "hover:bg-gray-800",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/muhammad-noman-2ba218221/",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:buttnoman778@gmail.com",
      color: "hover:bg-red-500",
    },
  ]

  return (
    <section id="contact" className="py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extralight mb-8 text-gray-900 dark:text-white tracking-tight">
            Contact
          </h2>
          <div className="w-12 h-px bg-gray-900 dark:bg-white mx-auto mb-16"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                technology and development.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 group"
                >
                  <div
                    className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-200 dark:bg-gray-600 rounded-full text-gray-700 dark:text-gray-300 ${social.color} hover:text-white transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-12 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Send Message</h3>
            </div>

            <form action="https://formsubmit.co/buttnoman778@gmail.com" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 bg-transparent focus:border-gray-400 dark:focus:border-gray-400 focus:ring-0 transition-all duration-300 font-light text-gray-900 dark:text-white"
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 bg-transparent focus:border-gray-400 dark:focus:border-gray-400 focus:ring-0 transition-all duration-300 font-light text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 bg-transparent focus:border-gray-400 dark:focus:border-gray-400 focus:ring-0 transition-all duration-300 font-light text-gray-900 dark:text-white"
                  placeholder="Project Discussion"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-4 border border-gray-200 dark:border-gray-600 bg-transparent focus:border-gray-400 dark:focus:border-gray-400 focus:ring-0 transition-all duration-300 font-light resize-none text-gray-900 dark:text-white"
                  placeholder="Tell me about your project or just say hello!"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <button
                  type="submit"
                  className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-4 px-6 font-light tracking-wide transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-600"
        >
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Muhammad Noman. Built with Next.js, TailwindCSS, and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
