"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f6f4f2] py-24 px-8 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12"
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <img
          src="https://images.unsplash.com/photo-1549877452-9c387954fbc4?q=80&w=1200&auto=format&fit=crop"
          alt="Clay Home Studio workspace"
          className="w-[360px] md:w-[520px] rounded-2xl shadow-lg object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-xl"
      >
        <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
          About the Studio
        </h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Clay Home Studio is a Bangalore-based pottery space crafting small-batch,
          hand-thrown pieces for everyday rituals. We favour earthy textures,
          calm tones and timeless forms.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Each piece is made slowly — from wheel to firing — with an emphasis on
          durability and warmth. Our collections are released in limited runs.
        </p>
      </motion.div>
    </section>
  )
}
