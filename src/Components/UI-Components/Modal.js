import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FiGithub, FiExternalLink } from 'lucide-react';
import { FiGithub as Github, FiExternalLink as ExternalLink } from 'react-icons/fi';
import { CheckCircle2 } from 'lucide-react';

const Modal = ({ isOpen, onClose, project }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-white dark:bg-[#111111] rounded-2xl
              border border-gray-200 dark:border-[#1F1F1F] shadow-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="aspect-video bg-gray-100 dark:bg-[#1A1A1A] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 text-white
                hover:bg-black/60 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            {/* Content */}
            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.explanation.description1}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-2.5">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.explanation.technologies.map((tech) => (
                    <span key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-gray-100 dark:bg-[#1A1A1A]
                        text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2A2A2A] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-2.5">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {project.explanation.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle2 size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action links */}
              <div className="flex gap-3 pt-1 border-t border-gray-100 dark:border-[#1F1F1F]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                    border border-gray-200 dark:border-[#2A2A2A] text-gray-700 dark:text-gray-300
                    hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
                >
                  <Github size={15} /> GitHub
                </a>
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold
                      bg-gray-900 dark:bg-white text-white dark:text-gray-900
                      hover:bg-gray-700 dark:hover:bg-gray-100 transition-all duration-200"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
