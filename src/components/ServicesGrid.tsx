"use client";

import { motion } from "motion/react";
import { Pen, Grid3x3, Sparkles, Code } from "lucide-react";

const services = [
  {
    icon: Pen,
    title: "Product Design",
    description: "Concept to pixel-perfect MVP.",
  },
  {
    icon: Grid3x3,
    title: "Brand Systems",
    description: "Minimal, scalable identity.",
  },
  {
    icon: Sparkles,
    title: "Motion & Interaction",
    description: "Subtle animations that engage.",
  },
  {
    icon: Code,
    title: "Prototype Development",
    description: "Figma to high-fidelity prototypes.",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-gray-900 mb-4 max-w-4xl">
            What We Do – Strategic design for startups that move fast.
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:border-[#6C63FF]/20 transition-all"
            >
              {/* Subtle hover glow */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{
                  background: `radial-gradient(circle at 50% 0%, rgba(108, 99, 255, 0.08), transparent 70%)`,
                  filter: "blur(16px)",
                }}
              ></div>

              {/* Icon with gradient */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#B388EB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              {/* Decorative gradient line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#6C63FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
