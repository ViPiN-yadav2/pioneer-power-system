"use client";

import React, { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

const Services: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only run on mobile
    if (window.innerWidth >= 768) return;

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
  const services = [
    {
      title: "Battery",
      description:
        "High-quality battery solutions for reliable power backup and energy storage systems.",
      features: [
        "Long-lasting performance",
        "Fast charging capability",
        "Maintenance-free design",
        "Wide range of capacities",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M4 7h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M20 10v4"
          />
        </svg>
      ),
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
      bgImage: "/battery.png",
    },
    {
      title: "Inverter",
      description:
        "Advanced inverter systems for converting DC power to AC with high efficiency and reliability.",
      features: [
        "Pure sine wave output",
        "High efficiency rating",
        "Overload protection",
        "Smart monitoring",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      bgImage: "/inverter.png",
    },
    {
      title: "Stabilizer",
      description:
        "Voltage stabilizers to protect your appliances from voltage fluctuations and power surges.",
      features: [
        "Automatic voltage regulation",
        "Surge protection",
        "Wide input range",
        "Digital display",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      gradient: "from-amber-500 via-orange-500 to-amber-600",
      bgImage: "/stabilizer.png",
    },
    {
      title: "UPS",
      description:
        "Uninterruptible Power Supply systems for seamless power backup during outages.",
      features: [
        "Instant power switching",
        "Battery backup",
        "Surge protection",
        "Automatic shutdown",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      gradient: "from-indigo-500 via-purple-500 to-indigo-600",
      bgImage: "/grid-bg.png",
    },
    // {
    //   title: "Microgrid Solutions",
    //   description:
    //     "Independent power systems for communities, campuses, and critical facilities.",
    //   features: [
    //     "Island mode operation",
    //     "Renewable integration",
    //     "Backup power",
    //     "Community resilience",
    //   ],
    //   icon: (
    //     <svg
    //       className="w-8 h-8"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2.5}
    //         d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    //       />
    //     </svg>
    //   ),
    //   gradient: "from-rose-500 via-pink-500 to-rose-600",
    //   bgImage: "/microgrid-bg.jpg",
    // },
    // {
    //   title: "Energy Consulting",
    //   description:
    //     "Expert guidance on energy strategy, efficiency improvements, and sustainability planning.",
    //   features: [
    //     "Energy audits",
    //     "Feasibility studies",
    //     "Regulatory compliance",
    //     "Cost optimization",
    //   ],
    //   icon: (
    //     <svg
    //       className="w-8 h-8"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2.5}
    //         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    //       />
    //     </svg>
    //   ),
    //   gradient: "from-violet-500 via-purple-500 to-violet-600",
    //   bgImage: "/consulting-bg.jpg",
    // },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-cream-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Section Container with Shadow - Similar to Our Mission */}
        <div className="relative bg-white rounded-3xl p-0 md:p-8 lg:p-12 xl:p-16 overflow-hidden shadow-none md:shadow-2xl">
          {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 text-primary-800 font-bold text-sm uppercase tracking-wider mb-6 shadow-lg border border-primary-200/50 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse shadow-glow" />
            <span className="text-slate-900">Our Services</span>
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse shadow-glow" />
          </div>
          
          {/* 23 Years Tagline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
            <span className="text-gradient-animated">23 Years</span> of Glorious Service
          </h2>
          
          {/* Service Highlights */}
          <ul className="max-w-2xl mx-auto space-y-3 text-left mb-0">
            <li className="flex items-start gap-3 text-slate-700 font-medium">
              <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Video call services are provided
            </li>
            <li className="flex items-start gap-3 text-slate-700 font-medium">
              <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Site visit with full backup—in any condition we provide the best services
            </li>
            <li className="flex items-start gap-3 text-slate-700 font-medium">
              <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              Rental services are also provided for batteries and UPS
            </li>
            <li className="flex items-start gap-3 text-slate-700 font-medium">
              <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              We provide services only in these regions—Saurashtra, Jamnagar, Junagadh (Gujarat, India)
            </li>
          </ul>
        </div>

          {/* Services Grid - Carousel on Mobile */}
          <div className="mb-16">
            {/* Mobile Carousel Container */}
            <div 
              ref={carouselRef}
              className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
            >
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {/* Duplicate cards for seamless loop */}
                {[...services, ...services].map((service, index) => (
                  <div
                    key={`mobile-${index}`}
                    data-carousel-card
                    className={`group relative rounded-xl p-5 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border border-white/20 hover:border-white/40 shadow-md flex-shrink-0 snap-center overflow-hidden ${index === 0 ? 'ml-4' : ''}`}
                    style={{ 
                      animationDelay: `${(index % services.length) * 0.1}s`,
                      width: 'calc(100vw - 4rem)',
                      maxWidth: '320px'
                    }}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center rounded-xl"
                      style={{ 
                        backgroundImage: `url(${service.bgImage})`,
                      }}
                    />
                    
                    {/* Glass Effect Overlay - More transparent */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl" />
                    
                    {/* Glass shine effect - Subtle */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-xl pointer-events-none" />
                    
                    {/* Text readability overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20 rounded-xl pointer-events-none" />
                    
                    {/* Corner Accent - Always Visible */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-white/30 to-transparent rounded-bl-full z-10" />
                    
                    {/* Content - Above all layers */}
                    <div className="relative z-10">
                      {/* Text background for readability */}
                      <div className="absolute inset-x-0 top-12 bottom-0 bg-white/30 backdrop-blur-xs rounded-xl -mx-2 -mb-2" />
                      
                      {/* Enhanced Icon Container */}
                      <div className={`relative z-10 w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-glow overflow-hidden mx-auto`}>
                        {/* Animated gradient overlay for shine - always visible */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-100" />
                        {/* Glow ring effect - always visible */}
                        <div className={`absolute -inset-1 rounded-lg bg-gradient-to-br ${service.gradient} opacity-40 blur-xl`} />
                        {/* Icon with white color and enhanced styling */}
                        <div className="relative z-10 transform scale-110 text-white drop-shadow-2xl filter">
                          {service.icon}
                        </div>
                      </div>

                      <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 text-center drop-shadow-sm">
                        {service.title}
                      </h3>
                      <p className="relative z-10 text-gray-900 mb-4 leading-relaxed text-xs text-center font-semibold drop-shadow-sm">
                        {service.description}
                      </p>

                      <ul className="relative z-10 space-y-2 mb-4">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-xs text-gray-900 font-semibold drop-shadow-sm"
                          >
                            <svg
                              className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Bottom Border - Always Visible */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${service.gradient} rounded-b-xl`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Grid - 2x2 Layout for 4 Cards */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl p-8 transform transition-all duration-500 hover:scale-105 hover:-translate-y-3 animate-fade-in-up border-2 border-white/20 hover:border-white/40 shadow-lg overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center rounded-3xl"
                    style={{ 
                      backgroundImage: `url(${service.bgImage})`,
                    }}
                  />
                  
                  {/* Glass Effect Overlay - More transparent */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl" />
                  
                  {/* Glass shine effect - Subtle */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent rounded-3xl pointer-events-none" />
                  
                  {/* Text readability overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20 rounded-3xl pointer-events-none" />
                  
                  {/* Corner Accent - Always Visible */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/30 to-transparent rounded-bl-full z-10" />
                  
                  {/* Content - Above all layers */}
                  <div className="relative z-10">
                    {/* Text background for readability */}
                    <div className="absolute inset-x-0 top-16 bottom-0 bg-white/30 backdrop-blur-xs rounded-3xl -mx-4 -mb-4" />
                    
                    {/* Enhanced Icon Container */}
                    <div className={`relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-glow overflow-hidden`}>
                      {/* Animated gradient overlay for shine - always visible */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-100" />
                      {/* Glow ring effect - always visible */}
                      <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-40 blur-xl`} />
                      {/* Icon with white color and enhanced styling */}
                      <div className="relative z-10 transform scale-110 text-white drop-shadow-2xl filter">
                        {service.icon}
                      </div>
                    </div>

                    <h3 className="relative z-10 text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300 drop-shadow-sm">
                      {service.title}
                    </h3>
                    <p className="relative z-10 text-gray-900 mb-6 leading-relaxed text-sm font-semibold drop-shadow-sm">
                      {service.description}
                    </p>

                    <ul className="relative z-10 space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-900 font-semibold drop-shadow-sm"
                        >
                          <svg
                            className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Border - Always Visible */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} rounded-b-3xl`} />
                </div>
              ))}
            </div>
          </div>

        {/* CTA Section */}
        {/* <div className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 rounded-3xl p-12 md:p-16 text-center overflow-hidden animate-fade-in-up border-2 border-primary-200/50" style={{ animationDelay: '0.6s' }}> */}
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
          {/* <div className="absolute top-10 right-10 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent-400/10 rounded-full blur-3xl animate-float-delayed" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-slate-900 mb-4">
              Ready to Transform Your{" "}
              <span className="text-gradient-animated">Energy Future?</span>
            </h3>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Let our experts design a custom energy solution that meets your
              specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="energy"
                size="lg"
                className="shadow-glow-accent group"
              >
                <span className="flex items-center gap-2">
                  Get Free Consultation
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                View Case Studies
              </Button>
            </div> */}
          {/* </div> */}
        {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
