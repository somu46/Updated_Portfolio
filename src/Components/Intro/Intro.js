import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ArrowRight, MapPin } from 'lucide-react';
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

const Hero = () => {
  return (
    <section id="/home" className="min-h-screen flex flex-col justify-center section-padding pt-24">
      <div className="container-width">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">

          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            {/* Available badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
              bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold
              border border-green-200 dark:border-green-800/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 tracking-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
                Soumyajit
              </span>
            </motion.h1>

            <motion.h2 {...fadeUp(0.3)} className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-4">
              Frontend React Developer
            </motion.h2>

            <motion.p {...fadeUp(0.35)} className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-gray-400 dark:text-gray-500 mb-6">
              <MapPin size={14} />
              Kolkata, India
            </motion.p>

            <motion.p {...fadeUp(0.4)} className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              I build clean, performant web experiences with React and modern tooling.
              Passionate about bridging design and code.
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

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-rose-500/30 blur-2xl scale-110" />
              <img
                src={ProfileImg}
                alt="Soumyajit Ray"
                className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover
                  ring-4 ring-gray-200 dark:ring-[#1F1F1F]"
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 md:mt-28"
        >
          <p className="section-label text-center md:text-left mb-5">Tech Stack</p>

          {/* Marquee track */}
          <div className="marquee-wrapper overflow-hidden relative">
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-white dark:from-[#080808] to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-white dark:from-[#080808] to-transparent pointer-events-none" />

            <div className="animate-marquee flex gap-4 w-max">
              {/* Render twice for seamless loop */}
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="group relative flex-shrink-0">
                  <div className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#111111] border border-gray-200 dark:border-[#1F1F1F]
                    hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 hover:-translate-y-1 cursor-default">
                    <img
                      src={`https://skillicons.dev/icons?i=${tech.icon}`}
                      alt={tech.name}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                    />
                  </div>
                  {/* Tooltip */}
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
