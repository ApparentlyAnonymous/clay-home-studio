"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-[#faf9f7]/80 backdrop-blur-md border-b border-gray-200 z-50"
    >
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo / Title */}
        <button
          onClick={() => scrollTo("top")}
          className="text-lg font-light text-gray-800 hover:text-gray-600 transition"
        >
          Clay Home Studio
        </button>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-sm text-gray-700">
          <button onClick={() => scrollTo("about")} className="hover:text-gray-900 transition">
            About
          </button>
          <button onClick={() => scrollTo("gallery")} className="hover:text-gray-900 transition">
            Gallery
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-gray-900 transition">
            Contact
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
