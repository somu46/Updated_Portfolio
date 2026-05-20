import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Camera } from 'lucide-react';
import { ThemeContext } from '../../App';

const navLinks = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Timeline', to: '/profile' },
  { label: 'Photography', to: '/photography', highlight: true },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#080808]/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-[#1F1F1F]/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/home"
            smooth={true}
            duration={500}
            offset={-64}
            className="cursor-pointer"
          >
            <span className="text-lg font-bold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
              Soumyajit
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                activeClass="text-gray-900 dark:text-white bg-gray-100 dark:bg-white/10"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer
                  inline-flex items-center gap-1.5
                  ${link.highlight
                    ? 'text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                  }`}
              >
                {link.highlight && <Camera size={13} />}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hire me button (desktop) */}
            <Link
              to="/contact"
              smooth={true}
              duration={500}
              offset={-64}
              className="hidden lg:inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200 cursor-pointer"
            >
              Contact Me
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="lg:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white
                hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/95 dark:bg-[#0D0D0D]/95 backdrop-blur-xl border-b border-gray-200 dark:border-[#1F1F1F]"
          >
            <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-64}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300
                    hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10
                    transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 mt-2 border-t border-gray-200 dark:border-[#1F1F1F]">
                <Link
                  to="/contact"
                  smooth={true}
                  duration={500}
                  offset={-64}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center px-4 py-3 rounded-lg text-sm font-semibold
                    bg-gray-900 dark:bg-white text-white dark:text-gray-900 cursor-pointer
                    hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200"
                >
                  Contact Me
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
