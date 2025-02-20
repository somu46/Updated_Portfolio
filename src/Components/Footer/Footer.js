import React from 'react';
import { FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-neutral-800  py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-lg text-center font-semibold mb-4">Soumyajit Ray</h4>
            <p className="text-sm text-gray-300 text-center">
              I am a full-stack web developer and a tech enthusiast.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Quick Links</h4>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="hover:text-amber-400">Home</a></li>
              <li><a href="#" className="hover:text-amber-400">About</a></li>
              <li><a href="#" className="hover:text-amber-400">Services</a></li>
              <li><a href="#" className="hover:text-amber-400">Contact</a></li>
              <li><a href="#" className="hover:text-amber-400">Blog</a></li>
            </ul>
          </div>

          {/* Quick Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center">Quick Features</h4>
            <ul className="space-y-2 text-center">
              <li><a href="#" className="hover:text-amber-400">Feature 1</a></li>
              <li><a href="#" className="hover:text-amber-400">Feature 2</a></li>
              <li><a href="#" className="hover:text-amber-400">Feature 3</a></li>
              <li><a href="#" className="hover:text-amber-400">Feature 4</a></li>
              <li><a href="#" className="hover:text-amber-400">Feature 5</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-lg font-semibold mb-4 text-center">Contact Us</h4>
            <p className="text-sm text-gray-300 flex items-center gap-2 justify-center">
              
              
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 mx-auto justify-center">
              <a href="mailto:soumyajitray2002@gmail.com" className="hover:text-amber-400 text-[1rem]">
              <FaEnvelope className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" className=" hover:text-amber-400 transition" aria-label="Facebook">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className=" hover:text-amber-400 transition" aria-label="Twitter">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" className=" hover:text-amber-400 transition" aria-label="Instagram">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="https://github.com/somu46" className=" hover:text-amber-400 transition" aria-label="YouTube">
                <FaGithub className="h-6 w-6" />
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold mb-4 text-center">Subscribe to Our Newsletter</h4>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2025 Soumyajit Ray. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
