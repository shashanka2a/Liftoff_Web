"use client";

import { motion } from "motion/react";
import { Layout, Palette, Globe, Smartphone } from "lucide-react";

const categories = [
  {
    title: "UI Design",
    description: "Beautiful interfaces that users love",
    icon: Layout,
    gradient: "from-[#6C63FF] to-[#B388EB]",
  },
  {
    title: "Brand Identity",
    description: "Memorable visual systems",
    icon: Palette,
    gradient: "from-[#B388EB] to-[#6C63FF]",
  },
  {
    title: "Website Design",
    description: "High-converting digital experiences",
    icon: Globe,
    gradient: "from-[#6C63FF] to-[#8B7AED]",
  },
  {
    title: "Mobile Apps",
    description: "Native & cross-platform solutions",
    icon: Smartphone,
    gradient: "from-[#8B7AED] to-[#B388EB]",
  },
  {
    title: "UI Design",
    description: "Beautiful interfaces that users love",
    icon: Layout,
    gradient: "from-[#6C63FF] to-[#B388EB]",
  },
  {
    title: "Brand Identity",
    description: "Memorable visual systems",
    icon: Palette,
    gradient: "from-[#B388EB] to-[#6C63FF]",
  },
  {
    title: "Website Design",
    description: "High-converting digital experiences",
    icon: Globe,
    gradient: "from-[#6C63FF] to-[#8B7AED]",
  },
  {
    title: "Mobile Apps",
    description: "Native & cross-platform solutions",
    icon: Smartphone,
    gradient: "from-[#8B7AED] to-[#B388EB]",
  },
  {
    title: "UI Design",
    description: "Beautiful interfaces that users love",
    icon: Layout,
    gradient: "from-[#6C63FF] to-[#B388EB]",
  },
];

export function WorkShowcase() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration with animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 right-0 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 left-0 w-96 h-96 bg-[#B388EB]/5 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#6C63FF] mb-3" 
            style={{ fontSize: "0.875rem", letterSpacing: "0.05em", textTransform: "uppercase" }}
          >
            What We Do
          </motion.p>
          <h2 className="text-gray-900 mb-4 text-2xl sm:text-3xl lg:text-4xl" style={{ fontWeight: "700" }}>
            Our Work in Motion
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore a curated reel of our projects – from sleek SaaS dashboards to Web3 ecosystems – all designed to inspire, engage, and convert.
          </p>
        </motion.div>

        {/* Scrolling Grid */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>

          <div className="overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1400],
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6"
            >
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="min-w-[320px] bg-white rounded-2xl border border-gray-100 p-8 hover:border-[#6C63FF]/30 transition-all duration-500 group relative hover:shadow-2xl hover:shadow-purple-500/10"
                  style={{
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  {/* Hover Glow Effect - Enhanced */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, rgba(108, 99, 255, 0.15), transparent 70%)`,
                      filter: "blur(30px)",
                    }}
                  ></div>
                  
                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl overflow-hidden"
                    initial={false}
                  >
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        backgroundPosition: ["0% 0%", "200% 0%"]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                        backgroundSize: "200% 100%"
                      }}
                    />
                  </motion.div>

                  {/* Icon with enhanced animation */}
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                    
                    {/* Glowing ring on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} blur-md`}></div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-gray-900 mb-2 group-hover:text-[#6C63FF] transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {category.description}
                  </p>

                  {/* Decorative animated element */}
                  <motion.div 
                    className="absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#B388EB] opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
