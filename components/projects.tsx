"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  Database,
  Layers,
  Sparkles,
  Smartphone,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const projects = [
    {
      title: "Niagara Limo - Production Booking Platform",
      tagline:
        "Live Client Platform delivering 90+ Google Lighthouse performance",
      description:
        "Engineered a production-ready luxury transportation booking platform for a North American client. Features automated server-side email dispatch with NodeMailer, live Google Maps integrations, fluid Framer Motion micro-interactions, and conversion-optimized mobile-first UX.",
      technologies: [
        "Next.js 14",
        "Node.js",
        "NodeMailer",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel",
      ],
      badge: "Production Client",
      badgeColor:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      image: "/projects/niagaralimo.png",
      // github: "https://github.com/Paradox-20002",
      demo: "https://niagaralimo.ca",
      isFeatured: false,
      highlights: [
        "90+ Lighthouse Performance & SEO",
        "Automated Email Dispatch System",
        "Dynamic Distance & Fleet Calculator",
      ],
    },
    {
      title: "Enoves - Portfolio Website",
      tagline:
        "Live Client Platform delivering 90+ Google Lighthouse performance",
      description:
        "Engineered a production-ready luxury transportation booking platform for a North American client. Features automated server-side email dispatch with NodeMailer, live Google Maps integrations, fluid Framer Motion micro-interactions, and conversion-optimized mobile-first UX.",
      technologies: [
        "Next.js 14",
        "Node.js",
        "NodeMailer",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel",
      ],
      badge: "Production Client",
      badgeColor:
        "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      image: "/projects/enoves.png",
      // github: "https://github.com/Paradox-20002",
      demo: "https://enoves.com",
      isFeatured: false,
      highlights: [
        "90+ Lighthouse Performance & SEO",
        "Automated Email Dispatch System",
        "Dynamic Distance & Fleet Calculator",
      ],
    },
    {
      title: "Nucleus - Internal Blog CMS",
      tagline: "Custom Headless Content Engine with Prisma & PostgreSQL",
      description:
        "Engineered end-to-end internal CMS with role-based access control, rich-text WYSIWYG publishing, and an optimized PostgreSQL data model with Prisma schema migrations. Delivers headless REST APIs so authors publish content seamlessly without requiring code deployments.",
      technologies: [
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "REST APIs",
        "Tailwind CSS",
      ],
      badge: "Full-Stack CMS",
      badgeColor:
        "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      image: "/projects/nucleus.png",
      // github: "https://github.com/Paradox-20002",
      demo: null,
      isFeatured: false,
      highlights: [
        "Relational Schema Design & Migrations",
        "Role-Based Permission Layer",
        "Zero-Downtime Headless API",
      ],
    },
    {
      title: "Rideflow - Vehicle Rental SaaS Platform",
      tagline: "Multi-tenant Fleet Operations & Real-Time Booking Engine",
      description:
        "Architected a scalable SaaS rental platform with complex state workflows. Features end-to-end booking dispatch, automated PDF invoicing, digital contract signature collection, and tailored dashboard portals for fleet admins, renters, and vehicle service staff.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "Tailwind CSS",
      ],
      badge: "SaaS Platform",
      badgeColor:
        "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      image: "/projects/rideflow.png",
      // github: "https://github.com/Paradox-20002",
      demo: null,
      isFeatured: true,
      highlights: [
        "Multi-Role Permission System",
        "Contract E-Sign & PDF Invoicing",
        "Fleet Availability Engine",
      ],
    },
    {
      title: "Techionik - AI-Ready Agency Platform",
      tagline:
        "Next-Gen Agency Platform with WebMCP Agent Workflows & Voice UI",
      description:
        "High-performance agency web application integrating JSON-LD knowledge schemas and WebMCP agent tools for automated browser inquiry execution. Includes an accessibility layer powered by the Web Speech API enabling hands-free voice dictation for user inquiries.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "JSON-LD",
        "WebMCP",
        "Web Speech API",
        "Tailwind CSS",
      ],
      badge: "AI & Voice Web",
      badgeColor:
        "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      image: "/projects/techionik.png",
      // github: "https://github.com/Paradox-20002",
      demo: "https://techionik.com",
      isFeatured: false,
      highlights: [
        "WebMCP Agent Integration Protocol",
        "Real-Time Speech-to-Text Voice Layer",
        "Deep JSON-LD Graph Schema SEO",
      ],
    },
    {
      title: "Easy First Aid - Emergency Mobile App",
      tagline: "Computer Vision & Mobile Sensor Emergency Assistance",
      description:
        "Cross-platform emergency response application created with Flutter and Dart. Integrates computer vision AI to evaluate injury severity from photos, automated fall detection using device accelerometer hardware, and real-time incident coordination via Firebase Firestore.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase Firestore",
        "AI Computer Vision",
        "Hardware Sensors",
      ],
      badge: "Mobile & Vision AI",
      badgeColor:
        "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      image: "/images/projects/easyfirstaid.jpg",
      // github: "https://github.com/Paradox-20002",
      demo: null,
      isFeatured: false,
      highlights: [
        "AI Image Analysis for Injury Triage",
        "Hardware Fall Detection Sensors",
        "Offline-First Realtime Sync",
      ],
    },
  ];

  const featured = projects.find((p) => p.isFeatured);
  const rest = projects.filter((p) => !p.isFeatured);

  return (
    <section
      id="projects"
      className="py-28 bg-zinc-50/70 dark:bg-zinc-950/70 relative overflow-hidden"
    >
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
            Selected projects that <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              deliver measurable business impact
            </span>
          </h2>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            A curated collection of web applications, SaaS platforms, and
            AI-enabled software built from the ground up.
          </p>
        </motion.div>

        {/* Featured Project Showcase Card (Large Hero Card) */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-12 bg-white dark:bg-zinc-900/90 rounded-3xl border border-zinc-200/90 dark:border-zinc-800/90 shadow-lg overflow-hidden group hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Image Preview Container */}
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[480px] overflow-hidden bg-zinc-950">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute top-6 left-6">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold border backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 ${featured.badgeColor}`}
                  >
                    {featured.badge}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                    {featured.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {featured.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {featured.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {featured.demo && (
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 h-10 font-medium shadow-md shadow-blue-500/20 flex items-center gap-2"
                      onClick={() => window.open(featured.demo!, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Website
                    </Button>
                  )}
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl px-5 h-10 font-medium flex items-center gap-2 bg-transparent"
                    onClick={() => window.open(featured.github, "_blank")}
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </Button> */}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2x2 Bento Grid for Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900/80 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Preview Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md bg-white/90 dark:bg-zinc-900/90 ${project.badgeColor}`}
                    >
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-3">
                {project.demo ? (
                  <Button
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl h-9 text-xs font-medium shadow-xs flex items-center justify-center gap-1.5"
                    onClick={() => window.open(project.demo!, "_blank")}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    disabled
                    variant="ghost"
                    className="flex-1 rounded-xl h-9 text-xs font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-400 dark:text-zinc-500 cursor-not-allowed flex items-center justify-center"
                  >
                    Internal / NDA
                  </Button>
                )}

                {/* <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl h-9 text-xs font-medium flex items-center justify-center gap-1.5 bg-transparent"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </Button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs">
            <span className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              Want to see additional prototypes, algorithms, and open source
              experiments?
            </span>
            <Button
              variant="outline"
              size="sm"
              className="border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl px-4 h-9 font-medium flex items-center gap-2 bg-transparent"
              onClick={() =>
                window.open("https://github.com/Paradox-20002", "_blank")
              }
            >
              <Github className="w-4 h-4" />
              github.com/Paradox-20002
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
