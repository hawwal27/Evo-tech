import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCardSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Our Core Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group hover:scale-[1.02] transform">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                💻
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Web Development</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Building fast, modern, and responsive websites tailored to your business needs.
            </p>
            <ul className="space-y-2 mb-8 text-left">
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Responsive Layout
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                SEO Optimized
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                React & Vue Support
              </li>
            </ul>
            <Link
              to="/Automation"
              className="inline-flex items-center justify-center w-full border border-blue-500 text-blue-500 font-medium py-2 rounded-lg transition-all duration-300 group-hover:bg-blue-50"
            >
              Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group hover:scale-[1.02] transform">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-tr from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                📱
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Mobile App Development</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Native and cross-platform mobile apps with performance and user experience in mind.
            </p>
            <ul className="space-y-2 mb-8 text-left">
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Android & iOS Apps
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                React Native Support
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Push Notifications
              </li>
            </ul>
            <Link
              to="#"
              className="inline-flex items-center justify-center w-full border border-green-500 text-green-500 font-medium py-2 rounded-lg transition-all duration-300 group-hover:bg-green-50"
            >
              Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 group hover:scale-[1.02] transform">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-tr from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                🤖
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI & Automation</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Intelligent systems for automation, analytics, and decision-making.
            </p>
            <ul className="space-y-2 mb-8 text-left">
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Chatbots & Assistants
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Machine Learning Models
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Workflow Automation
              </li>
            </ul>
            <Link
              to="#"
              className="inline-flex items-center justify-center w-full border border-yellow-500 text-yellow-600 font-medium py-2 rounded-lg transition-all duration-300 group-hover:bg-yellow-50"
            >
              Learn More <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceCardSection;
