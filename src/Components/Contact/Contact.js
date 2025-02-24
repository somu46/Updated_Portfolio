import React from "react";
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import GetInTouch from "../UI-Components/getInTouch";
const ContactSection = () => {
  return (
    <section id="/contact" className="max-w-5xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center p-4 rounded-lg">
              <div className=" p-2 rounded-lg shadow-md">
                <FaEnvelope className="text-blue-500 w-6 h-6" />
              </div>
              <div className="ml-4">
                <a href="mailto:soumyajitray2002@gmail.com">
                <h4 className="font-medium">Email</h4>
                <p className=" text-sm">soumyajitray2002@gmail.com</p>
                </a>
              </div>
            </div>

            <div className="flex items-center  p-4 rounded-lg">
              <div className=" p-2 rounded-lg shadow-md">
                <FaPhoneAlt className="text-blue-500 w-6 h-6" />
              </div>
              <div className="ml-4">
                <a href="tel:+919123813528">
                <h4 className="font-medium">Phone</h4>
                <p className=" text-sm">+91 9123813528</p>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6 ">
            <a
              href="https://github.com"
              className="flex items-center justify-center  p-4 w-full rounded-lg  hover:text-blue-500 transition border-2 border-lime-400"
            >
              <FaGithub className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="flex items-center justify-center p-4 w-full rounded-lg  hover:text-blue-500 transition border-2 border-lime-400"
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="">
          <GetInTouch/>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
