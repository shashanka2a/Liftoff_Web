"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Search, Pencil, Rocket, ArrowRight } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We dive deep into your vision, target users, and market positioning. Through strategic workshops and research, we build a foundation for success.",
    icon: Search,
    color: "from-violet-500 to-purple-600",
    features: ["Strategy Workshop", "User Research", "Competitor Analysis", "Goals Definition"]
  },
  {
    number: "02",
    title: "Design",
    description: "Our team crafts intuitive, pixel-perfect interfaces that balance beauty with usability. Every interaction is designed to delight and convert.",
    icon: Pencil,
    color: "from-blue-500 to-cyan-600",
    features: ["Wireframing", "UI Design", "Prototyping", "User Testing"]
  },
  {
    number: "03",
    title: "Deliver",
    description: "We ship production-ready designs with comprehensive documentation and support. Your team gets everything needed for a seamless launch.",
    icon: Rocket,
    color: "from-pink-500 to-rose-600",
    features: ["Development Handoff", "Design System", "Documentation", "Launch Support"]
  },
];

export function ProcessSteps() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section 
      ref={containerRef}
      className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0E1116 0%, #1C1F24 50%, #0E1116 100%)",
      }}
    >
      {/* Animated gradient orbs */}
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2])
        }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#6C63FF]/30 rounded-full blur-[150px]"
      />
      <motion.div
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.4, 0.2])
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#B388EB]/30 rounded-full blur-[150px]"
      />

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 sm:mb-32 lg:mb-40"
        >
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-wider text-[#B388EB] bg-[#B388EB]/10 px-5 py-2.5 rounded-full" style={{ fontWeight: "600" }}>
              Our Process
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] mb-8" style={{ fontWeight: "800", lineHeight: "1.05", letterSpacing: "-0.03em" }}>
            <span className="text-white">Launch Fast.</span>
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent">
              Design for Impact.
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
            From concept to launch in weeks, not months. Our proven three-step process delivers exceptional results.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-32 sm:space-y-40 lg:space-y-48">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                  {/* Number & Icon Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`lg:col-span-5 relative ${!isEven ? 'lg:col-start-8' : ''}`}
                  >
                    <div className="relative">
                      {/* Large number */}
                      <div className="absolute -top-20 -left-8 text-[240px] opacity-[0.02] pointer-events-none select-none leading-none" style={{ fontWeight: "900" }}>
                        {step.number}
                      </div>

                      {/* Icon container */}
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="relative inline-block"
                      >
                        <div className={`w-36 h-36 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl relative overflow-hidden group`}>
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3,
                              ease: "easeInOut"
                            }}
                          />
                          <Icon 
                            className="w-[72px] h-[72px] text-white relative z-10" 
                            strokeWidth={2.5}
                            style={{ 
                              display: 'block',
                              margin: '0 auto',
                              flexShrink: 0
                            }} 
                          />
                        </div>
                        
                        {/* Floating badge */}
                        <div className="absolute -bottom-5 -right-5 px-5 py-2.5 bg-gray-900 rounded-full border border-white/10 shadow-xl">
                          <span className="text-white text-sm" style={{ fontWeight: "700", letterSpacing: "-0.01em" }}>
                            Step {step.number}
                          </span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className={`lg:col-span-7 space-y-8 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                  >
                    <div className="space-y-5">
                      <h3 className="text-4xl sm:text-5xl lg:text-6xl text-white" style={{ fontWeight: "800", letterSpacing: "-0.03em" }}>
                        {step.title}
                      </h3>
                      <div className={`h-1 w-20 bg-gradient-to-r ${step.color} rounded-full`} />
                    </div>

                    <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl" style={{ letterSpacing: "-0.01em" }}>
                      {step.description}
                    </p>

                    {/* Features grid */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      {step.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-start gap-3 group cursor-default"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} group-hover:scale-150 transition-transform flex-shrink-0 mt-2`} />
                          <span className="text-gray-400 group-hover:text-white transition-colors text-[15px] leading-relaxed" style={{ fontWeight: "500" }}>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Connecting line (except last) */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className={`hidden lg:block absolute ${isEven ? 'right-1/2' : 'left-1/2'} bottom-0 w-px h-32 bg-gradient-to-b from-white/20 to-transparent origin-top`}
                    style={{ transform: 'translateY(100%)' }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 sm:mt-40 lg:mt-48 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" />
              </div>
              <span className="text-white text-lg" style={{ fontWeight: "700", letterSpacing: "-0.01em" }}>
                Available for new projects
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2 px-10 py-4 bg-white text-gray-900 rounded-full hover:shadow-2xl transition-all duration-300 text-base"
              style={{ fontWeight: "700", letterSpacing: "-0.01em" }}
            >
              Let's Work Together
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
