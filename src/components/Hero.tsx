"use client";

import { Button } from "./ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated gradient orbs - refined positioning */}
      <motion.div 
        style={{ y }}
        className="absolute -top-20 -left-20 w-[700px] h-[700px] opacity-20"
      >
        <div className="absolute top-40 left-40 w-[500px] h-[500px] bg-gradient-to-br from-[#6C63FF] to-[#B388EB] rounded-full blur-[140px] animate-pulse-glow" />
      </motion.div>
      
      <motion.div 
        style={{ y }}
        className="absolute -bottom-20 -right-20 w-[700px] h-[700px] opacity-15"
      >
        <div className="absolute bottom-40 right-40 w-[600px] h-[600px] bg-gradient-to-tl from-[#B388EB] to-[#6C63FF] rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </motion.div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '96px 96px'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-32 sm:pt-40 lg:pt-48 pb-24 sm:pb-32 lg:pb-40 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Content - Better proportions */}
          <motion.div
            style={{ opacity }}
            className="lg:col-span-7 space-y-10 sm:space-y-12"
          >
            {/* Badge with better spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6C63FF]/10 via-[#8B7AED]/10 to-[#B388EB]/10 border border-[#6C63FF]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#6C63FF]" />
                <span className="text-sm text-gray-700" style={{ fontWeight: "500", letterSpacing: "-0.01em" }}>
                  Design Studio of the Future
                </span>
              </div>
            </motion.div>

            {/* Headline with refined typography scale */}
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <span className="block text-[clamp(3rem,8vw,5.5rem)] mb-3" style={{ fontWeight: "900", lineHeight: "0.95", letterSpacing: "-0.04em" }}>
                  <span className="text-gray-900">Design</span>
                </span>
                <span className="block text-[clamp(3rem,8vw,5.5rem)]" style={{ fontWeight: "900", lineHeight: "0.95", letterSpacing: "-0.04em" }}>
                  <span className="bg-gradient-to-r from-[#6C63FF] via-[#8B7AED] to-[#B388EB] bg-clip-text text-transparent relative inline-block animate-gradient">
                    That Launches
                    {/* Refined underline decoration */}
                    <svg className="absolute -bottom-3 left-0 w-full h-4" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <motion.path
                        d="M0,7 Q50,2 100,7 T200,7"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.6" />
                          <stop offset="50%" stopColor="#8B7AED" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#B388EB" stopOpacity="0.6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
                <span className="block text-[clamp(3rem,8vw,5.5rem)] mt-3" style={{ fontWeight: "900", lineHeight: "0.95", letterSpacing: "-0.04em" }}>
                  <span className="text-gray-900">Startups</span>
                </span>
              </motion.h1>
            </div>

            {/* Description with better line height and spacing */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 max-w-2xl leading-relaxed"
              style={{ lineHeight: "1.6", letterSpacing: "-0.01em" }}
            >
              We transform bold ideas into production-ready products. Fast turnarounds, pixel-perfect execution, and designs that convert.
            </motion.p>

            {/* CTA Buttons with proper spacing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base bg-gradient-to-r from-[#6C63FF] to-[#B388EB] hover:from-[#5B52EE] hover:to-[#A277DA] shadow-lg shadow-[#6C63FF]/20 hover:shadow-xl hover:shadow-[#6C63FF]/30 transition-all duration-300 group"
                  style={{ fontWeight: "600" }}
                >
                  Explore Our Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-14 px-8 text-base border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
                  style={{ fontWeight: "600" }}
                  asChild
                >
                  <a href="https://calendly.com/5ha5hank/availability" target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Discovery Call
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats with refined spacing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-10 sm:gap-12 pt-8 border-t border-gray-200"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "$20M+", label: "Raised" },
                { value: "98%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <div className="text-3xl sm:text-4xl bg-gradient-to-r from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block mb-1" style={{ fontWeight: "800", letterSpacing: "-0.02em" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500" style={{ fontWeight: "500" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 3D Illustration with refined positioning */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative h-[500px] sm:h-[600px] lg:h-[700px] hidden lg:block"
          >
            {/* Floating cards with better shadows and spacing */}
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotate: [0, 3, 0]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-16 right-8 w-72 h-[400px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8"
              style={{ 
                transform: "perspective(1200px) rotateY(-12deg) rotateX(5deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="space-y-5">
                <div className="h-3 bg-gradient-to-r from-[#6C63FF] to-[#B388EB] rounded-full w-3/4" />
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full w-full" />
                  <div className="h-2 bg-gray-200 rounded-full w-5/6" />
                </div>
                <div className="mt-8 h-40 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl" />
                <div className="flex gap-3 mt-6">
                  <div className="h-2 bg-gray-200 rounded-full flex-1" />
                  <div className="h-2 bg-gray-200 rounded-full flex-1" />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, 30, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute bottom-12 left-0 w-80 h-[440px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-8"
              style={{ 
                transform: "perspective(1200px) rotateY(12deg) rotateX(-5deg)",
                transformStyle: "preserve-3d"
              }}
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#B388EB]" />
                  <div className="flex-1 space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full w-3/4" />
                    <div className="h-2 bg-gray-100 rounded-full w-1/2" />
                  </div>
                </div>
                <div className="mt-8 h-48 bg-gradient-to-br from-[#6C63FF]/10 to-[#B388EB]/10 rounded-2xl" />
                <div className="space-y-3 mt-6">
                  <div className="h-2 bg-gray-200 rounded-full w-full" />
                  <div className="h-2 bg-gray-200 rounded-full w-4/5" />
                  <div className="h-2 bg-gray-200 rounded-full w-3/5" />
                </div>
              </div>
            </motion.div>

            {/* Refined floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-gradient-to-br from-[#6C63FF] to-[#B388EB] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Refined scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest" style={{ fontWeight: "600" }}>Scroll</span>
          <div className="w-6 h-11 border-2 border-gray-300 rounded-full flex justify-center p-1.5">
            <motion.div 
              className="w-1.5 h-2.5 bg-gradient-to-b from-[#6C63FF] to-[#B388EB] rounded-full"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
