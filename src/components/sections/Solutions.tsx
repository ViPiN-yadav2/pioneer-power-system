'use client';

import React, { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';

const Solutions: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only run on screens smaller than lg (1024px) where carousel is visible
    const checkIfCarouselVisible = () => {
      return window.innerWidth < 1024; // lg breakpoint
    };

    if (!checkIfCarouselVisible()) return;

    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollCarousel = () => {
      if (carousel) {
        const firstCard = carousel.querySelector('[data-carousel-card]') as HTMLElement;
        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth + 16; // card width + gap (gap-4 = 16px)
        const scrollAmount = carousel.scrollLeft + cardWidth;
        const maxScroll = (carousel.scrollWidth / 2) - cardWidth; // Half because we duplicated cards

        if (scrollAmount >= maxScroll) {
          // Reset to start for infinite loop (seamless)
          carousel.scrollTo({ left: 0, behavior: 'auto' });
        } else {
          carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    };

    // Start auto-scroll
    scrollIntervalRef.current = setInterval(scrollCarousel, 3000);

    // Pause on hover/touch
    const pauseScroll = () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
    };

    const resumeScroll = () => {
      scrollIntervalRef.current = setInterval(scrollCarousel, 3000);
    };

    carousel.addEventListener('mouseenter', pauseScroll);
    carousel.addEventListener('mouseleave', resumeScroll);
    carousel.addEventListener('touchstart', pauseScroll);
    carousel.addEventListener('touchend', resumeScroll);

    return () => {
      if (scrollIntervalRef.current) {
        clearInterval(scrollIntervalRef.current);
      }
      carousel.removeEventListener('mouseenter', pauseScroll);
      carousel.removeEventListener('mouseleave', resumeScroll);
      carousel.removeEventListener('touchstart', pauseScroll);
      carousel.removeEventListener('touchend', resumeScroll);
    };
  }, []);
  const solutions = [
    {
      title: "Residential Solutions",
      description: "Complete home energy systems for sustainable living and reduced electricity bills.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-amber-500 via-orange-500 to-amber-600",
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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
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

      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section Container with Shadow - Similar to Services */}
        <div className="relative bg-white rounded-3xl p-0 md:p-8 lg:p-12 xl:p-16 overflow-hidden">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 text-primary-800 font-bold text-sm uppercase tracking-wider mb-8 shadow-lg border border-primary-200/50 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse shadow-glow" />
              <span className="text-slate-900">Solutions</span>
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse shadow-glow" />
            </div>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Tailored Energy{" "}
              <span className="text-gradient-animated">Solutions</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Whether you&apos;re a homeowner, business owner, or industrial facility manager, 
              we have the perfect energy solution to meet your specific requirements.
            </p>
          </div>

          {/* Solutions Grid - Carousel on Mobile */}
          <div className="mb-20">
            {/* Mobile Carousel Container */}
            <div 
              ref={carouselRef}
              className="lg:hidden overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollBehavior: 'smooth' }}
            >
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {/* Duplicate cards for seamless loop */}
                {[...solutions, ...solutions].map((solution, index) => (
                  <div
                    key={`mobile-${index}`}
                    data-carousel-card
                    className={`group relative bg-white rounded-xl p-5 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border border-gray-200/50 hover:border-primary-300/80 shadow-md flex-shrink-0 snap-center ${index === 0 ? 'ml-4' : ''}`}
                    style={{ 
                      animationDelay: `${(index % solutions.length) * 0.15}s`,
                      width: 'calc(100vw - 4rem)',
                      maxWidth: '320px'
                    }}
                  >
                    {/* Subtle Gradient Background - Always Visible */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-10 rounded-xl`} />
                    
                    {/* Corner Accent - Always Visible */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-primary-500/15 to-transparent rounded-bl-full" />
                    
                    <div className="relative">
                      {/* Enhanced Icon Container */}
                      <div className={`relative w-16 h-16 rounded-lg bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-glow overflow-hidden mx-auto`}>
                        {/* Animated gradient overlay for shine - always visible */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-100" />
                        {/* Glow ring effect - always visible */}
                        <div className={`absolute -inset-1 rounded-lg bg-gradient-to-br ${solution.gradient} opacity-40 blur-xl`} />
                        {/* Icon with white color and enhanced styling */}
                        <div className="relative z-10 transform scale-110 text-white drop-shadow-2xl filter">
                          {solution.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 text-center">
                        {solution.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed text-xs text-center">
                        {solution.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                          <span className="w-1 h-3 bg-primary-500 rounded-full" />
                          Key Features:
                        </h4>
                        <ul className="space-y-1.5">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs text-slate-600 font-medium">
                              <svg className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2 text-sm">
                          <span className="w-1 h-3 bg-accent-500 rounded-full" />
                          Benefits:
                        </h4>
                        <ul className="space-y-1.5">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-xs text-slate-600 font-medium">
                              <svg className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Bottom Border - Always Visible */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${solution.gradient} rounded-b-xl`} />
                      
                      <Button variant="primary" size="md" className="w-full group-hover:shadow-glow transition-all duration-300 relative z-10 text-xs py-2">
                        Get Quote
                        <svg 
                          className="w-3 h-3 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-2 border-gray-200/50 hover:border-primary-300/80"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                {/* Subtle Gradient Background - Always Visible */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-10 rounded-3xl`} />
                
                {/* Corner Accent - Always Visible */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-500/15 to-transparent rounded-bl-full" />
                
                <div className="relative">
                  {/* Enhanced Icon Container */}
                  <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-glow overflow-hidden`}>
                    {/* Animated gradient overlay for shine - always visible */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-100" />
                    {/* Glow ring effect - always visible */}
                    <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-40 blur-xl`} />
                    {/* Icon with white color and enhanced styling */}
                    <div className="relative z-10 transform scale-110 text-white drop-shadow-2xl filter">
                      {solution.icon}
                    </div>
                  </div>
                
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <span className="w-1 h-4 bg-primary-500 rounded-full" />
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-slate-600 font-medium">
                          <svg className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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
                        <li key={benefitIndex} className="flex items-center text-sm text-slate-600 font-medium">
                          <svg className="w-5 h-5 text-accent-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Bottom Border - Always Visible */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${solution.gradient} rounded-b-3xl`} />
                  
                  <Button variant="primary" size="md" className="w-full group-hover:shadow-glow transition-all duration-300 relative z-10">
                    Get Quote
                    <svg 
                      className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Technology Efficiency Section */}
          <div className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-12 mb-16 overflow-hidden animate-fade-in-up border-2 border-primary-200/50" style={{ animationDelay: '0.4s' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent-400/10 rounded-full blur-3xl animate-float-delayed" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4">
                  Cutting-Edge{" "}
                  <span className="text-gradient-animated">Technology</span>
                </h3>
                <p className="text-lg md:text-xl text-slate-600 font-medium">
                  Our solutions leverage the most advanced and efficient technologies in the industry.
                </p>
              </div>
              
              {/* Mobile: Infinite Horizontal Scroll */}
              <div className="md:hidden -mx-6 px-6">
                <div className="flex animate-scroll-infinite gap-8" style={{ width: 'max-content' }}>
                  {/* Duplicate items for seamless infinite scroll */}
                  {[...technologies, ...technologies].map((tech, index) => (
                    <div 
                      key={`mobile-${index}`}
                      className="flex-shrink-0 text-center group transform transition-all duration-300 hover:scale-105"
                      style={{ width: '200px' }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                        <span className="text-2xl">{tech.icon}</span>
                      </div>
                      <div className="text-2xl font-bold text-gradient-animated mb-2">{tech.efficiency}</div>
                      <h4 className="text-base font-semibold text-slate-900 mb-2">{tech.name}</h4>
                      <p className="text-xs text-slate-600 font-medium">Efficiency Rating</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid Layout */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technologies.map((tech, index) => (
                  <div 
                    key={index} 
                    className="text-center group transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                      <span className="text-3xl">{tech.icon}</span>
                    </div>
                    <div className="text-3xl font-bold text-gradient-animated mb-2">{tech.efficiency}</div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{tech.name}</h4>
                    <p className="text-sm text-slate-600 font-medium">Efficiency Rating</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4">
              Our Proven{" "}
              <span className="text-gradient-animated">Process</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
              From initial consultation to ongoing support, we guide you through every step
            </p>
            
            {/* Mobile: Infinite Horizontal Scroll */}
            <div className="md:hidden -mx-6 px-6">
              <div className="flex animate-scroll-infinite gap-8" style={{ width: 'max-content' }}>
                {/* Duplicate items for seamless infinite scroll */}
                {[
                  { step: "01", title: "Consultation", description: "Initial assessment and energy audit", icon: "📋" },
                  { step: "02", title: "Design", description: "Custom system design and planning", icon: "✏️" },
                  { step: "03", title: "Installation", description: "Professional installation and setup", icon: "🔧" },
                  { step: "04", title: "Support", description: "Ongoing maintenance and monitoring", icon: "🛡️" }
                ].flatMap(process => [process, process]).map((process, index) => (
                  <div 
                    key={`mobile-process-${index}`}
                    className="flex-shrink-0 relative group"
                    style={{ width: '200px' }}
                  >
                    <div className="text-center transform transition-all duration-300 hover:scale-105">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
                        <span className="text-xl">{process.icon}</span>
                      </div>
                      <div className="text-xs font-semibold text-primary-600 mb-1">STEP {process.step}</div>
                      <h4 className="text-base font-semibold text-slate-900 mb-1">{process.title}</h4>
                      <p className="text-xs text-slate-600 font-medium">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop: Grid Layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <p className="text-sm text-slate-600 font-medium">{process.description}</p>
                  </div>
                  
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 via-primary-400 to-accent-300 transform translate-x-4 group-hover:from-primary-500 group-hover:to-accent-500 transition-all duration-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
