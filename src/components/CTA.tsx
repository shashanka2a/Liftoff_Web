"use client";

import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Refined gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF] via-[#8B7AED] to-[#B388EB]"></div>
      
      {/* Animated gradient orbs with better positioning */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -25, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]"
      ></motion.div>
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 25, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]"
      ></motion.div>
      
      {/* Refined floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-white/80 mb-6 uppercase tracking-wider text-sm"
          style={{ fontWeight: "600" }}
        >
          Get Started
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white mb-8 text-[clamp(2.5rem,6vw,4rem)]"
          style={{ fontWeight: "800", lineHeight: "1.1", letterSpacing: "-0.03em" }}
        >
          Ready to Launch Your Vision?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/90 mb-12 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed"
          style={{ letterSpacing: "-0.01em" }}
        >
          Let's discuss how we can transform your idea into a product that users love and investors notice.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button 
              size="lg" 
              className="h-14 px-8 bg-white text-[#6C63FF] hover:bg-gray-50 gap-2 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 text-base"
              style={{ fontWeight: "700" }}
            >
              See Our Work
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button 
              size="lg" 
              className="h-14 px-8 bg-white text-black hover:bg-gray-100 gap-2 shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 text-base border-2 border-white"
              style={{ fontWeight: "700" }}
              asChild
            >
              <a href="https://calendly.com/5ha5hank/availability" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5" />
                Book a Discovery Call
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
