"use client";

import { Button } from "./ui/button";
import { Rocket } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.95)"]
  );
  
  const headerShadow = useTransform(
    scrollY,
    [0, 100],
    ["0 1px 0 rgba(0,0,0,0.05)", "0 4px 20px rgba(0,0,0,0.08)"]
  );

  const headerPadding = useTransform(
    scrollY,
    [0, 100],
    ["1.25rem", "1rem"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-gray-100/50 transition-all duration-300"
      style={{
        backgroundColor: headerBackground,
        boxShadow: headerShadow,
        paddingTop: headerPadding,
        paddingBottom: headerPadding,
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#6C63FF] to-[#B388EB] flex items-center justify-center shadow-md"
            whileHover={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Rocket className="w-[18px] h-[18px] text-white" />
          </motion.div>
          <span className="text-gray-900 text-base sm:text-lg" style={{ fontWeight: "700", letterSpacing: "-0.02em" }}>
            Liftoff
          </span>
        </motion.div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {["Work", "Services", "About", "Contact"].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900 transition-colors relative group text-[15px]"
              style={{ fontWeight: "500", letterSpacing: "-0.01em" }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6C63FF] to-[#B388EB] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button 
            variant="default" 
            size="sm"
            className="h-10 px-5 bg-gradient-to-r from-[#6C63FF] to-[#B388EB] hover:from-[#5B52EE] hover:to-[#A277DA] shadow-md shadow-[#6C63FF]/20 hover:shadow-lg hover:shadow-[#6C63FF]/30 transition-all duration-300 text-[15px]"
            style={{ fontWeight: "600" }}
            asChild
          >
            <a href="https://calendly.com/5ha5hank/availability" target="_blank" rel="noopener noreferrer">
              Get Started
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
}
