'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
              TradeImpact <span className="text-violet-600">API</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                Features
              </a>
              <a
                href="#pricing"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-6 py-3 transition-all duration-300 shadow-sm hover:shadow-md text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
