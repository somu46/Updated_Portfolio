import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import GetInTouch from '../UI-Components/getInTouch';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'soumyajitray2002@gmail.com',
    href: 'mailto:soumyajitray2002@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9123813528',
    href: 'tel:+919123813528',
  },
];

const Contact = () => {
  return (
    <section id="/contact" className="section-padding bg-gray-50 dark:bg-transparent">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-heading">Get in Touch</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-500 max-w-xl">
            I'm always open to new opportunities and interesting conversations.
            Feel free to reach out — I'll get back to you promptly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href}
                className="flex items-center gap-4 p-4 card hover:border-indigo-300 dark:hover:border-indigo-700
                  transition-all duration-200 group">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 flex-shrink-0">
                  <Icon size={18} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/somu46"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold
                  card hover:border-indigo-300 dark:hover:border-indigo-700
                  text-gray-700 dark:text-gray-300 transition-all duration-200"
              >
                <FaGithub size={16} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/soumyajit-ray2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold
                  card hover:border-indigo-300 dark:hover:border-indigo-700
                  text-gray-700 dark:text-gray-300 transition-all duration-200"
              >
                <FaLinkedin size={16} /> LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <GetInTouch />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
