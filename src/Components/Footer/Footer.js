import React from 'react';
import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10 text-center sm:text-left">
          {/* About Me */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Soumyajit Ray</h4>
            <p className="text-sm">I am a full-stack web developer and tech enthusiast, passionate about building scalable applications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-amber-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-amber-400 transition">About</a></li>
              <li><a href="/services" className="hover:text-amber-400 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-amber-400 transition">Contact</a></li>
              <li><a href="/blog" className="hover:text-amber-400 transition">Blog</a></li>
            </ul>
          </div>


          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Follow Me</h4>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="mailto:soumyajitray2002@gmail.com" className="p-2 bg-gray-800 rounded-full hover:bg-amber-400 transition">
                <FaEnvelope className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="p-2 bg-gray-800 rounded-full hover:bg-amber-400 transition">
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="p-2 bg-gray-800 rounded-full hover:bg-amber-400 transition">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="p-2 bg-gray-800 rounded-full hover:bg-amber-400 transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/somu46" className="p-2 bg-gray-800 rounded-full hover:bg-amber-400 transition">
                <FaGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2025 Soumyajit Ray. All Rights Reserved.</p>
          <a href="#top" className="p-3 bg-gray-800 rounded-full hover:bg-amber-400 transition mt-4 sm:mt-0">
            <FaArrowUp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
