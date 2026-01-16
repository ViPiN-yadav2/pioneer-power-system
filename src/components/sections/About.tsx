"use client";

import React from "react";
import Button from "@/components/ui/Button";

const About: React.FC = () => {
  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Cutting-edge technology solutions",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Reliability",
      description: "Trusted by 120+ institutions",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Sustainability",
      description: "Eco-friendly energy solutions",
      gradient: "from-success-500 to-success-600",
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

  const stats = [
    {
      value: "15+",
      label: "Years of Power Industry Expertise",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-primary-500 to-primary-600",
    },
    {
      value: "120+",
      label: "Banks & Institutions Served",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-accent-500 to-accent-600",
    },
    {
      value: "500+",
      label: "Projects Completed",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="#000000" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-primary-500 to-accent-500",
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow">
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

            <div className="pt-4">
              <Button variant="primary" size="lg" className="group shadow-glow">
                <span className="flex items-center gap-2">
                  Get a Quote
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="#000000" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
            </div>
          </div>

          {/* Right Image with Enhanced Design */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 group">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-accent-500/5 to-transparent z-10 group-hover:from-primary-500/20 group-hover:via-accent-500/10 transition-all duration-300" />
              <img
                src="/about.png"
                alt="Power backup system"
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
          <div className="relative bg-gradient-to-br from-cream-100 via-warm-50 to-cream-200 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden border-2 border-warm-300/50 shadow-xl">
            {/* Background Pattern - Light beige with subtle grid */}
            <div className="absolute inset-0 opacity-15">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236b7280' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              />
            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cream-200/30 via-accent-100/40 to-cream-200/30 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-100 text-accent-800 font-semibold text-sm uppercase tracking-wider mb-6 shadow-sm">
                  <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
                  <span className="text-slate-900">Our Mission</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
                  Empowering Progress Through{" "}
                  <span className="text-gradient">Sustainable Energy</span>
                </h2>
                <div className="max-w-3xl mx-auto">
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6 font-medium">
                    To empower businesses and institutions with uninterrupted,
                    sustainable power solutions that protect operations and fuel
                    progress.
                  </p>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                    We believe in a future where reliable energy is accessible to all, 
                    driving innovation and growth while preserving our planet for generations to come.
                  </p>
                </div>
              </div>

              {/* Core Values with Enhanced Design */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up border-2 border-transparent hover:border-primary-200"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                    
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                    
                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience/Stats Section */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-semibold text-sm uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-slate-900">Our Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-4">
              Trusted Experience &{" "}
              <span className="text-gradient">Proven Results</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Years of expertise delivering reliable power solutions across industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-warm-50/90 via-cream-50/90 to-white backdrop-blur-md rounded-3xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-glow-lg animate-fade-in-up border-2 border-warm-200/30 hover:border-primary-300/50 shadow-xl"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
                
                <div className="relative flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow`}>
                    {stat.icon}
                  </div>
                  <div className="text-5xl md:text-6xl font-bold text-gradient">
                    {stat.value}
                  </div>
                </div>
                <p className="text-slate-700 text-lg font-semibold leading-relaxed">
                  {stat.label}
                </p>
                
                {/* Animated Bottom Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${stat.gradient} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
