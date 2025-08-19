'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';

const WhyUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">



      {/* Main Content */}
      <main className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Info Section */}
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Why Choose <span className="text-blue-600">EvoTech Solutions?</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              At EvoTech Solutions, we blend technical mastery with creativity to deliver impactful digital transformation. 
              From automation to AI, our services are tailored for long-term growth and performance.
            </p>

            {/* Feature List */}
            <div className="space-y-5">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-800">Cutting-edge technology built with modern tools.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-800">Expert team with industry and academic experience.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-800">Tailored systems specific to your business goals.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-800">End-to-end project delivery and lifecycle support.</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <p className="text-gray-800">Reliable support with transparent pricing.</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-base font-semibold hover:bg-blue-700 inline-flex items-center group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-800">500+</p>
                <p className="text-sm text-gray-700">Successful Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-800">50+</p>
                <p className="text-sm text-gray-700">Satisfied Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-800">99%</p>
                <p className="text-sm text-gray-700">Success Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-800">24/7</p>
                <p className="text-sm text-gray-700">Support</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how our technology can help you scale faster, work Evoer, and achieve more.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition">
              Get Free Consultation
            </a>
            <a href="/portfolio" className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition">
              View Our Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} EvoTech Solutions. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default WhyUs;
