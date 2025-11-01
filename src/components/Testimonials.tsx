"use client";

import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO at TechFlow",
    company: "TechFlow",
    image: "https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quote: "Liftoff transformed our vision into a product that our users genuinely love. The attention to detail and speed of delivery was remarkable.",
    rating: 5,
    color: "from-violet-500 to-purple-600"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder at DataSync",
    company: "DataSync",
    image: "https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quote: "Working with Liftoff felt like having an elite design team in-house. They understood our vision immediately and delivered beyond expectations.",
    rating: 5,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Emily Park",
    role: "CPO at CloudNest",
    company: "CloudNest",
    image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    quote: "The quality and professionalism exceeded all expectations. Our conversion rates increased by 300% after the redesign. Truly exceptional work.",
    rating: 5,
    color: "from-emerald-500 to-teal-600"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#B388EB]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="text-sm uppercase tracking-wider text-[#6C63FF] bg-[#6C63FF]/10 px-4 py-2 rounded-full">
              Testimonials
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6" style={{ fontWeight: "800", lineHeight: "1", letterSpacing: "-0.02em" }}>
            <span className="text-gray-900">Loved by</span>
            <br />
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#B388EB] bg-clip-text text-transparent">
              Founders & Teams
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative ${index === 1 ? 'md:mt-12' : ''} ${index === 2 ? 'lg:mt-24' : ''}`}
            >
              {/* Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                {/* Quote icon */}
                <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <Quote className="w-8 h-8 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="relative w-14 h-14">
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-full blur-md opacity-50`} />
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="relative rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div>
                    <div className="text-gray-900" style={{ fontWeight: "600" }}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Decorative gradient */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${testimonial.color} rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="flex -space-x-3">
              {testimonials.map((testimonial, i) => (
                <ImageWithFallback
                  key={i}
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border-2 border-white"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-gray-900 mb-1" style={{ fontWeight: "600" }}>
                Join 50+ happy clients
              </div>
              <div className="text-sm text-gray-600">
                Average rating: 4.9/5 ⭐
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
