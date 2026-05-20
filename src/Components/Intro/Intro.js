import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ArrowRight, MapPin, Camera, Code } from 'lucide-react';
import ProfileImg from '../../Assets/SoumyajitRay.jpg';

const techStack = [
  { icon: 'html', name: 'HTML' },
  { icon: 'css', name: 'CSS' },
  { icon: 'tailwind', name: 'Tailwind' },
  { icon: 'mongodb', name: 'MongoDB' },
  { icon: 'js', name: 'JavaScript' },
  { icon: 'react', name: 'React' },
  { icon: 'nodejs', name: 'Node.js' },
  { icon: 'vscode', name: 'VSCode' },
  { icon: 'postman', name: 'Postman' },
  { icon: 'git', name: 'Git' },
];

const socialLinks = [
  { icon: FaGithub, url: 'https://github.com/somu46', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/soumyajit-ray2002/', label: 'LinkedIn' },
  { icon: FaSquareXTwitter, url: 'https://x.com/SoumyajitRay5', label: 'Twitter' },
  { icon: FaInstagram, url: 'https://www.instagram.com/soumyajit_ray/', label: 'Instagram' },
  { icon: FaFacebook, url: 'https://www.facebook.com/soumyajit.ray.75', label: 'Facebook' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

/* Aperture ring — decorative SVG rendered around the profile photo */
const ApertureRing = () => (
  <svg
    className="absolute inset-0 w-full h-full animate-aperture-spin"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {[0, 60, 120, 180, 240, 300].map((angle) => (
      <line
        key={angle}
        x1="50"
        y1="3"
        x2="50"
        y2="11"
        stroke="url(#apertureGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="46" stroke="url(#apertureGrad)" strokeWidth="0.5" strokeDasharray="3 6" />
    <defs>
      <linearGradient id="apertureGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f59e0b" />
        <stop offset="1" stopColor="#f43f5e" />
      </linearGradient>
    </defs>
  </svg>
);

const Hero = () => {
  return (
    <section id="/home" className="min-h-screen flex flex-col justify-center section-padding ">
      <div className="container-width">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Available badge */}
            

            {/* Heading */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
                Soumyajit
              </span>
            </motion.h1>

            {/* Dual identity subtitle */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 text-xl md:text-2xl font-semibold
                bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
                <Code size={20} className="text-amber-400 flex-shrink-0" />
                Developer
              </span>
              <span className="text-gray-300 dark:text-gray-600 font-light text-2xl select-none">&</span>
              <span className="inline-flex items-center gap-1.5 text-xl md:text-2xl font-semibold
                bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
                <Camera size={20} className="text-amber-400 flex-shrink-0" />
                Photographer
              </span>
            </motion.div>

            <motion.p {...fadeUp(0.35)} className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-gray-400 dark:text-gray-500 mb-6">
              <MapPin size={14} />
              Kolkata, India
            </motion.p>

            <motion.p {...fadeUp(0.4)} className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              I build clean, performant web experiences with React — and when the code compiles,
              I'm out chasing{' '}
              <span className="text-amber-500 dark:text-amber-400 font-medium">golden hour</span> light
              {' '}and{' '}
              <span className="text-indigo-500 dark:text-indigo-400 font-medium">star-filled skies</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
              <Link
                to="/projects"
                smooth={true}
                duration={500}
                offset={-64}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                  bg-gray-900 dark:bg-white text-white dark:text-gray-900
                  hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200 cursor-pointer"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/photography"
                smooth={true}
                duration={500}
                offset={-64}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                  border border-amber-300 dark:border-amber-700/60 text-amber-600 dark:text-amber-400
                  hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-200 cursor-pointer"
              >
                <Camera size={15} /> My Photography
              </Link>
              <Link
                to="/contact"
                smooth={true}
                duration={500}
                offset={-64}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold
                  border border-gray-200 dark:border-[#2A2A2A] text-gray-700 dark:text-gray-300
                  hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div {...fadeUp(0.6)} className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-lg text-gray-400 dark:text-gray-500
                    hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10
                    transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile image with aperture ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Ambient glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-rose-500/30 blur-2xl scale-110" />
              {/* Aperture ring */}
              <div className="absolute -inset-5">
                {/* <ApertureRing /> */}
              </div>
              <img
                src={ProfileImg}
                alt="Soumyajit Ray"
                className="relative w-full h-full rounded-full object-cover
                  ring-2 ring-amber-300/40 dark:ring-amber-700/30"
              />
              {/* Camera metadata badge */}
              {/* <div className="absolute bottom-3 right-0 bg-black/70 backdrop-blur-sm text-white
                text-[10px] px-2 py-1 rounded-full flex items-center gap-1 border border-white/10 font-mono tracking-wider">
                <Camera size={9} />
                f/1.8 · ISO 800
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <p className="section-label text-center md:text-left mb-5">Tech Stack</p>

          <div className="marquee-wrapper overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white dark:from-[#080808] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white dark:from-[#080808] to-transparent pointer-events-none" />

            <div className="animate-marquee flex gap-8 sm:gap-16">
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="group relative flex-shrink-0">
                  {/* <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#111111] border border-gray-200 dark:border-[#1F1F1F]
                    hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-200 hover:-translate-y-1 cursor-default"> */}
                    <img
                      src={`https://skillicons.dev/icons?i=${tech.icon}`}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                  {/* </div> */}
                  <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-white
                    text-white dark:text-gray-900 text-xs px-2.5 py-1 rounded-md opacity-0
                    group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-20">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
