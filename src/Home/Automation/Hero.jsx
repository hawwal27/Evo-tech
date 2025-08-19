'use client';

import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-100 py-24 px-6 overflow-hidden">
      {/* Background circles for visual effect */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full opacity-20 blur-3xl animate-pulse z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 mb-6 leading-tight">
            Empowering the Future with <br className="hidden md:block" />
            <span className="text-purple-600">Smart Automation</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            We build smart home and industrial systems that boost efficiency, control, and innovation. Let’s transform your space with cutting-edge automation today.
          </p>
          <a
            href="/services/automation"
            className="inline-block bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Get Started
          </a>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center">
          <img
            src="/images/hero-automation.png"
            alt="Automation Hero Illustration"
            className="w-full max-w-xl rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
