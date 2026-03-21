'use client';

import React, { useEffect, useState } from 'react';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ borderRadius: '6px' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/landingPage.png"
          alt="Pioneer Power Systems"
          className="w-full h-full object-cover"
          style={{ borderRadius: '6px' }}
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" style={{ borderRadius: '6px' }} />
        {/* Additional gradient overlay from left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" style={{ borderRadius: '6px' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20 text-left w-full">
        {/* Main Headline - Netflix Style */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 animate-fade-in-up leading-tight pr-4">
          <span className="block">
            REDEFINING
          </span>
          <span className="block">
            POWER SYSTEM
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl animate-fade-in-up font-medium pr-4" style={{ animationDelay: '0.1s' }}>
          Revolutionary energy solutions for sustainable power across homes, businesses, and industries.
        </p>

      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent" />
    </section>
  );
};

export default Hero;
