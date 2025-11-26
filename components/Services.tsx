'use client';

import { motion } from 'framer-motion';
import { Zap, TrendingUp, Shield, Database } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-Time Data',
    description: 'Live stats and player data updated in milliseconds'
  },
  {
    icon: TrendingUp,
    title: 'Trade Analytics',
    description: 'Advanced metrics to predict player performance trends'
  },
  {
    icon: Shield,
    title: 'Secure Access',
    description: 'Enterprise-grade API security and authentication'
  },
  {
    icon: Database,
    title: 'Historical Data',
    description: 'Access 10+ years of comprehensive sports statistics'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Built for Fantasy Sports Platforms
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Power your fantasy league with the most comprehensive sports data API in the industry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-violet-50 flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900">{feature.title}</h3>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="#pricing"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
