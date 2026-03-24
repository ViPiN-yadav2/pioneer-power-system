"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const Services: React.FC = () => {
  // Extra slide = duplicate of first: animate UPS → Battery, then jump to snap 0 invisibly (same content).
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: "trimSnaps",
  });

  const cardPatterns = [
    {
      overlay: "bg-amber-100/90",
      clipPath: "polygon(35% 0, 100% 0, 100% 100%, 0% 100%)",
      position: "top-0 right-0 bottom-0 w-3/4",
      iconColor: "text-amber-600",
    },
    {
      overlay: "bg-blue-100/90",
      clipPath: "polygon(0% 0, 65% 0, 100% 100%, 0% 100%)",
      position: "top-0 left-0 bottom-0 w-3/4",
      iconColor: "text-blue-600",
    },
    {
      overlay: "bg-emerald-100/90",
      clipPath: "polygon(100% 0, 100% 100%, 0 0)",
      position: "top-0 right-0 bottom-0 left-0",
      iconColor: "text-emerald-600",
    },
    {
      overlay: "bg-violet-100/90",
      clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)",
      position: "top-0 right-0 bottom-0 left-0",
      iconColor: "text-violet-600",
    },
  ];

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
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 7h16a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20 10v4"
          />
        </svg>
      ),
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
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
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
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
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
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    }
  ];

  const mobileCarouselSlides = [...services, services[0]];
  const cloneSlideIndex = mobileCarouselSlides.length - 1;

  const [carouselDotIndex, setCarouselDotIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const syncDots = () => {
      const snap = emblaApi.selectedScrollSnap();
      setCarouselDotIndex(snap >= cloneSlideIndex ? 0 : snap);
    };

    emblaApi.on("select", syncDots);
    emblaApi.on("settle", syncDots);
    syncDots();

    return () => {
      emblaApi.off("select", syncDots);
      emblaApi.off("settle", syncDots);
    };
  }, [emblaApi, cloneSlideIndex]);

  useEffect(() => {
    if (!emblaApi) return;

    let intervalId: ReturnType<typeof setInterval>;

    const jumpIfOnClone = () => {
      if (emblaApi.selectedScrollSnap() === cloneSlideIndex) {
        emblaApi.scrollTo(0, true);
      }
    };

    const advance = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0, true);
      }
    };

    const startAutoplay = () => {
      intervalId = setInterval(advance, 3000);
    };

    const stopAutoplay = () => {
      clearInterval(intervalId);
    };

    startAutoplay();

    emblaApi.on("settle", jumpIfOnClone);
    emblaApi.on("pointerDown", stopAutoplay);
    emblaApi.on("pointerUp", startAutoplay);

    return () => {
      stopAutoplay();
      emblaApi.off("settle", jumpIfOnClone);
      emblaApi.off("pointerDown", stopAutoplay);
      emblaApi.off("pointerUp", startAutoplay);
    };
  }, [emblaApi, cloneSlideIndex]);

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
        <div className="text-center mb-12 animate-fade-in-up px-5 sm:px-6 md:px-0">
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
            {/* Mobile Carousel - Embla */}
            <div className="md:hidden px-5 sm:px-6">
              <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                <div className="flex" style={{ touchAction: "pan-y pinch-zoom" }}>
                  {mobileCarouselSlides.map((service, index) => {
                    const pattern = cardPatterns[index % cardPatterns.length];
                    return (
                    <div
                      key={index === cloneSlideIndex ? "mobile-loop-clone" : `mobile-${index}`}
                      className="flex-[0_0_100%] min-w-0 relative overflow-hidden rounded-lg border border-slate-200 bg-warm-50/50 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                    >
                      {/* Pattern overlay - unique per card */}
                      <div
                        className={`absolute ${pattern.position} ${pattern.overlay}`}
                        style={{ clipPath: pattern.clipPath }}
                      />
                      <div className="relative z-10 p-6">
                        <div className={`w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center ${pattern.iconColor} mb-4`}>
                          {service.icon}
                        </div>
                        <h3 className="text-lg font-heading font-bold text-slate-900 mb-2 tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-4 leading-relaxed font-medium">
                          {service.description}
                        </p>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-xs text-slate-600 font-medium"
                            >
                              <svg
                                className="w-4 h-4 text-slate-400 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );})}
                </div>
              </div>
              <div
                className="flex justify-center items-center gap-2.5 pt-5 pb-1"
                role="tablist"
                aria-label="Service slides"
              >
                {services.map((_, i) => (
                  <button
                    key={`carousel-dot-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={carouselDotIndex === i}
                    aria-label={`Show service ${i + 1} of ${services.length}`}
                    className={`rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 ${
                      carouselDotIndex === i
                        ? "w-7 h-2 bg-primary-600 shadow-sm"
                        : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    onClick={() => emblaApi?.scrollTo(i)}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid - 2x2 Layout for 4 Cards */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.map((service, index) => {
                const pattern = cardPatterns[index];
                return (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg border border-slate-200 bg-warm-50/50 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                >
                  {/* Pattern overlay - unique per card */}
                  <div
                    className={`absolute ${pattern.position} ${pattern.overlay}`}
                    style={{ clipPath: pattern.clipPath }}
                  />
                  <div className="relative z-10 p-8">
                    <div className={`w-14 h-14 rounded-lg bg-white/80 flex items-center justify-center ${pattern.iconColor} mb-6`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-slate-600 font-medium"
                        >
                          <svg
                            className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
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
                  </div>
                </div>
              );})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
