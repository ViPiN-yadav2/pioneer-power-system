'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
      service: ''
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: ["info@pioneerpower.com", "support@pioneerpower.com"],
      action: "Send Email",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      details: ["123 Energy Drive", "San Francisco, CA 94105", "United States"],
      action: "Get Directions",
      gradient: "from-primary-500 to-accent-500",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Closed"],
      action: "Schedule Call",
      gradient: "from-accent-500 to-accent-600",
    }
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-cream-50 to-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-800 font-semibold text-sm uppercase tracking-wider mb-6">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-slate-900">Contact Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            Get in{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your energy transformation? Contact our experts today for a free consultation 
            and discover how we can help you achieve your sustainability goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send us a Message</h3>
            <p className="text-slate-600 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-cream-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-cream-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-cream-50 focus:bg-white"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-cream-50 focus:bg-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="solar">Solar Power Systems</option>
                  <option value="wind">Wind Energy Solutions</option>
                  <option value="storage">Energy Storage</option>
                  <option value="smart-grid">Smart Grid Technology</option>
                  <option value="microgrid">Microgrid Solutions</option>
                  <option value="consulting">Energy Consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell us about your energy needs and goals..."
                />
              </div>

              <Button type="submit" variant="energy" size="lg" className="w-full shadow-glow-accent group">
                <span className="flex items-center justify-center gap-2">
                  Send Message
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
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Contact Information</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team of energy experts is ready to help you design and implement the perfect 
                energy solution for your needs. Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="group relative glass-effect-dark rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-glow`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{info.title}</h4>
                    <div className="space-y-1 mb-3">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-slate-600 text-sm">{detail}</p>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700 p-0 h-auto font-semibold">
                        {info.action}
                        <svg 
                          className="w-4 h-4 ml-1 inline-block group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="#000000" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div className="relative glass-effect-dark rounded-2xl p-6 border-2 border-error-200 bg-gradient-to-br from-error-50/50 to-warning-50/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-error-500 to-error-600 rounded-xl flex items-center justify-center mr-3 shadow-glow">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="white" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-error-800">Emergency Support</h4>
              </div>
              <p className="text-error-700 text-sm mb-4">
                For urgent technical issues or system failures, our 24/7 emergency support team is available.
              </p>
              <Button variant="outline" size="sm" className="border-error-300 text-error-700 hover:bg-error-50 font-semibold">
                Emergency Hotline: +1 (555) 911-POWER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
