"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    title: "SaaS Dashboard",
    description: "A modern analytics platform that transforms complex data into actionable insights.",
    image: "https://images.unsplash.com/photo-1761593280919-766a4acbcfca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxOTE0MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Product Design"
  },
  {
    title: "Mobile Banking App",
    description: "Building trust and clarity in personal finance through intuitive design.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxOTkwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Mobile App"
  },
  {
    title: "Brand Identity System",
    description: "Complete visual identity for a sustainable fashion startup from concept to launch.",
    image: "https://images.unsplash.com/photo-1635405111186-9917e36e4a40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjE5MTc5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Brand Design"
  },
  {
    title: "E-Commerce Platform",
    description: "Reimagining online shopping with seamless user experience and modern aesthetics.",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxOTE3MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Website Design"
  }
];

export function Portfolio() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6C63FF] mb-3" 
            style={{ fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            Our Portfolio
          </motion.p>
          <h2 className="mb-4 text-gray-900 text-2xl sm:text-3xl lg:text-4xl" style={{ fontWeight: "700" }}>
            Selected Work
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A glimpse into our recent launches - each crafted with purpose, precision, and passion.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-shadow duration-500"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/0 to-[#B388EB]/0 group-hover:from-[#6C63FF]/20 group-hover:to-[#B388EB]/20 transition-all duration-500"></div>
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    initial={false}
                    whileHover={{
                      background: [
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0) 50%, transparent 100%)"
                      ],
                      transition: { duration: 1.5, ease: "easeInOut" }
                    }}
                  ></motion.div>
                </div>
                
                {/* Category Badge */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-gray-100 text-sm"
                >
                  <span className="text-gray-700">{project.category}</span>
                </motion.div>
              </motion.div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-gray-900 group-hover:text-[#6C63FF] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                {/* View Case Link */}
                <motion.div 
                  className="flex items-center gap-2 pt-2"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="bg-gradient-to-r from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent">
                    View Case
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#6C63FF]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
