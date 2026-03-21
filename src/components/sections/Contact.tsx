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
    const subject = encodeURIComponent(
      `Contact: ${formData.service ? formData.service + ' – ' : ''}${formData.name}`
    );
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.company ? `Company: ${formData.company}` : '',
      formData.phone ? `Phone: ${formData.phone}` : '',
      formData.service ? `Service Interest: ${formData.service}` : '',
      '',
      formData.message
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    const to = 'ankurrawat0406@gmail.com'; // change to your receiving email
    const mailto = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now",
      gradient: "from-blue-500 via-cyan-500 to-blue-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      details: ["info@pioneerpower.com", "support@pioneerpower.com"],
      action: "Send Email",
      gradient: "from-amber-500 via-orange-500 to-amber-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Address",
      details: ["123 Energy Drive", "San Francisco, CA 94105", "United States"],
      action: "Get Directions",
      gradient: "from-emerald-500 via-green-500 to-emerald-600",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Closed"],
      action: "Schedule Call",
      gradient: "from-violet-500 via-purple-500 to-violet-600",
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
        {/* Section Container with Shadow - Similar to Services */}
        <div className="relative bg-white rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-none md:shadow-2xl">
          {/* Header Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary-100 via-accent-100 to-primary-100 text-primary-800 font-bold text-sm uppercase tracking-wider mb-8 shadow-lg border border-primary-200/50 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse shadow-glow" />
              <span className="text-slate-900">Contact Us</span>
              <span className="w-2.5 h-2.5 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse shadow-glow" />
            </div>
            
            {/* Enhanced Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6 leading-tight">
              Get in{" "}
              <span className="text-gradient-animated">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Ready to start your energy transformation? Contact our experts today for a free consultation 
              and discover how we can help you achieve your sustainability goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 border-2 border-gray-200/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Send us a Message</h3>
              <p className="text-slate-600 mb-8 font-medium">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white text-slate-900 placeholder:text-slate-500"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white text-slate-900 placeholder:text-slate-500"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white text-slate-900 placeholder:text-slate-500"
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white text-slate-900 placeholder:text-slate-500"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 bg-gray-50 focus:bg-white text-slate-900 placeholder:text-slate-500"
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
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 resize-none bg-gray-50 focus:bg-white text-slate-900 placeholder:text-slate-500"
                  placeholder="Tell us about your energy needs and goals..."
                />
              </div>

              <Button
                type="submit"
                variant="energy"
                size="lg"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl py-3 shadow-md group"
              >
                <span className="flex items-center justify-center gap-2 text-white">
                  Send Message
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
            </form>
          </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Contact Information</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Our team of energy experts is ready to help you design and implement the perfect 
                  energy solution for your needs. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-2xl p-6 border-2 border-gray-200/50 hover:border-primary-300/80 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  >
                    {/* Subtle Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.gradient} opacity-5 rounded-2xl`} />
                    
                    <div className="flex items-start gap-4 relative z-10">
                      {/* Enhanced Icon Container */}
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-all duration-500 shadow-glow overflow-hidden`}>
                        {/* Icon Shine Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-100" />
                        {/* Icon Glow Ring */}
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${info.gradient} opacity-40 blur-lg`} />
                        <div className="relative z-10">
                          {info.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">{info.title}</h4>
                        <div className="space-y-1 mb-3">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-slate-600 text-sm font-medium">{detail}</p>
                          ))}
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700 p-0 h-auto font-semibold">
                          {info.action}
                          <svg 
                            className="w-4 h-4 ml-1 inline-block group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
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
              <div className="relative bg-gradient-to-br from-red-50 via-orange-50 to-red-50 rounded-2xl p-6 border-2 border-red-200/50 animate-fade-in-up shadow-lg" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-3 shadow-glow">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-red-800">Emergency Support</h4>
                </div>
                <p className="text-red-700 text-sm mb-4 font-medium">
                  For urgent technical issues or system failures, our 24/7 emergency support team is available.
                </p>
                <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-50 font-semibold">
                  Emergency Hotline: +1 (555) 911-POWER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
