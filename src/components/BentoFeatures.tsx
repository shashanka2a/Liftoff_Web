"use client";

import { motion } from "motion/react";
import { Sparkles, Zap, Target, Layers, Rocket, Palette } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Brand Identity",
    description: "Memorable logos and comprehensive brand systems that resonate.",
    color: "from-violet-500 to-purple-500",
    size: "large",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "2-week sprints for MVP launches",
    color: "from-blue-500 to-cyan-500",
    size: "small",
  },
  {
    icon: Target,
    title: "Precision Design",
    description: "Pixel-perfect interfaces that convert",
    color: "from-pink-500 to-rose-500",
    size: "small",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Scalable component libraries built for growth and consistency.",
    color: "from-amber-500 to-orange-500",
    size: "medium",
  },
  {
    icon: Rocket,
    title: "Launch Ready",
    description: "Production-ready code and assets",
    color: "from-emerald-500 to-teal-500",
    size: "medium",
  },
  {
    icon: Palette,
    title: "Custom Illustrations",
    description: "Unique visuals that tell your story",
    color: "from-indigo-500 to-blue-500",
    size: "small",
  },
];

export function BentoFeatures() {
  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent">
              Everything You Need
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            From concept to launch, we've got you covered with comprehensive design services
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-fr">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gridClass = 
              feature.size === "large" ? "sm:col-span-2 sm:row-span-2" :
              feature.size === "medium" ? "lg:col-span-2" :
              "";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={`group relative bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-purple-200 transition-all duration-300 overflow-hidden ${gridClass}`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon with gradient background */}
                <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-2 group-hover:text-[#6C63FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
