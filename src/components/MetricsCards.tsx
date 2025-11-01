"use client";

import { motion, useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import React from "react";

const metrics = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Launched"
  },
  {
    value: 20,
    prefix: "$",
    suffix: "M+",
    label: "Raised by Clients"
  },
  {
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate"
  }
];

function AnimatedCounter({ value, prefix = "", suffix = "", delay = 0 }: { value: number; prefix?: string; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(value);
      }, delay);
    }
  }, [isInView, motionValue, value, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export function MetricsCards() {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(108, 99, 255, 0.03) 0%, rgba(179, 136, 235, 0.05) 100%)",
        }}
      ></div>

      {/* Decorative Elements with animation */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-64 h-64 bg-[#6C63FF]/5 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#B388EB]/5 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-5xl mx-auto relative">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="text-center flex-1 group"
            >
              {/* Value with gradient and hover effect */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="bg-gradient-to-br from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent mb-2 text-3xl sm:text-4xl lg:text-5xl group-hover:from-[#5B52EE] group-hover:to-[#A277DA] transition-all duration-300"
                style={{
                  lineHeight: "1.2",
                  fontWeight: "700"
                }}
              >
                <AnimatedCounter 
                  value={metric.value} 
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  delay={index * 150}
                />
              </motion.div>

              {/* Label */}
              <div className="text-gray-600 text-sm sm:text-base group-hover:text-gray-900 transition-colors duration-300">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative separator line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 sm:mt-10 lg:mt-12 h-px w-full bg-gradient-to-r from-transparent via-[#6C63FF]/20 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}
