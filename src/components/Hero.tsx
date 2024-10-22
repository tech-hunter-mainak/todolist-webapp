import React from 'react';
import backImg from "../assets/to-do-list-laptop-grey-background-150052787.webp"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-400 to-blue-500 text-white h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url(`+ backImg +`)` }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-3xl">
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide font-sans mb-6 drop-shadow-lg">
          Organize Your Day, Simplify Your Life
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl mb-8 font-light tracking-wide">
          Keep track of tasks, deadlines, and goals with ease. Your personal productivity companion.
        </p>

        {/* Additional Description */}
        <p className="text-md md:text-lg mb-10 font-light text-gray-100">
          Achieve more with less effort. Plan, prioritize, and accomplish tasks seamlessly.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/login" className="bg-white text-green-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 ease-in-out">
            Get Started
          </Link>
          <a href="#features" className="bg-transparent border-2 border-white text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition duration-300 ease-in-out">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
