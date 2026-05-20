import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const academicItems = [
  {
    year: '2020 – 2024',
    institution: 'Budge Budge Institute of Technology, Kolkata',
    title: 'B.Tech in Computer Science and Engineering',
    detail: 'CGPA: 8.4',
  },
  {
    year: '2018 – 2020',
    institution: 'Naraindass Bangur Memorial Multipurpose High School',
    title: 'Higher Secondary Education',
    detail: 'Grade: 60%',
  },
  {
    year: '2013 – 2018',
    institution: 'Naraindass Bangur Memorial Multipurpose High School',
    title: 'Secondary Education',
    detail: 'Grade: 55%',
  },
];

const experienceItems = [
  {
    year: '2024 – Present',
    company: 'RayVerse',
    title: 'Frontend React Developer & UI/UX Designer',
    details: [
      'Built and maintained responsive web applications with React.js and Tailwind CSS.',
      'Designed user interfaces focused on usability and accessibility.',
      'Reduced load times by 30% through code splitting and lazy loading.',
      'Integrated RESTful APIs and third-party services to extend app functionality.',
      'Mentored junior developers and led code reviews to maintain best practices.',
    ],
  },
];

const TimelineItem = ({ year, title, sub, detail, details, isLast }) => (
  <div className="relative pl-6 pb-8 last:pb-0">
    {/* Line */}
    {!isLast && (
      <div className="absolute left-[7px] top-4 bottom-0 w-px bg-gray-200 dark:bg-[#1F1F1F]" />
    )}
    {/* Dot */}
    <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-white dark:ring-[#0D0D0D]" />

    <span className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-1 block">{year}</span>
    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-0.5">{sub}</p>
    <p className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{title}</p>
    {detail && <p className="text-sm text-gray-500 dark:text-gray-400">{detail}</p>}
    {details && (
      <ul className="mt-2 space-y-1">
        {details.map((d, i) => (
          <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600 flex-shrink-0" />
            {d}
          </li>
        ))}
      </ul>
    )}
  </div>
);

const Profile = () => {
  return (
    <section id="/profile" className="section-padding bg-gray-50 dark:bg-[#0D0D0D]">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">Timeline</p>
          <h2 className="section-heading">Education &amp; Experience</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Academic */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
                <GraduationCap size={18} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Academic</h3>
            </div>
            {academicItems.map((item, i) => (
              <TimelineItem
                key={i}
                year={item.year}
                sub={item.institution}
                title={item.title}
                detail={item.detail}
                isLast={i === academicItems.length - 1}
              />
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2.5 mb-8">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900/20">
                <Briefcase size={18} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Experience</h3>
            </div>
            {experienceItems.map((item, i) => (
              <TimelineItem
                key={i}
                year={item.year}
                sub={item.company}
                title={item.title}
                details={item.details}
                isLast={i === experienceItems.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
