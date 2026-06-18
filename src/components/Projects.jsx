import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderOpen } from 'lucide-react';
import { projectsData } from '../data/projectsData';

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-50 dark:bg-slate-800/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects showcasing my skills in full-stack development and DevOps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="card group hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <FolderOpen size={22} />
                </div>
                <div className="flex items-center gap-2">
                  {project.live && (
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      Live
                    </span>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-slate-400 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 italic">Coming soon</span>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors mt-auto"
                >
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
