import { GraduationCap, TestTube2 } from 'lucide-react'


 function Profile() {
  const academicItems = [
    {
      year: "2020-2024",
      subtitle: "Academic Responsibilities",
      title: "B.Tech in Computer Science and Engineering",
      details: [
        "Budge Budge Institute of Technology, Kolkata, West Bengal",
        "Main coursework: Data Structures, Database Management Systems, Operating Systems, Software Engineering."
      ]
    },
    {
      year: "2018-2020",
      title: "Higher Secondary Education",
      subtitle: "Naraindass Bangur Memorial Multipurpose High School",
      details: [
        "Bangur Avenue, Kolkata, West Bengal",
        "Grade: 60%"
      ]
    },
    {
      year: "2013-2018",
      title: " Secondary Education",
      subtitle: "Naraindass Bangur Memorial Multipurpose High School",
      details: [
        "Bangur Avenue, Kolkata, West Bengal",
        "Grade: 55%"
      ]
    }
  ];
  

  const experienceItems = [
    {
      "year": "2024 - Present",
      "company": "RayVerse",
      "title": "Full Stack Developer Intern",
      "details": [
        "Developed and maintained full-stack web applications using React.js, Express.js, and Node.js.",
        "Built and optimized responsive UIs with Tailwind CSS, ensuring seamless user experiences.",
        "Integrated RESTful APIs and implemented authentication for secure user access.",
        "Worked on an OCR-based Information Extractor API using Tesseract.js to process Aadhaar card images.",
        "Developed a car rental web application ('Paradise Car') with booking functionalities.",
        "Deployed applications on cloud platforms like DigitalOcean and Render.",
        "Implemented smooth scrolling navigation and carousel components in React.",
        "Explored WebSocket for real-time communication in Node.js applications."
      ]
    }
    
   
  ]

  return (
    <section id='/profile' className=''>
    <div className="container mx-auto p-4 max-w-full  flex justify-center items-center">
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl  p-3  mr-0">
        {/* Academic Section */}
        <div className=' ' >
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-orange-400" />
            <h2 className="text-xl font-semibold text-orange-400">Academic</h2>
          </div>
          <div className="relative border-l-2 border-orange-200 pl-4">
            {academicItems.map((item, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute -left-[21px] w-4 h-4 bg-orange-400 rounded-full border-4 border-orange-50" />
                <div className="font-medium">{item.year}</div>
                <div className="mt-2">
                  <div className="flex items-center gap-2 text-orange-400">
                    <div className="w-4 h-4" />
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className="font-medium mt-2">{item.subtitle}</div>
                  )}
                  <ul className="mt-2 space-y-1">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className='ml-5 '>
          <div className="flex items-center gap-2 mb-6">
            <TestTube2 className="w-6 h-6 text-orange-400" />
            <h2 className="text-xl font-semibold text-orange-400">Experience</h2>
          </div>
          <div className="relative border-l-2 border-orange-200 pl-4">
            {experienceItems.map((item, index) => (
              <div key={index} className="mb-8 relative">
                <div className="absolute -left-[21px] w-4 h-4 bg-orange-400 rounded-full border-4 border-orange-50" />
                <div className="font-medium">{item.year}</div>
                <div className="mt-2">
                    <div className="w-4 h-4 text-orange-400 font-bold gap-2 m-3">
                      {item.company}
                    </div>
                 
                    <div className="w-4 h-4 text-gray-800 " />
                 <p className='font-bold'>{item.title}</p>   
                  
                  <ul className="mt-2 space-y-1 ">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600">{detail}</li>
                    ))}
                  </ul>
                  {item.location && (
                    <div className="text-gray-600 mt-1">{item.location}</div>
                  )}
                  {item.mentors && (
                    <div className="text-gray-600 mt-1">{item.mentors}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default Profile;