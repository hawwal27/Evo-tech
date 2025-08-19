'use client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://www.kevsrobots.com/assets/img/groups/robots.png',
  'https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVpjWnMR4dMTbS2FT4v7OU-ivJSm9a9FrKg&s',
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden">
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImage]}
          alt="background"
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Automate the Future with
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Intelligent Systems
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          From home automation to industrial control systems, we design smart, scalable, and future-proof solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
          <Link
            href="/services/automation"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
          >
            Explore Services
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm text-white/90">
          <div className="text-center">
            <div className="text-3xl font-bold">500+</div>
            <p className="mt-1">Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">50+</div>
            <p className="mt-1">Clients</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">7</div>
            <p className="mt-1">Services</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">24/7</div>
            <p className="mt-1">Support</p>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
