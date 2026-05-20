import { motion } from 'framer-motion';
import { Download, Eye, FileText } from 'lucide-react';
import CV from '../../Assets/SoumyajitRay_Resume.pdf';

const Resume = () => {
  return (
    <section id="/resume" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label">Resume</p>
          <h2 className="section-heading">My Professional Profile</h2>
          <p className="mt-3 text-gray-500 dark:text-gray-500 max-w-xl">
            View my full resume to explore my technical skills, work experience, and educational background.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card p-8 max-w-xl"
        >
          <div className="flex items-start gap-5">
            <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 flex-shrink-0">
              <FileText size={28} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 dark:text-white text-lg leading-snug mb-1">
                Soumyajit Ray — Resume
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
                PDF · Last updated April 2025
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold
                    border border-gray-200 dark:border-[#2A2A2A] text-gray-700 dark:text-gray-300
                    hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
                  aria-label="Preview Resume"
                >
                  <Eye size={15} />
                  Preview
                </a>
                <a
                  href={CV}
                  download="Soumyajit_Ray_Resume.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold
                    bg-gray-900 dark:bg-white text-white dark:text-gray-900
                    hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200"
                  aria-label="Download Resume"
                >
                  <Download size={15} />
                  Download
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
