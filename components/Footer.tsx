'use client';

import { Zap, Twitter, Linkedin, Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'API Documentation', href: '#services' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Use Cases', href: '#services' },
      { name: 'Status', href: '#contact' }
    ],
    company: [
      { name: 'About Us', href: '#contact' },
      { name: 'Contact', href: '#contact' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Partners', href: '#contact' }
    ],
    resources: [
      { name: 'Get Started', href: '#contact' },
      { name: 'Support', href: '#contact' },
      { name: 'API Reference', href: '#services' },
      { name: 'Community', href: '#contact' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#contact' },
      { name: 'Terms of Service', href: '#contact' },
      { name: 'Cookie Policy', href: '#contact' },
      { name: 'Compliance', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="#" className="inline-flex items-center gap-3 group mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-violet-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-violet-600 p-2.5 rounded-xl">
                  <Zap className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <span className="font-bold text-xl text-white tracking-tight font-['Sora']">
                TradeImpact API
              </span>
            </Link>
            
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Real-time sports data API powering the next generation of fantasy sports, betting platforms, and analytics tools.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-slate-900 p-2.5 rounded-xl text-slate-400 hover:text-violet-400 hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {/* Product Column */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-['Sora']">
                Product
              </h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-['Sora']">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-['Sora']">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 font-['Sora']">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 font-['Sora'] tracking-tight">
                Stay Updated
              </h3>
              <p className="text-slate-400">
                Get the latest API updates, sports data insights, and developer resources.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-300"
              />
              <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} TradeImpact API. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#contact" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
                Contact Sales
              </a>
              <a href="#services" className="text-slate-500 hover:text-violet-400 text-sm transition-colors duration-300">
                API Status
              </a>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-emerald-400 text-sm font-medium">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
