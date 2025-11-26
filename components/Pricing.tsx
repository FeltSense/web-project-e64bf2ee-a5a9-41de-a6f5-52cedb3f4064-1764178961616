'use client';

import { Check, X } from 'lucide-react';

export default function Pricing() {
  const features = [
    { name: 'Real-time trade data', starter: true, pro: true, enterprise: true },
    { name: 'Historical analytics', starter: false, pro: true, enterprise: true },
    { name: 'Player impact metrics', starter: false, pro: true, enterprise: true },
    { name: 'Team performance tracking', starter: false, pro: true, enterprise: true },
    { name: 'Custom webhooks', starter: false, pro: false, enterprise: true },
    { name: 'Priority support', starter: false, pro: false, enterprise: true },
    { name: 'Dedicated account manager', starter: false, pro: false, enterprise: true },
    { name: 'White-label options', starter: false, pro: false, enterprise: true },

  
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-500">
            Choose the plan that fits your needs. Access real-time sports trade data and analytics.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left py-6 px-6 bg-slate-50 rounded-tl-2xl">
                  <span className="text-lg font-semibold text-slate-900">Features</span>
                </th>
                <th className="py-6 px-6 bg-slate-50">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-slate-900">$29</span>
                      <span className="text-slate-500">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500">Perfect for testing</p>
                  </div>
                </th>
                <th className="py-6 px-6 bg-violet-50 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </span>
                  </div>
                  <div className="text-center mt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pro</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-slate-900">$99</span>
                      <span className="text-slate-500">/mo</span>
                    </div>
                    <p className="text-sm text-slate-500">For growing teams</p>
                  </div>
                </th>
                <th className="py-6 px-6 bg-slate-50 rounded-tr-2xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-slate-900">Custom</span>
                    </div>
                    <p className="text-sm text-slate-500">Tailored solutions</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-100"
                >
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    {feature.name}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.starter ? (
                      <Check className="w-5 h-5 text-violet-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center bg-violet-50/30">
                    {feature.pro ? (
                      <Check className="w-5 h-5 text-violet-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.enterprise ? (
                      <Check className="w-5 h-5 text-violet-600 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-slate-300 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
              {/* CTA Row */}
              <tr className="border-t border-slate-100">
                <td className="py-6 px-6"></td>
                <td className="py-6 px-6">
                  <a
                    href="#contact"
                    className="block w-full py-3 bg-white hover:bg-slate-50 text-violet-600 font-semibold rounded-xl border-2 border-violet-600 transition-all duration-300 text-center"
                  >
                    Get Started
                  </a>
                </td>
                <td className="py-6 px-6 bg-violet-50/30">
                  <button
                    onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                    className="block w-full py-3 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md text-center"
                  >
                    Pre-Order Now
                  </button>
                </td>
                <td className="py-6 px-6">
                  <a
                    href="#contact"
                    className="block w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300 text-center"
                  >
                    Contact Sales
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-slate-500">
            All plans include API documentation, 99.9% uptime SLA, and secure data handling.
          </p>
        </div>
      </div>
    </section>
  );
}
