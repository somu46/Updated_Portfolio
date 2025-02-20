import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const EducationCertifications = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      {/* Introduction */}
      <h1 className="text-4xl text-center font-bold mb-4">Education</h1>
      <p className=" mb-6">
        My education is in the field of Computer Science. I have a Bachelor's degree in Computer Science from the University of California, Riverside. 
        I have also taken courses in web development and software engineering.
      </p>

      {/* Education Section */}
      <div className="space-y-4">
        <div className="bg-neutral-700 p-6 rounded-lg shadow-md flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">Master of Computer Science</h3>
            <a href="#" className="text-blue-600 font-medium">Stanford University</a>
            <p className="text-gray-600 text-sm">
              Specialized in Human-Computer Interaction and Web Technologies
            </p>
          </div>
          <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">2018 - 2020</span>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
            <a href="#" className="text-blue-600 font-medium">MIT</a>
            <p className="text-gray-600 text-sm">
              Major in Software Engineering, Minor in Design
            </p>
          </div>
          <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">2014 - 2018</span>
        </div>
      </div>

      {/* Certifications Section */}
      <h2 className="text-2xl font-bold mt-10 mb-4">Certifications</h2>

      <div className=" p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "AWS Certified Developer",
            "Google UX Design",
            "Meta Frontend Development",
            "MongoDB Certification",
          ].map((cert, index) => (
            <div key={index} className="flex items-center bg-neutral-700 p-3 rounded-lg shadow-sm">
              <FaCheckCircle className="text-blue-500 mr-2" />
              <p className="">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
