'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "TradeImpact API transformed how we analyze player performance. The real-time data feeds are incredibly accurate and have given us a competitive edge in scouting.",
      name: "Sarah Chen",
      role: "Head of Analytics",
      company: "ProScout",
      avatar: "https://i.pravatar.cc/150?img=5",
      logo: "PS"
    },
    {
      quote: "The depth of historical sports data is unmatched. We've built our entire fantasy platform on TradeImpact API and it's been rock solid from day one.",
      name: "Marcus Rodriguez",
      role: "CTO",
      company: "FantasyLeague Pro",
      avatar: "https://i.pravatar.cc/150?img=12",
      logo: "FL"
    },
    {
      quote: "Integration was seamless. Their documentation is excellent and the support team responds within hours. Best sports data API we've ever worked with.",
      name: "Emily Thompson",
      role: "Lead Developer",
      company: "StatsHub",
      avatar: "https://i.pravatar.cc/150?img=9",
      logo: "SH"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Trusted by Sports Tech Leaders
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            See how teams and platforms use TradeImpact API to power their sports analytics
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-violet-50 rounded-lg mb-6">
                <span className="text-violet-600 font-bold text-lg">{testimonial.logo}</span>
              </div>

              <p className="text-slate-900 text-base leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
