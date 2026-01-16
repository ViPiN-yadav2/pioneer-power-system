'use client';

import React from 'react';
import Button from '@/components/ui/Button';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: "Residential Solutions",
      description: "Complete home energy systems for sustainable living and reduced electricity bills.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [
        "Solar panel installation",
        "Home battery storage",
        "Smart energy management",
        "Grid-tie systems"
      ],
      benefits: [
        "Reduce electricity bills by up to 90%",
        "Increase home value",
        "Energy independence",
        "Environmental impact"
      ]
    },
    {
      title: "Commercial Solutions",
      description: "Scalable energy systems for businesses, offices, and commercial facilities.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: [
        "Large-scale solar installations",
        "Energy storage systems",
        "Peak shaving solutions",
        "Demand response programs"
      ],
      benefits: [
        "Significant cost savings",
        "Improved sustainability ratings",
        "Tax incentives and rebates",
        "Enhanced brand reputation"
      ]
    },
    {
      title: "Industrial Solutions",
      description: "Heavy-duty power systems for manufacturing plants and industrial facilities.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: [
        "High-capacity power systems",
        "Process optimization",
        "Waste heat recovery",
        "Microgrid integration"
      ],
      benefits: [
        "Operational efficiency",
        "Reduced carbon footprint",
        "Energy security",
        "Compliance with regulations"
      ]
    }
  ];

  const technologies = [
    { name: "Solar Panels", efficiency: "22.8%", icon: "☀️" },
    { name: "Wind Turbines", efficiency: "45%", icon: "💨" },
    { name: "Battery Storage", efficiency: "95%", icon: "🔋" },
    { name: "Smart Inverters", efficiency: "98%", icon: "⚡" }
  ];

  return (
    <section id="solutions" className="relative py-20 md:py-32 bg-gradient-to-b from-cream-50 via-white to-cream-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-800 font-semibold text-sm uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-slate-900">Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            Tailored Energy{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Whether you&apos;re a homeowner, business owner, or industrial facility manager, 
            we have the perfect energy solution to meet your specific requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300" />
              
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
                  {solution.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-primary-500 rounded-full" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-accent-500 rounded-full" />
                    Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                        <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button variant="primary" size="md" className="w-full group-hover:shadow-glow transition-all duration-300">
                  Get Quote
                  <svg 
                    className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="#000000" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Efficiency Section */}
        <div className="relative glass-effect-dark rounded-3xl p-12 mb-16 overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
                Cutting-Edge{" "}
                <span className="text-gradient">Technology</span>
              </h3>
              <p className="text-lg md:text-xl text-slate-600">
                Our solutions leverage the most advanced and efficient technologies in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="text-center group transform transition-all duration-300 hover:scale-105"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                    <span className="text-3xl">{tech.icon}</span>
                  </div>
                  <div className="text-3xl font-bold text-gradient mb-2">{tech.efficiency}</div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{tech.name}</h4>
                  <p className="text-sm text-slate-600">Efficiency Rating</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
            Our Proven{" "}
            <span className="text-gradient">Process</span>
          </h3>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
            From initial consultation to ongoing support, we guide you through every step
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Initial assessment and energy audit", icon: "📋" },
              { step: "02", title: "Design", description: "Custom system design and planning", icon: "✏️" },
              { step: "03", title: "Installation", description: "Professional installation and setup", icon: "🔧" },
              { step: "04", title: "Support", description: "Ongoing maintenance and monitoring", icon: "🛡️" }
            ].map((process, index) => (
              <div key={index} className="relative group">
                <div className="text-center transform transition-all duration-300 hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                    <span className="text-2xl">{process.icon}</span>
                  </div>
                  <div className="text-sm font-semibold text-primary-600 mb-2">STEP {process.step}</div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h4>
                  <p className="text-sm text-slate-600">{process.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-300 transform translate-x-4 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
