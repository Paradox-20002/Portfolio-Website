"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Copy, 
  Check, 
  Clock, 
  MessageSquare, 
  Sparkles, 
  ArrowUpRight 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const copyEmail = () => {
    navigator.clipboard.writeText("buttnoman778@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate swift network dispatch
    await new Promise((resolve) => setTimeout(resolve, 900))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-28 bg-zinc-50/70 dark:bg-zinc-950/70 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Have a project in mind? <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Let's create something extraordinary
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            Available for full-time engineering roles, product contract builds, and architectural consulting.
          </p>
        </motion.div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Social Hub (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Email Copy Card */}
            <div className="bg-white dark:bg-zinc-900/80 rounded-2xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Primary Direct Channel
              </div>
              <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200/50 dark:border-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-200 truncate">
                    buttnoman778@gmail.com
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-600 border border-zinc-200 dark:border-zinc-600 transition-all flex items-center gap-1.5 shrink-0 shadow-2xs"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Direct Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+923216013698"
                className="bg-white dark:bg-zinc-900/80 rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/50 dark:border-emerald-800/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs text-zinc-400 font-medium">Direct Call</div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  +92-321-6013698
                </div>
              </a>

              <div className="bg-white dark:bg-zinc-900/80 rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
                <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950/60 border border-purple-200/50 dark:border-purple-800/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs text-zinc-400 font-medium">Location</div>
                <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                  Lahore, Pakistan
                </div>
              </div>
            </div>

            {/* Availability & Timezone Card */}
            <div className="bg-white dark:bg-zinc-900/80 rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Working Timezone</div>
                  <div className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">PKT (UTC+5) • Flexible Remote</div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Active
              </span>
            </div>

            {/* Social Hub */}
            <div className="bg-white dark:bg-zinc-900/80 rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                Professional Profiles
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/Paradox-20002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-all"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href="https://linkedin.com/in/noman210900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-all"
                >
                  <Linkedin className="w-4 h-4 text-blue-500" />
                  LinkedIn
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900/90 rounded-3xl p-8 sm:p-10 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight mb-2">
              Send an inquiry
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mb-8">
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                <Check className="w-4 h-4 shrink-0 text-emerald-500" />
                <span>Thank you! Your message has been sent. I will reply to your email shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Your Name
                  </label>
                  <Input
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-11 rounded-xl bg-zinc-50/70 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Your Email
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-11 rounded-xl bg-zinc-50/70 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Subject / Topic
                </label>
                <Input
                  required
                  placeholder="New Project / Role Inquiry / Consultation"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="h-11 rounded-xl bg-zinc-50/70 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Message Details
                </label>
                <Textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project scope, timeline, or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="rounded-xl bg-zinc-50/70 dark:bg-zinc-800/50 border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl h-11 shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
