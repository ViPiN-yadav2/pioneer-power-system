'use client';

import React, { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';

const Hero: React.FC = () => {
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-slate-900">
      {/* Animated Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)`,
          transition: 'background 0.3s ease-out',
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite',
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Medium Circles */}
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary-400/15 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-accent-400/15 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        
        {/* Small Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-primary-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-effect animate-fade-in-down">
          <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/90">
            Leading Energy Solutions Provider
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-in-up">
          <span className="block text-white mb-2">
            Powering the
          </span>
          <span className="block text-gradient-animated">
            Future of Energy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-4 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Revolutionary energy solutions for a{' '}
          <span className="text-accent-400 font-semibold">sustainable</span> tomorrow
        </p>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Pioneer Power System delivers cutting-edge technology and reliable power systems 
          for homes, businesses, and industries worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="energy" 
            size="xl"
            className="group relative overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-glow-accent"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          
          <Button 
            variant="outline" 
            size="xl"
            className="group border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              Learn More
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '10K+', label: 'Happy Customers' },
            { value: '50+', label: 'Countries' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-effect-dark rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg 
            className="w-6 h-6 animate-bounce" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
};

export default Hero;
