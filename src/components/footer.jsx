import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../assets/Monograme.png';
import Steam from '../assets/Steam.png';

function Footer() {
  return (
    <section className="w-full bg-[#eeeeee] text-black px-4 md:px-16 lg:px-[200px] py-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <ScrollLink to="header" smooth={true} duration={500}>
            <img src={logo} alt="Logo" className="w-12 cursor-pointer hover:opacity-80 transition-opacity" />
          </ScrollLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-medium">
          <li>
            <ScrollLink to="header" smooth={true} duration={500} className="hover:text-gray-700 cursor-pointer transition-colors">
              ACCUEIL
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="stories" smooth={true} duration={500} className="hover:text-gray-700 cursor-pointer transition-colors">
              HISTOIRES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="vr" smooth={true} duration={500} className="hover:text-gray-700 cursor-pointer transition-colors">
              VR
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" smooth={true} duration={500} className="hover:text-gray-700 cursor-pointer transition-colors">
              SAVOIR PLUS
            </ScrollLink>
          </li>
        </ul>

        {/* Steam Link */}
        <div className="flex justify-center">
          <a
            href="https://store.steampowered.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img src={Steam} alt="Steam" className="w-32" />
          </a>
        </div>
      </div>

      {/* Copyright Text */}
      <p className="text-center text-sm md:text-base text-black">
        © 2025 ANNE BACK
      </p>
    </section>
  );
}

export default Footer;