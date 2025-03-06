import React, { useEffect, useRef } from 'react';
import Card from "../UI-Components/Card";

const About = () => {
  // Skill data with percentages
  const skills = [
    { name: 'React.js', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 95 },
    { name: 'MongoDB', percentage: 70 },
  ];

  // CircularProgressBar Component
  const CircularProgressBar = ({ skill, percentage }) => {
    const circleRef = useRef(null);

    useEffect(() => {
      // Animate the circle on component mount
      const circle = circleRef.current;
      if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;

        // Set the initial stroke dasharray and dashoffset
        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference;

        // Animate to the target percentage
        setTimeout(() => {
          const offset = circumference - (percentage / 100) * circumference;
          circle.style.strokeDashoffset = offset;
        }, 300); // Delay for staggered effect
      }
    }, [percentage]);

    return (
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background Circle */}
            <circle
              className="text-[#464242] stroke-current"
              strokeWidth="8"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
            />
            {/* Progress Circle */}
            <circle
              ref={circleRef}
              className="text-[#FFD700] stroke-current transition-all duration-1500 ease-out"
              strokeWidth="8"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="transparent"
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            />
          </svg>
          {/* Percentage Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#FFD700] text-lg font-bold">
              {percentage}%
            </span>
          </div>
        </div>
        {/* Skill Name */}
        <span className="text-[#CCCCCC] text-sm mt-2 text-center">{skill}</span>
      </div>
    );
  };

  return (
    <section
      id="/about"
      className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#FFD700] mb-4 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD700]/30 transform translate-y-2"></span>
          </h2>
          <p className="mt-2 text-lg text-[#A0A0A0]">
            Passion meets technology
          </p>
        </div>

        {/* Content Container */}
        <div className="space-y-12">
          {/* Text and Card Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Text Content - Takes 50% width on desktop, full width on mobile */}
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Full-Stack Developer & UI Architect
                <span className="block text-[#FFD700] mt-2">Based in Kolkata</span>
              </h3>
              <p className="text-lg text-[#CCCCCC] leading-relaxed mt-4">
                Hi, I'm <span className="text-[#FFD700] font-semibold">Soumyajit Ray</span>, 
                a frontend specialist with a passion for crafting immersive digital experiences. 
                I bridge the gap between design and technology, creating solutions that are 
                both beautiful and functional.
              </p>
            </div>

            {/* Card Component - Takes 50% width on desktop, full width on mobile */}
            <div className="m-auto p-12">
              <Card  />
            </div>
          </div>

          {/* Circular Progress Bars Section */}
          <div className="bg-[#1A1A1A] p-6 rounded-lg border-l-4 border-[#FFD700] ">
            <p className="text-[#CCCCCC] mb-6 text-lg font-semibold">
              Technical Proficiency :
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <CircularProgressBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </div>

          {/* Additional Text */}
          <p className="text-lg text-[#CCCCCC] leading-relaxed">
            When I'm not coding, you'll find me exploring new animation libraries 
            or optimizing web performance. Let's connect and create something 
            extraordinary!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;