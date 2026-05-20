import { Link } from 'react-scroll';
import { FaLinkedin, FaXTwitter, FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa6';

const socials = [
  { icon: FaGithub, url: 'https://github.com/somu46', label: 'GitHub' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/soumyajit-ray2002/', label: 'LinkedIn' },
  { icon: FaXTwitter, url: 'https://x.com/SoumyajitRay5', label: 'Twitter' },
  { icon: FaInstagram, url: 'https://www.instagram.com/soumyajit_ray/', label: 'Instagram' },
  { icon: FaFacebookF, url: 'https://www.facebook.com/soumyajit.ray.75', label: 'Facebook' },
];

const navLinks = [
  { label: 'Home', to: '/home' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-[#1F1F1F] bg-white dark:bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link to="/home" smooth duration={500} className="cursor-pointer">
              <span className="text-base font-bold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
                Soumyajit Ray
              </span>
            </Link>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              Frontend React Developer · Kolkata, India
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-64}
                className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white
                  transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-lg text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white
                  hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-[#111111] text-center">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {new Date().getFullYear()} Soumyajit Ray. Built with React &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
