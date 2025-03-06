import { GraduationCap, TestTube2 } from "lucide-react";

// TimelineItem Component
function TimelineItem({ item }) {
  return (
    <div className="mb-8 relative group">
      {/* Timeline Dot */}
      <div className="absolute -left-[24px] w-4 h-4 bg-orange-400 rounded-full border-4 border-orange-50 transition-transform group-hover:scale-125" />

      {/* Year */}
      <div className="font-medium text-gray-500 dark:text-gray-400">{item.year}</div>

      {/* Content */}
      <div className="mt-2">
        {/* Company or Institute */}
        {item.company && (
          <div className="text-lg font-semibold text-orange-500">{item.company}</div>
        )}
        {item.Institute && (
          <div className="text-lg font-semibold text-orange-500">{item.Institute}</div>
        )}

        {/* Title */}
        <div className="font-bold text-gray-800 dark:text-white">{item.title}</div>

        {/* Details */}
        <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-300">
          {item.details.map((detail, idx) => (
            <li key={idx} className="flex items-start">
              <span className="mr-2">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Profile Component
function Profile() {
  const academicItems = [
    {
      year: "2020-2024",
      title: "B.Tech in Computer Science and Engineering",
      Institute: "Budge Budge Institute of Technology, Kolkata",
      details: ["Overall CGPA: 8.4"],
    },
    {
      year: "2018-2020",
      title: "Higher Secondary Education",
      Institute: "Naraindass Bangur Memorial Multipurpose High School",
      details: ["Grade: 60%"],
    },
    {
      year: "2013-2018",
      title: "Secondary Education",
      Institute: "Naraindass Bangur Memorial Multipurpose High School",
      details: ["Grade: 55%"],
    },
  ];

  const experienceItems = [
    {
      year: "2024 - Present",
      company: "RayVerse",
      title: "FrontEnd React Developer & UI/UX Designer",
      details: [
        "Developed and maintained responsive web applications using React.js and Tailwind CSS.",
        "Designed and implemented user interfaces with a focus on usability and accessibility.",
        "Collaborated with cross-functional teams to deliver high-quality products on time.",
        "Optimized web performance, reducing load times by 30% through code splitting and lazy loading.",
        "Integrated RESTful APIs and third-party libraries to enhance application functionality.",
        "Conducted user research and usability testing to improve UI/UX designs.",
        "Mentored junior developers and conducted code reviews to ensure best practices.",
      ],
    },
  ];

  return (
    <section id="/profile" className="py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12">
          Profile
        </h1>

        {/* Grid Layout for Academic and Experience Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Academic Section */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold text-orange-500">Academic</h2>
            </div>
            <div className="relative border-l-2 border-orange-200 pl-4">
              {academicItems.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className=" p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <TestTube2 className="w-6 h-6 text-orange-500" />
              <h2 className="text-xl font-semibold text-orange-500">Experience</h2>
            </div>
            <div className="relative border-l-2 border-orange-200 pl-4">
              {experienceItems.map((item, index) => (
                <TimelineItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;