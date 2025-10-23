"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="bg-[#faf9f7] py-32 px-8 md:px-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-light text-gray-800 mb-6"
      >
        Let’s Connect
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-600 text-lg max-w-xl mx-auto mb-10 leading-relaxed"
      >
        We love hearing from fellow makers, collectors, and calm-space seekers.
        Whether you’re interested in a custom piece or simply want to say hi —
        drop us a message below.
      </motion.p>

      <motion.a
        href="mailto:clayhomestudio@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full text-sm hover:bg-gray-800 transition"
      >
        clayhomestudio@gmail.com
      </motion.a>
    </section>
  )
}
