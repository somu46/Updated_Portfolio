import { GraduationCap, TestTube2 } from "lucide-react";

function TimelineItem({ item }) {
  return (
    <div className="mb-8 relative">
      <div className="absolute -left-[24px] w-4 h-4 bg-orange-400 rounded-full border-4 border-orange-50" />
      <div className="font-medium ">{item.year}</div>
      <div className="mt-2">
        {item.company && <div className="text-lg font-semibold text-orange-500">{item.company}</div>}
        <div className="font-bold ">{item.title}</div>
        {item.Institute && <div className=" mt-1 text-lg font-semibold text-orange-500">{item.Institute}</div>}
        <ul className="mt-2 space-y-1 ">
          {item.details.map((detail, idx) => (
            <li key={idx}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Profile() {
  const academicItems = [
    {
      year: "2020-2024",
      title: "B.Tech in Computer Science and Engineering",
      Institute: "Budge Budge Institute of Technology, Kolkata",
      details: [
        "Main coursework: Data Structures, DBMS, OS, Software Engineering."
      ]
    },
    {
      year: "2018-2020",
      title: "Higher Secondary Education",
      Institute: "Naraindass Bangur Memorial Multipurpose High School",
      details: ["Grade: 60%"]
    },
    {
      year: "2013-2018",
      title: "Secondary Education",
      Institute: "Naraindass Bangur Memorial Multipurpose High School",
      details: ["Grade: 55%"]
    }
  ];

  const experienceItems = [
    {
      year: "2024 - Present",
      company: "RayVerse",
      title: "Full Stack Developer Intern",
      details: [
        "Developed and maintained full-stack web applications using React.js, Express.js, and Node.js.",
        "Built and optimized responsive UIs with Tailwind CSS.",
        "Integrated RESTful APIs and implemented authentication for secure access.",
        "Worked on an OCR-based Information Extractor API using Tesseract.js.",
        "Developed a car rental web application ('Paradise Car') with booking functionalities.",
        "Deployed applications on cloud platforms like DigitalOcean and Render.",
        "Implemented smooth scrolling navigation and carousel components in React.",
        "Explored WebSocket for real-time communication in Node.js applications."
      ]
    }
  ];

  return (
    <section id="/profile" className="py-10 ">
      <div className="container mx-auto p-6 max-w-5xl">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-6">Profile</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Academic Section */}
          <div className=" p-6 rounded-lg ">
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
          <div className="  p-6 rounded-lg ">
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
