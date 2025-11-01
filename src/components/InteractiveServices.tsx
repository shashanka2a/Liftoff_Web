"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Palette, Layout, Code, Zap } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Comprehensive visual systems that tell your story and resonate with your audience for lasting impact",
    features: ["Logo Design", "Brand Guidelines", "Visual Language", "Marketing Collateral"],
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50"
  },
  {
    icon: Layout,
    title: "Product Design",
    description: "User-centered interfaces that combine beauty with functionality for maximum engagement and conversion",
    features: ["UI/UX Design", "Design Systems", "Prototyping", "User Research"],
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50"
  },
  {
    icon: Code,
    title: "Development",
    description: "Production-ready code that brings your designs to life with pixel-perfect precision and performance",
    features: ["React Development", "Responsive Web", "Performance", "Accessibility"],
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Launch Support",
    description: "End-to-end support from concept to launch and beyond to ensure your continued success and growth",
    features: ["Strategy", "Documentation", "Handoff", "Training"],
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50"
  }
];

export function InteractiveServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-32 lg:py-40 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Diagonal background split with refined gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50/50" />
        <svg className="absolute bottom-0 left-0 right-0" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ height: '120px' }}>
          <path d="M0,0 L1440,60 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header with refined spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 sm:mb-24 lg:mb-28"
        >
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-wider text-[#6C63FF] bg-[#6C63FF]/10 px-5 py-2.5 rounded-full" style={{ fontWeight: "600" }}>
              Our Services
            </span>
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] mb-6 max-w-5xl mx-auto" style={{ fontWeight: "800", lineHeight: "1.05", letterSpacing: "-0.03em" }}>
            <span className="text-gray-900">Everything You Need</span>
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent">
              Under One Roof
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: "-0.01em" }}>
            From strategy to execution, we provide comprehensive design services that help startups launch and scale
          </p>
        </motion.div>

        {/* Services Grid with refined spacing */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isHovered, onHover, onLeave }: any) {
  const Icon = service.icon;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onLeave();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        className={`relative p-8 sm:p-10 lg:p-12 rounded-3xl border-2 bg-white overflow-hidden h-full transition-all duration-500 ${
          isHovered ? 'shadow-2xl border-transparent' : 'shadow-md border-gray-100'
        }`}
      >
        {/* Background gradient on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        {/* Icon with refined styling */}
        <motion.div
          animate={{
            scale: isHovered ? 1.08 : 1,
            rotate: isHovered ? [0, -8, 8, 0] : 0
          }}
          transition={{ duration: 0.5 }}
          className={`relative w-[72px] h-[72px] rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-xl`}
          style={{ transform: "translateZ(60px)" }}
        >
          <Icon className="w-9 h-9 text-white" />
          {/* Glow effect */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
        </motion.div>

        {/* Content with refined spacing */}
        <div className="relative space-y-5" style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl sm:text-3xl text-gray-900 mb-4" style={{ fontWeight: "700", letterSpacing: "-0.02em" }}>
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg" style={{ letterSpacing: "-0.01em" }}>
            {service.description}
          </p>

          {/* Features list with better spacing */}
          <div className="space-y-3 pt-4">
            {service.features.map((feature: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + i * 0.05 }}
                className="flex items-center gap-3 text-[15px] text-gray-700 group/item"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} group-hover/item:scale-150 transition-transform`} />
                <span className="group-hover/item:text-gray-900 transition-colors" style={{ fontWeight: "500" }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative corner with refined opacity */}
        <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-8 blur-3xl transition-opacity duration-500 rounded-full`} />
      </motion.div>
    </motion.div>
  );
}
