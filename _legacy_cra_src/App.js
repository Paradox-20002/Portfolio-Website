"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ThemeProvider>
      <div className="relative">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform-origin-0 z-50"
          style={{ scaleX }}
        />

        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
