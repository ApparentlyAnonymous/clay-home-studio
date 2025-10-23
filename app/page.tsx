"use client"

import { motion } from "framer-motion"
import About from "../components/About"
import Gallery from "../components/Gallery"
import Footer from "../components/Footer"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* HERO */}
      <section className="min-h-[80vh] flex items-center justify-between px-8 md:px-20 lg:px-32">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-gray-800 mb-6">
            Clay Home Studio
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Handmade pottery that brings warmth, calm, and character to your home.
          </p>
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800 transition"
          >
            Explore the studio
          </a>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:block"
        >
          {/* QUICK OPTION: external image */}
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop"
            alt="Pottery hero"
            className="w-[420px] h-auto rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <About />
<Gallery />
    <Contact />
<Footer />
    </main>
  )
}
