import React from 'react';
import { FaLinkedin , FaXTwitter , FaFacebookF , FaGithub , FaInstagram } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-10 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 text-center sm:text-left">
          {/* About Me */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Soumyajit Ray</h4>
            <p className="text-sm">I am a full-stack web developer and tech enthusiast, passionate about building scalable applications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to='/home' smooth={true} duration={500} spy={true} offset={-100} className="hover:text-yellow-400 transition cursor-pointer">Home</Link></li>
              <li><Link to='/about' smooth={true} duration={500} spy={true} offset={-100} className="hover:text-yellow-400 transition cursor-pointer">About</Link></li>
              <li><Link to='/resume' smooth={true} duration={500} spy={true}  className="hover:text-yellow-400 transition cursor-pointer">Resume</Link></li>
              <li><Link to='/profile' smooth={true} duration={500} spy={true} offset={-30} className="hover:text-yellow-400 transition cursor-pointer">Profile</Link></li>
              <li><Link to='/project' smooth={true} duration={500} spy={true} offset={-100} className="hover:text-yellow-400 transition cursor-pointer">Projects</Link></li>
              <li><Link to='/contact' smooth={true} duration={500} spy={true} offset={-100} className="hover:text-yellow-400 transition cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Follow Me</h4>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href='https://www.facebook.com/soumyajit.ray.75' target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF className="text-gold hover:text-yellow-400 transition duration-300" />
              </a>
              <a href='https://www.instagram.com/soumyajit_ray/' target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="text-gold hover:text-yellow-400 transition duration-300" />
              </a>
              <a href='https://x.com/SoumyajitRay5' target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter className="text-gold hover:text-yellow-400 transition duration-300" />
              </a>
              <a href='https://www.linkedin.com/in/soumyajit-ray2002/' target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-gold hover:text-yellow-400 transition duration-300" />
              </a>
              <a href='https://github.com/somu46' target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="text-gold hover:text-yellow-400 transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm">&copy; 2025 Soumyajit Ray. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
