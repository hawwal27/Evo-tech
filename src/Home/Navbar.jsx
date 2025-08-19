'use client';

import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: 'Automation', target: 'automation' },
    { name: 'Robotics', target: 'robotics' },
    { name: 'ML & AI', target: 'ml-ai' },
    { name: 'Coding', target: 'coding' },
    { name: 'Research', target: 'research' },
    { name: 'Installations', target: 'installations' },
    { name: 'Consultancy', target: 'consultancy' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <ScrollLink to="home" smooth duration={500} className="text-2xl font-bold text-blue-600 cursor-pointer">
            EvoTech Solutions
          </ScrollLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-blue-700">
            <ScrollLink to="Navbar" smooth duration={500} className="cursor-pointer hover:text-blue-500">
              Home
            </ScrollLink>
            <ScrollLink to="service" smooth duration={500} className="cursor-pointer hover:text-blue-500">
              About
            </ScrollLink>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center hover:text-blue-500 cursor-pointer">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg border z-10">
                  {services.map(service => (
                    <ScrollLink
                      key={service.name}
                      to={service.target}
                      smooth
                      duration={1000}
                      className="block w-full px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                    >
                      {service.name}
                    </ScrollLink>
                  ))}
                </div>
              )}
            </div>

            <ScrollLink to="contact" smooth duration={500} className="hover:text-blue-500 cursor-pointer">
              Contact
            </ScrollLink>

            <ScrollLink
              to="get-started"
              smooth
              duration={500}
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Get Started
            </ScrollLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-white border-t border-gray-200 shadow-sm">
            <ScrollLink to="home" smooth duration={500} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth duration={500} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
              About
            </ScrollLink>
            <div className="px-4 py-2">
              <span className="block text-gray-700 font-medium">Services</span>
              {services.map(service => (
                <ScrollLink
                  key={service.name}
                  to={service.target}
                  smooth
                  duration={500}
                  className="block pl-4 py-1 text-sm hover:text-blue-600 cursor-pointer"
                >
                  {service.name}
                </ScrollLink>
              ))}
            </div>
            <ScrollLink
              to="contact"
              smooth
              duration={500}
              className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Contact
            </ScrollLink>
            <ScrollLink
              to="get-started"
              smooth
              duration={500}
              className="block w-full mt-2 mb-4 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Get Started
            </ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
