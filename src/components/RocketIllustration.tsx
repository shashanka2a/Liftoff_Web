"use client";

import { motion } from "motion/react";

export function RocketIllustration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main Rocket Container */}
      <motion.div
        className="relative"
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="300"
          height="400"
          viewBox="0 0 300 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Rocket Body */}
          <motion.g
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main body - rounded rectangle */}
            <rect 
              x="120" 
              y="120" 
              width="60" 
              height="160" 
              rx="8" 
              fill="url(#bodyGradient)"
            />
            
            {/* Rounded nose cone - ellipse top */}
            <ellipse 
              cx="150" 
              cy="90" 
              rx="32" 
              ry="50" 
              fill="url(#noseGradient)"
            />
            
            {/* Window */}
            <circle cx="150" cy="140" r="20" fill="url(#windowGradient)" opacity="0.9" />
            <circle cx="150" cy="140" r="16" fill="#E8F0FF" opacity="0.5" />
            
            {/* Wing left - rounded */}
            <ellipse 
              cx="100" 
              cy="260" 
              rx="18" 
              ry="30" 
              fill="url(#wingGradient)"
              transform="rotate(-15 100 260)"
            />
            
            {/* Wing right - rounded */}
            <ellipse 
              cx="200" 
              cy="260" 
              rx="18" 
              ry="30" 
              fill="url(#wingGradient)"
              transform="rotate(15 200 260)"
            />
            
            {/* Details */}
            <rect x="140" y="160" width="20" height="60" rx="4" fill="url(#detailGradient)" opacity="0.3" />
            
            {/* Bottom rounded edge */}
            <rect 
              x="120" 
              y="265" 
              width="60" 
              height="15" 
              rx="8" 
              fill="url(#bodyGradient)"
            />
          </motion.g>

          {/* Flame/Exhaust */}
          <motion.g
            animate={{
              scaleY: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Main flame */}
            <path
              d="M135 300 L150 360 L165 300 Z"
              fill="url(#flameGradient1)"
            />
            <path
              d="M140 300 L150 350 L160 300 Z"
              fill="url(#flameGradient2)"
            />
          </motion.g>

          {/* Side flames */}
          <motion.g
            animate={{
              scaleY: [1, 1.2, 1],
              opacity: [0.7, 0.9, 0.7],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.1,
            }}
          >
            <path
              d="M100 300 L90 330 L105 310 Z"
              fill="url(#flameGradient3)"
            />
            <path
              d="M200 300 L210 330 L195 310 Z"
              fill="url(#flameGradient3)"
            />
          </motion.g>

          {/* Gradients */}
          <defs>
            <linearGradient id="bodyGradient" x1="150" y1="50" x2="150" y2="300">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#8B7DFF" />
            </linearGradient>
            
            <linearGradient id="noseGradient" x1="150" y1="20" x2="150" y2="200">
              <stop offset="0%" stopColor="#5B52EE" />
              <stop offset="100%" stopColor="#6C63FF" />
            </linearGradient>
            
            <linearGradient id="wingGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B7DFF" />
              <stop offset="100%" stopColor="#6C63FF" />
            </linearGradient>
            
            <radialGradient id="windowGradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#B388EB" stopOpacity="0.4" />
            </radialGradient>
            
            <linearGradient id="detailGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#6C63FF" />
            </linearGradient>
            
            <linearGradient id="flameGradient1" x1="150" y1="300" x2="150" y2="360">
              <stop offset="0%" stopColor="#FFB800" />
              <stop offset="50%" stopColor="#FF6B6B" />
              <stop offset="100%" stopColor="#B388EB" />
            </linearGradient>
            
            <linearGradient id="flameGradient2" x1="150" y1="300" x2="150" y2="350">
              <stop offset="0%" stopColor="#FFF176" />
              <stop offset="100%" stopColor="#FFB800" />
            </linearGradient>
            
            <linearGradient id="flameGradient3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFB800" />
              <stop offset="100%" stopColor="#FF6B6B" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glow effect behind rocket */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#6C63FF]/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
      </motion.div>

      {/* Smoke/Cloud particles */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-300 rounded-full blur-sm"
        animate={{
          y: [0, 60, 120],
          opacity: [0.6, 0.3, 0],
          scale: [1, 1.5, 2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-200 rounded-full blur-sm"
        animate={{
          y: [0, 70, 130],
          x: [-10, -15, -20],
          opacity: [0.5, 0.2, 0],
          scale: [1, 1.8, 2.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.3,
        }}
      ></motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-200 rounded-full blur-sm"
        animate={{
          y: [0, 65, 125],
          x: [10, 18, 25],
          opacity: [0.5, 0.2, 0],
          scale: [1, 1.6, 2.2],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      ></motion.div>

      {/* Stars/Sparkles */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-[#6C63FF] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      <motion.div
        className="absolute top-40 right-40 w-1.5 h-1.5 bg-[#B388EB] rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      ></motion.div>

      <motion.div
        className="absolute top-60 right-10 w-2 h-2 bg-[#6C63FF] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      ></motion.div>

      <motion.div
        className="absolute top-10 left-20 w-1.5 h-1.5 bg-[#B388EB] rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      ></motion.div>
    </div>
  );
}
