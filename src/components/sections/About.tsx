"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
// import Button from "@/components/ui/Button";

const About: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const values = [
    {
      icon: "⚡",
      iconBg: "bg-blue-500",
      date: "2024",
      title: "Innovation",
      description: "Cutting-edge technology solutions",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
      pattern: "dots-blue-yellow",
    },
    {
      icon: "🛡️",
      iconBg: "bg-amber-500",
      date: "2024",
      title: "Reliability",
      description: "Trusted by 120+ institutions",
      gradient: "from-amber-500 via-orange-500 to-amber-600",
      pattern: "stripes-orange-yellow",
    },
    {
      icon: "🌱",
      iconBg: "bg-emerald-500",
      date: "2024",
      title: "Sustainability",
      description: "Eco-friendly energy solutions",
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
      pattern: "dots-green",
    },
  ];

  const features = [
    {
      title: "Uninterrupted Operations",
      description: "Advanced backup systems ensure zero downtime",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Sustainable Technology",
      description: "Eco-friendly solutions for a greener future",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Expert Support",
      description: "24/7 monitoring and maintenance services",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  const achievements = [
    {
      icon: "🏦",
      iconBg: "bg-purple-500",
      label: "25+ Years",
      title: "Trusted Banking Partner",
      location: "Exclusive UPS solutions for the banking sector for over 25 years—a proven track record in critical power backup.",
      pattern: "wavy-lines-purple",
    },
    {
      icon: "🛒",
      iconBg: "bg-blue-500",
      label: "End-to-End",
      title: "Sales & Service Under One Roof",
      location: "One-stop solution: we sell online UPS and provide full after-sales service, so you get both purchase and support from us.",
      pattern: "dots-blue-yellow",
    },
    {
      icon: "📋",
      iconBg: "bg-amber-500",
      label: "Flexible",
      title: "Hire Solutions for Power Backup",
      location: "UPS and batteries available on hire—ideal for events, projects, or temporary needs without long-term commitment.",
      pattern: "stripes-orange-yellow",
    },
    {
      icon: "🔌",
      iconBg: "bg-emerald-500",
      label: "1–20 KVA",
      title: "Wide Rental Range",
      location: "UPS on rent from 1 to 20 KVA—covering small offices to larger setups with a range that fits every requirement.",
      pattern: "dots-green",
    },
  ];

  const stats = [
    {
      value: "15+",
      label: "Years of Power Industry Expertise",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
    },
    {
      value: "120+",
      label: "Banks & Institutions Served",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-amber-500 via-orange-500 to-amber-600",
    },
    {
      value: "500+",
      label: "Projects Completed",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-cream-50 via-white to-cream-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary-100/30 rounded-full blur-2xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-semibold text-sm uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-slate-900">About Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
              Powering Businesses with{" "}
              <span className="text-gradient">Reliable Energy</span> Solutions
            </h2>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              We deliver advanced power backup and energy management solutions
              designed to help businesses, banks, and industries achieve
              uninterrupted operations with sustainable technology.
            </p>

            {/* Enhanced Features List */}
            <div className="space-y-4 pt-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white transition-all duration-300 hover:shadow-md transform hover:-translate-x-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300 shadow-glow">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image with Enhanced Design */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 group">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent z-10 group-hover:from-primary-500/20 group-hover:via-accent-500/10 transition-all duration-300" />
              <Image
                src="/about.png"
                alt="Power backup system"
                width={1200}
                height={900}
                quality={80}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-cover"
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-warm-50/95 via-cream-50/95 to-white backdrop-blur-md rounded-2xl p-6 shadow-2xl animate-float transform hover:scale-105 transition-transform duration-300 border border-warm-200/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
                  <svg className="w-7 h-7" fill="none" stroke="#000000" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient">99.9%</div>
                  <div className="text-sm text-slate-600 font-medium">Uptime Guarantee</div>
                </div>
              </div>
            </div>

            {/* Floating Stats Badge */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-warm-50/95 via-cream-50/95 to-white backdrop-blur-md rounded-2xl p-5 shadow-2xl animate-float-delayed transform hover:scale-105 transition-transform duration-300 border border-warm-200/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-1">24/7</div>
                <div className="text-xs text-slate-600 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="relative mb-24">
          <div className="relative rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-none md:shadow-2xl group">
            {/* Animated Background Gradient - Mouse Tracking */}
            <div 
              className="hidden md:block absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`,
                transition: 'background 0.3s ease-out',
              }}
            />

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px',
                  animation: 'float 20s ease-in-out infinite',
                }}
              />
            </div>

            {/* Floating Geometric Shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Large Circles */}
              <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-delayed" />
              
              {/* Medium Circles */}
              <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary-400/8 rounded-full blur-2xl animate-pulse-slow" />
              <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-accent-400/8 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              
              {/* Small Floating Orbs */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-primary-400/40 rounded-full opacity-60 animate-float"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${4 + i}s`,
                  }}
                />
              ))}
            </div>

            {/* Animated Border Gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/20 via-accent-500/30 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 text-primary-800 font-semibold text-sm uppercase tracking-wider mb-8 shadow-lg border border-primary-200/50 backdrop-blur-sm">
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse shadow-glow" />
                  <span className="text-slate-900 font-bold">Our Mission</span>
                  <span className="w-2.5 h-2.5 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse shadow-glow" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                  Empowering Progress Through{" "}
                  <span className="text-gradient-animated">
                    Sustainable Energy
                  </span>
                </h2>
                <div className="max-w-3xl mx-auto space-y-5">
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full opacity-60" />
                    <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold pl-6">
                      To empower businesses and institutions with uninterrupted,
                      sustainable power solutions that protect operations and fuel
                      progress.
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    We believe in a future where reliable energy is accessible to all, 
                    driving innovation and growth while preserving our planet for generations to come.
                  </p>
                </div>
              </div>

              {/* Core Values with Award-Style Design */}
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl md:rounded-2xl p-5 md:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up border border-gray-200/50 shadow-md overflow-hidden"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Unique Gradient Pattern from Corner */}
                    <div className={`absolute inset-0 ${value.pattern === 'wavy-lines-purple' ? 'pattern-wavy-lines-purple' : 
                      value.pattern === 'dots-blue-yellow' ? 'pattern-dots-blue-yellow' :
                      value.pattern === 'stripes-yellow-black' ? 'pattern-stripes-yellow-black' :
                      value.pattern === 'dots-green' ? 'pattern-dots-green' :
                      value.pattern === 'stripes-orange-yellow' ? 'pattern-stripes-orange-yellow' :
                      'pattern-dashes-red'} opacity-60`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header with Icon and Date */}
                      <div className="flex items-start justify-between mb-4">
                        {/* Top-left Icon */}
                        <div className={`${value.iconBg} w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-white text-xl md:text-2xl shadow-md`}>
                          {value.icon}
                        </div>
                        {/* Top-right Date */}
                        <span className="text-xs md:text-sm text-gray-500 font-medium">
                          {value.date}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 leading-tight">
                        {value.title}
                      </h3>
                      
                      {/* Description */}
                      <div className="text-xs md:text-sm text-gray-600">
                        {value.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience/Stats Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-16">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 text-primary-800 font-bold text-sm uppercase tracking-wider mb-8 shadow-lg border border-primary-200/50 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse shadow-glow" />
              <span className="text-slate-900">Our Achievements</span>
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse shadow-glow" />
            </div>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Trusted Experience &{" "}
              <span className="text-gradient-animated">Proven Results</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Banking UPS solutions, online sales & service, hire basis, and rental (1–20 KVA)
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl md:rounded-2xl p-5 md:p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up border border-gray-200/50 shadow-md overflow-hidden"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Unique Gradient Pattern from Corner */}
                <div className={`absolute inset-0 ${achievement.pattern === 'wavy-lines-purple' ? 'pattern-wavy-lines-purple' : 
                  achievement.pattern === 'dots-blue-yellow' ? 'pattern-dots-blue-yellow' :
                  achievement.pattern === 'stripes-yellow-black' ? 'pattern-stripes-yellow-black' :
                  achievement.pattern === 'dots-green' ? 'pattern-dots-green' :
                  achievement.pattern === 'stripes-orange-yellow' ? 'pattern-stripes-orange-yellow' :
                  'pattern-dashes-red'} opacity-60`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Icon and Label */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Top-left Icon */}
                    <div className={`${achievement.iconBg} w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-white text-xl md:text-2xl shadow-md`}>
                      {achievement.icon}
                    </div>
                    {/* Top-right Label */}
                    <span className="text-xs md:text-sm text-gray-500 font-semibold">
                      {achievement.label}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 leading-tight">
                    {achievement.title}
                  </h3>
                  
                  {/* Description */}
                  <div className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {achievement.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
