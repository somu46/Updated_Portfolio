import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from '../UI-Components/ProjectsCard';
import projectData from './ProjectsData';

const INITIAL_COUNT = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projectData : projectData.slice(0, INITIAL_COUNT);

  return (
    <section id="/projects" className="section-padding">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="section-label">Work</p>
            <h2 className="section-heading">Selected Projects</h2>
          </div>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {projectData.length} projects total
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {projectData.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold
                border border-gray-200 dark:border-[#2A2A2A] text-gray-700 dark:text-gray-300
                hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
            >
              {showAll ? (
                <><ChevronUp size={16} /> Show Less</>
              ) : (
                <><ChevronDown size={16} /> Show {projectData.length - INITIAL_COUNT} More</>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
