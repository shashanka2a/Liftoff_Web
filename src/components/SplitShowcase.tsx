"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Adverzeo",
    category: "Brand Identity • Web Design • UI/UX",
    description: "The Art Of Loading Excellence • premium marketing platform design that transforms user engagement through sophisticated visual storytelling",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-orange-500 to-red-600",
    metrics: ["2024", "Premium Design", "Marketing Platform"],
    year: "2024"
  },
  {
    title: "Payflow",
    category: "Fintech • Web App • Design System",
    description: "Seamless global finance with zero hidden fees and instant settlements. No boundaries, just seamless financial operations",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-emerald-500 to-green-600",
    metrics: ["2024", "Zero Fees", "Global Finance"],
    year: "2024"
  },
  {
    title: "InOrbyt",
    category: "Web3 • Platform Design • Brand Identity",
    description: "Reward your community. No crypto. No complexity. Just connection. Building meaningful relationships through simplified rewards",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    color: "from-teal-500 to-cyan-600",
    metrics: ["2025", "Community First", "Web3 Simplified"],
    year: "2025"
  }
];

export function SplitShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header with refined typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 sm:mb-32 lg:mb-40 max-w-4xl"
        >
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-wider text-[#6C63FF] bg-[#6C63FF]/10 px-5 py-2.5 rounded-full" style={{ fontWeight: "600" }}>
              Featured Work
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] mb-8" style={{ fontWeight: "800", lineHeight: "1.05", letterSpacing: "-0.03em" }}>
            <span className="text-gray-900">Projects That</span>
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent">
              Made Impact
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl" style={{ letterSpacing: "-0.01em" }}>
            Real products, real users, real results. Each project designed to scale and built for success.
          </p>
        </motion.div>

        {/* Projects with refined spacing */}
        <div className="space-y-40 sm:space-y-48 lg:space-y-56">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className={`grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Content Side with refined spacing */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`lg:col-span-5 space-y-8 ${!isEven ? 'lg:col-start-8' : ''}`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500 uppercase tracking-wider" style={{ fontWeight: "600" }}>
                          {project.category}
                        </span>
                        <div className={`h-px flex-1 bg-gradient-to-r ${project.color} max-w-[120px]`} />
                      </div>
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900" style={{ fontWeight: "800", letterSpacing: "-0.03em" }}>
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-lg sm:text-xl text-gray-600 leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
                      {project.description}
                    </p>

                    {/* Metrics with refined layout */}
                    <div className="grid grid-cols-3 gap-4 pt-6">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="group cursor-default">
                          <div className={`text-sm text-gray-900 bg-gradient-to-r ${project.color} bg-clip-text group-hover:text-transparent transition-all duration-300 mb-1`} style={{ fontWeight: "700" }}>
                            {metric.split(' ')[0]}
                          </div>
                          <div className="text-xs text-gray-500" style={{ fontWeight: "500" }}>
                            {metric.split(' ').slice(1).join(' ')}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA with refined styling */}
                    <motion.button
                      whileHover={{ x: 8 }}
                      className="group flex items-center gap-3 text-gray-900 pt-6"
                    >
                      <span className="text-sm uppercase tracking-wider" style={{ fontWeight: "700", letterSpacing: "0.05em" }}>
                        View Case Study
                      </span>
                      <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </motion.div>

                  {/* Image Side with refined styling */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`lg:col-span-7 relative ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.015 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="relative group"
                    >
                      {/* Main image with refined border radius */}
                      <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                        <div className="aspect-[4/3] relative">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Gradient overlay with refined opacity */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-15 transition-opacity duration-700`} />
                        </div>
                      </div>

                      {/* Year badge with refined positioning */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                        className={`absolute top-6 right-6 px-5 py-2.5 bg-gray-900/80 backdrop-blur-md rounded-full shadow-xl border border-white/10`}
                      >
                        <div className="text-white text-sm" style={{ fontWeight: "700", letterSpacing: "-0.01em" }}>
                          {project.year}
                        </div>
                      </motion.div>

                      {/* Refined decorative elements */}
                      <div className={`absolute -top-6 ${isEven ? '-left-6' : '-right-6'} w-32 h-32 bg-gradient-to-br ${project.color} rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-700`} />
                      <div className={`absolute -bottom-6 ${isEven ? '-right-6' : '-left-6'} w-40 h-40 bg-gradient-to-tl ${project.color} rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-700`} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Refined number indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className={`absolute ${isEven ? '-left-12' : '-right-12'} top-0 text-[240px] opacity-[0.015] pointer-events-none select-none hidden 2xl:block`}
                  style={{ fontWeight: "900", lineHeight: "1" }}
                >
                  {(index + 1).toString().padStart(2, '0')}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
