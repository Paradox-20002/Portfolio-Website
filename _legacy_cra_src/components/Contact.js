"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from "lucide-react"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState(null)

  const showToast = (title, description, variant = "default") => {
    setToast({ title, description, variant })
    setTimeout(() => setToast(null), 5000)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      showToast("Message sent successfully!", "Thank you for your message. I'll get back to you soon.")

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      showToast("Error sending message", "Please try again later or contact me directly via email.", "destructive")
    } finally {
      setIsSubmitting(false)
    }
  }

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
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 toast">
          <div className="toast-title">{toast.title}</div>
          <div className="toast-description">{toast.description}</div>
        </div>
      )}

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

            <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input"
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
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input"
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
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="textarea"
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
                  disabled={isSubmitting}
                  className="w-full btn btn-primary py-4 px-6 font-light tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </div>
                  )}
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
            © 2025 Muhammad Noman. Built with React.js and Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
