"use client"

import { motion } from "framer-motion"

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba2?q=80&w=1200&auto=format&fit=crop",
    title: "Stoneware Mug",
  },
  {
    src: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=1200&auto=format&fit=crop",
    title: "Hand-thrown Vase",
  },
  {
    src: "https://images.unsplash.com/photo-1616628188578-8a47a3a6ec7f?q=80&w=1200&auto=format&fit=crop",
    title: "Textured Bowl",
  },
  {
    src: "https://images.unsplash.com/photo-1620054064181-8d6a9d6f9f80?q=80&w=1200&auto=format&fit=crop",
    title: "Ceramic Planter",
  },
  {
    src: "https://images.unsplash.com/photo-1602160862563-28ec26a56ea7?q=80&w=1200&auto=format&fit=crop",
    title: "Minimal Teapot",
  },
  {
    src: "https://images.unsplash.com/photo-1616627768821-bd00d71f3fae?q=80&w=1200&auto=format&fit=crop",
    title: "Sculpted Dish",
  },
]

export default function Gallery() {
  return (
    <section className="bg-[#faf9f7] py-28 px-8 md:px-20">
      <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-12 text-center">
        Our Work
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {galleryItems.map((item, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.4, delay: index * 0.1 }}
  viewport={{ once: true }}
  className="flex flex-col items-center cursor-pointer"
>
  <motion.img
    src={item.src}
    alt={item.title}
    className="w-full h-[320px] object-cover rounded-2xl shadow-md mb-4 transition-transform duration-300"
    whileHover={{ scale: 1.05 }}
  />
  <p className="text-gray-700 text-sm">{item.title}</p>
</motion.div>
        ))}
      </div>
    </section>
  )
}
