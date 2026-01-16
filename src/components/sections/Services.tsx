"use client";

import React from "react";
import Button from "@/components/ui/Button";

const Services: React.FC = () => {
  const services = [
    {
      title: "Solar Power Systems",
      description:
        "Complete solar solutions from residential rooftops to large-scale commercial installations.",
      features: [
        "Grid-tied systems",
        "Off-grid solutions",
        "Battery storage",
        "Monitoring systems",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#000000"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      gradient: "from-accent-400 to-accent-600",
    },
    {
      title: "Wind Energy Solutions",
      description:
        "Advanced wind turbine systems for optimal energy generation in various environments.",
      features: [
        "Small wind turbines",
        "Large-scale installations",
        "Maintenance services",
        "Performance optimization",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#000000"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 8h6m-6 4h6m-6 4h6"
          />
        </svg>
      ),
      gradient: "from-primary-400 to-primary-600",
    },
    {
      title: "Energy Storage",
      description:
        "Cutting-edge battery storage systems for reliable backup power and grid stabilization.",
      features: [
        "Lithium-ion batteries",
        "Flow batteries",
        "Grid-scale storage",
        "Smart management",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#000000"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
      gradient: "from-success-400 to-success-600",
    },
    {
      title: "Smart Grid Technology",
      description:
        "Intelligent grid management systems for efficient energy distribution and consumption.",
      features: [
        "Smart meters",
        "Load balancing",
        "Demand response",
        "Real-time monitoring",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#000000"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      gradient: "from-primary-500 to-primary-700",
    },
    {
      title: "Microgrid Solutions",
      description:
        "Independent power systems for communities, campuses, and critical facilities.",
      features: [
        "Island mode operation",
        "Renewable integration",
        "Backup power",
        "Community resilience",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#000000"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      gradient: "from-accent-500 to-accent-700",
    },
    {
      title: "Energy Consulting",
      description:
        "Expert guidance on energy strategy, efficiency improvements, and sustainability planning.",
      features: [
        "Energy audits",
        "Feasibility studies",
        "Regulatory compliance",
        "Cost optimization",
      ],
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="#000000"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      gradient: "from-primary-400 to-accent-500",
    },
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-cream-50 to-white overflow-hidden">
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
            <span className="text-slate-900">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
            Comprehensive Energy{" "}
            <span className="text-gradient">Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From renewable energy systems to smart grid technology, we provide
            end-to-end solutions tailored to your specific energy needs and
            sustainability goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              
              <div
                className={`relative w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-glow`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-slate-600"
                  >
                    <svg
                      className="w-4 h-4 text-success-500 mr-2 flex-shrink-0"
                      fill="none"
                      stroke="#000000"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                size="sm"
                className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300"
              >
                Learn More
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
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative glass-effect-dark rounded-3xl p-12 md:p-16 text-center overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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
            <h3 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">
              Ready to Transform Your{" "}
              <span className="text-gradient">Energy Future?</span>
            </h3>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
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
                    stroke="#000000" 
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
