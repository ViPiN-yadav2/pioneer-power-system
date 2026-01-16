'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex-shrink-0 group">
              <h1 className="text-2xl font-bold text-gradient font-heading transition-transform duration-300 group-hover:scale-105">
                Pioneer Power
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 rounded-lg transition-all duration-200 hover:bg-primary-50 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </a>
            ))}
            <div className="ml-4">
              <Button variant="energy" size="sm" className="shadow-glow-accent">
                Get Started
              </Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white border-t border-slate-200 shadow-lg">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 pt-2">
            <Button 
              variant="energy" 
              size="sm" 
              className="w-full shadow-glow-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
