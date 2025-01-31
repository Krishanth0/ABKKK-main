import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../assets/Monograme.png';
import Steam from '../assets/Steam.png';

function Footer() {
    return (
      <section className="w-full bg-[#eeeeee] text-black px-4 md:px-16 lg:px-[200px] py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <ul className="flex flex-col md:flex-row text-sm md:text-lg font-normal items-center gap-8 md:gap-16">
            <li>
              <ScrollLink to="header" smooth={true} duration={500}>
                <img src={logo} alt="Logo" className="w-12 cursor-pointer" />
              </ScrollLink>
            </li>
          </ul>
          
          <div className="flex justify-center ">
            <a href="https://store.steampowered.com/" className="cursor-pointer">
              <img src={Steam} alt="Steam" className="w-32" />
            </a>
          </div>
        </div>
  
        <ul className="flex justify-center gap-8 text-sm md:text-lg font-normal">
          <li><ScrollLink to="#" smooth={true} duration={500} class="animated-link" className="hover:underline cursor-pointer">ACCUEIL</ScrollLink></li>
          <li><ScrollLink to="#" smooth={true} duration={500} class="animated-link" className="hover:underline cursor-pointer">HISTOIRES</ScrollLink></li>
          <li><ScrollLink to="#" smooth={true} duration={500} class="animated-link" className="hover:underline cursor-pointer">VR</ScrollLink></li>
          <li><ScrollLink to="#" smooth={true} duration={500} class="animated-link" className="hover:underline cursor-pointer">SAVOIR PLUS</ScrollLink></li>
        </ul>
  
        <p className='text-center text-sm md:text-base'>
          ©2025 ANNE BACK
        </p>
      </section>
    );
  }
  

export default Footer;