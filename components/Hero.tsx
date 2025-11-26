'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-violet-50 text-violet-600 px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Zap size={16} className="text-violet-600" />
              Real-Time Sports Data API
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6"
            >
              Track every trade.
              <span className="block text-violet-600 mt-2">
                Measure real impact.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
            >
              Power your sports platform with comprehensive trade analytics, player performance metrics, and real-time roster updates. Built for developers who demand accuracy.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                Get API Key
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300"
              >
                View Pricing
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-800"
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-slate-500">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">&lt;50ms</div>
                <div className="text-sm text-slate-500">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-slate-500">Developers</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Dashboard Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">API Dashboard</h3>
                  <p className="text-sm text-slate-500">Real-time analytics</p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-sm font-semibold">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  Live
                </div>
              </div>

              {/* API Metrics */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-violet-50 p-2 rounded-lg">
                      <TrendingUp className="text-violet-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">API Requests</div>
                      <div className="text-xl font-bold text-slate-900">1.2M</div>
                    </div>
                  </div>
                  <div className="text-emerald-400 text-sm font-semibold">+24%</div>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-50 p-2 rounded-lg">
                      <Shield className="text-emerald-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Success Rate</div>
                      <div className="text-xl font-bold text-slate-900">99.8%</div>
                    </div>
                  </div>
                  <div className="text-emerald-400 text-sm font-semibold">+0.2%</div>
                </div>
              </div>

              {/* Code Preview */}
              <div className="bg-slate-900 rounded-xl p-4 overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="font-mono text-xs text-slate-300 space-y-1">
                  <div><span className="text-violet-400">GET</span> /api/trades</div>
                  <div className="text-slate-500">// Response: 200 OK</div>
                  <div className="text-emerald-400">&#123; "status": "success" &#125;</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -right-4 bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              Enterprise Ready
            </motion.div>

            {/* Floating Badge Bottom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-bold shadow-lg text-slate-900"
            >
              🔥 500+ Active Users
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
