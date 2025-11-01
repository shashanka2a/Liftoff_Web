"use client";

import { motion } from "motion/react";

export function FloatingCrystal() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Crystal */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Crystal Core */}
        <div className="relative w-64 h-64">
          {/* Main facet */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/80 to-[#B388EB]/80 rounded-[40px] rotate-12"
            style={{
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          >
            <div className="absolute inset-4 bg-gradient-to-tl from-white/40 to-transparent rounded-[32px]"></div>
          </div>

          {/* Secondary facets */}
          <motion.div
            className="absolute top-8 -left-12 w-32 h-32 bg-gradient-to-br from-[#6C63FF]/60 to-[#B388EB]/40 rounded-3xl -rotate-12"
            animate={{
              x: [0, -10, 0],
              rotate: [-12, -8, -12],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
            }}
          >
            <div className="absolute inset-2 bg-gradient-to-tl from-white/30 to-transparent rounded-2xl"></div>
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -right-12 w-40 h-40 bg-gradient-to-br from-[#B388EB]/60 to-[#6C63FF]/40 rounded-3xl rotate-12"
            animate={{
              x: [0, 10, 0],
              rotate: [12, 16, 12],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              clipPath: "polygon(0% 25%, 75% 0%, 100% 75%, 25% 100%)",
            }}
          >
            <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-2xl"></div>
          </motion.div>

          {/* Glow effects */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#6C63FF]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          {/* Floating particles */}
          <motion.div
            className="absolute top-10 right-10 w-3 h-3 bg-[#6C63FF] rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>

          <motion.div
            className="absolute bottom-20 left-10 w-2 h-2 bg-[#B388EB] rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          ></motion.div>

          <motion.div
            className="absolute top-32 -left-8 w-2 h-2 bg-[#6C63FF] rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
}
