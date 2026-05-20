import { useEffect, useRef, Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Users, Camera } from 'lucide-react';

const Globe = lazy(() => import('../Globe/Globe'));

const skills = [
  { name: 'React.js',      percentage: 90, color: 'bg-blue-500' },
  { name: 'JavaScript',    percentage: 85, color: 'bg-yellow-500' },
  { name: 'Tailwind CSS',  percentage: 95, color: 'bg-cyan-500' },
  { name: 'Node.js',       percentage: 75, color: 'bg-emerald-500' },
  { name: 'MongoDB',       percentage: 70, color: 'bg-green-500' },
  { name: 'UI / UX Design',percentage: 80, color: 'bg-purple-500' },
];

const highlights = [
  { icon: Code2,   label: 'Clean Code',       desc: 'Readable, maintainable, well-structured' },
  { icon: Palette, label: 'UI / UX Focus',    desc: 'Beautiful and functional interfaces' },
  { icon: Zap,     label: 'Performance',      desc: 'Fast loads through optimization' },
  { icon: Users,   label: 'Team Player',      desc: 'Collaborative and communicative' },
];

const SkillBar = ({ name, percentage, color, index }) => {
  const barRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && barRef.current) {
          barRef.current.style.width = `${percentage}%`;
        }
      },
      { threshold: 0.3 }
    );
    const el = barRef.current;
    if (el) observer.observe(el.parentElement);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-400 dark:text-gray-500">{percentage}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 dark:bg-[#1A1A1A] rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: '0%', transitionDelay: `${index * 100}ms` }}
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="/about" className="section-padding bg-gray-50 dark:bg-transparent">
      <div className="container-width">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-label">About</p>
          <h2 className="section-heading">
            Developer,{' '}
            <span className="text-gray-400 dark:text-gray-500">Designer</span>
            {' '}&amp;{' '}
            <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">Photographer</span>
          </h2>
        </motion.div>

        {/* Top row: Bio + Globe */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
          {/* Bio + highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Hi, I'm{' '}
              <span className="font-semibold text-gray-900 dark:text-white">Soumyajit Ray</span>,
              a frontend specialist passionate about crafting immersive digital experiences.
              I bridge the gap between design and technology — building interfaces that
              are both beautiful and purposeful.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 leading-relaxed">
              When I'm not coding, I'm out with my camera — chasing{' '}
              <span className="text-amber-500 dark:text-amber-400 font-medium">golden hour</span> across mountains,
              or lying under dark skies waiting for the{' '}
              <span className="text-indigo-400 font-medium">Milky Way</span> to emerge.
              Two crafts, one eye for detail.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map(({ icon: Icon, label, desc }) => {
                const isPhoto = label === 'Through the Lens';
                return (
                  <div key={label} className={`card p-4 space-y-2 ${isPhoto ? 'col-span-2 sm:col-span-1 border-amber-200/60 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-900/10' : ''}`}>
                    <div className={`p-2 w-fit rounded-lg ${isPhoto ? 'bg-amber-100 dark:bg-amber-900/30' : 'bg-indigo-50 dark:bg-indigo-900/20'}`}>
                      <Icon size={15} className={isPhoto ? 'text-amber-600 dark:text-amber-400' : 'text-indigo-600 dark:text-indigo-400'} />
                    </div>
                    <p className="font-semibold text-sm text-gray-900 dark:text-white">{label}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Real-time Earth Globe */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-80 md:h-96 rounded-2xl overflow-hidden"
          >
            <Suspense fallback={
              <div className="w-full h-full bg-gray-100 dark:bg-[#0b0e1c] rounded-2xl flex items-center justify-center">
                <span className="text-sm text-gray-400">Loading…</span>
              </div>
            }>
              <Globe />
            </Suspense>
          </motion.div>
        </div>

        {/* Skills row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-6">Technical Proficiency</p>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
