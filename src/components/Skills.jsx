import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import { personalInfo } from '../data/personalInfo';

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          Technologies and tools I work with across the full development lifecycle
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {skillsData.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="card"
          >
            <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary rounded-full" />
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="card">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-3">
            Currently Building Expertise In
          </h3>
          <ul className="space-y-2">
            {personalInfo.currentlyLearning.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <span className="text-primary mt-0.5">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-text-light dark:text-text-dark mb-3">
            Education & Languages
          </h3>
          <div className="mb-4">
            <p className="font-medium text-text-light dark:text-text-dark">
              {personalInfo.education.degree}
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {personalInfo.education.institution} — {personalInfo.education.year}
            </p>
          </div>
          <div className="space-y-1">
            {personalInfo.languages.map((lang) => (
              <p key={lang.name} className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-medium">{lang.name}:</span> {lang.level}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
