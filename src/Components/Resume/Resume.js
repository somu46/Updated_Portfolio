import React from 'react';
import { FaFilePdf } from "react-icons/fa";
import CV from '../../Assets/Soumyajit_Ray.pdf';

const Resume = () => {
  return (
    <section 
      id='/resume' 
      className="relative py-20 px-4 sm:px-6 lg:px-8 "
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Explore my professional journey and technical expertise
          </p>
        </div>

        {/* Resume Card */}
        <div className="flex justify-center">
          <div className="group relative bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-full max-w-2xl">
          <p className=" text-center text-gray-300 text-sm mb-6">
          Click icon to preview or button to download
        </p>
            <div className="text-center">
              {/* PDF Icon with New Tab Link */}
              <div className="mb-6 flex justify-center">
                <a 
                  href={CV} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition-transform"
                  aria-label="Preview Resume"
                >
                  <div className="p-4 bg-amber-100 dark:bg-neutral-600 rounded-full group-hover:rotate-12 transition-transform duration-300">
                    <FaFilePdf className="text-6xl text-amber-500 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                  </div>
                </a>
              </div>

              {/* Download Button */}
              <a
                href={CV}
                download="Soumyajit_Ray_Resume.pdf"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 transition-colors duration-300 shadow-lg hover:shadow-amber-500/30 dark:hover:shadow-amber-400/20"
                aria-label="Download Resume"
              >
                <FaFilePdf className="mr-2 h-5 w-5" />
                Download Resume
              </a>

              {/* Additional Info */}
              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                PDF Format | Last Updated: July 2024
              </p>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 rounded-2xl border-2 border-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Preview Text */}
        
      </div>
    </section>
  );
};

export default Resume;