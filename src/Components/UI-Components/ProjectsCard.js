import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Maximize2 } from 'lucide-react';
import Modal from './Modal';

const ProjectCard = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card group flex flex-col overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-700
        transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-black/30">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-[#1A1A1A]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Live badge */}
          {project.live && project.live !== '#' && (
            <span className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full
              bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400
              border border-green-200 dark:border-green-800/50">
              Live
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 gap-3">
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 dark:text-white text-base leading-snug mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.explanation.technologies.map((tech) => (
              <span key={tech}
                className="text-xs px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#1A1A1A]
                  text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-[#2A2A2A]">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-1 border-t border-gray-100 dark:border-[#1F1F1F]">
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400
                hover:text-gray-900 dark:hover:text-white transition-colors">
              <FiGithub size={14} /> GitHub
            </a>
            {project.live && project.live !== '#' && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400
                  hover:text-gray-900 dark:hover:text-white transition-colors">
                <FiExternalLink size={14} /> Live Demo
              </a>
            )}
            <button
              onClick={() => setOpen(true)}
              className="ml-auto flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400
                hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
            >
              <Maximize2 size={13} /> Details
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)} project={project} />
    </>
  );
};

export default ProjectCard;
