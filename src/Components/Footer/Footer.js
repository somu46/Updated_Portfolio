import React from 'react';
import { FaLinkedin, FaXTwitter, FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-scroll';
import logo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 py-12 w-full border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 justify-items-center text-center">
          {/* About Section */}
          <div className="space-y-4 max-w-[250px]">
          <img src={logo} alt='SR' className="h-25 w-24 mx-auto"/>
            <h4 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
              Soumyajit Ray
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">
              Frontend React developer crafting scalable solutions with modern web technologies. 
              Passionate about creating intuitive user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Navigation</h4>
            <ul className="space-y-3">
              {['/home', '/about', '/resume', '/profile', '/projects', '/contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-70} // Adjust based on your header height
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-300 cursor-pointer text-sm flex items-center justify-center group"
                    activeClass="text-amber-400" // Add active class styling
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity" />
                    {link.charAt(1).toUpperCase() + link.slice(2)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Connect</h4>
            <div className="flex space-x-4 justify-center">
              {[
                { icon: FaFacebookF, url: 'https://www.facebook.com/soumyajit.ray.75' },
                { icon: FaInstagram, url: 'https://www.instagram.com/soumyajit_ray/' },
                { icon: FaXTwitter, url: 'https://x.com/SoumyajitRay5' },
                { icon: FaLinkedin, url: 'https://www.linkedin.com/in/soumyajit-ray2002/' },
                { icon: FaGithub, url: 'https://github.com/somu46' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-all duration-300 group"
                  aria-label={social.icon.name}
                >
                  <social.icon className="text-xl text-slate-400 group-hover:text-amber-400 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-slate-200">Reach Me</h4>
            <div className="text-sm text-slate-400 space-y-2">
              <p>Kolkata, India</p>
              <a 
                href="mailto:soumyajitray2002@gmail.com" 
                className="block hover:text-amber-400 transition-colors duration-300"
                aria-label="Send email"
              >
                soumyajitray2002@gmail.com
              </a>
              <a 
                href="tel:+919123813528" 
                className="block hover:text-amber-400 transition-colors duration-300"
                aria-label="Call phone number"
              >
                +91 9123813528
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Soumyajit Ray. All rights reserved.
            <span className="block sm:inline mt-2 sm:mt-0">
              Built with Passion & ❤️ <br></br> 
            </span>
            <span>
            developed with React & Tailwind CSS
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;