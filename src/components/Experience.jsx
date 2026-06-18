import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import { personalInfo } from '../data/personalInfo';

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          {personalInfo.experienceYears} years of building scalable applications —{' '}
          {personalInfo.experiencePeriod}
        </p>
      </motion.div>

      <div className="space-y-8">
        {experienceData.map((company, companyIndex) => (
          <motion.article
            key={company.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: companyIndex * 0.1 }}
            className="card"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                  {company.company}
                </h3>
                <p className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mt-1">
                  <MapPin size={14} />
                  {company.location}
                </p>
              </div>
            </div>

            <div className="space-y-6 ml-0 sm:ml-16">
              {company.roles.map((role, roleIndex) => (
                <div
                  key={role.title}
                  className={`relative ${
                    roleIndex !== company.roles.length - 1
                      ? 'pb-6 border-b border-border dark:border-slate-700'
                      : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                    <h4 className="text-lg font-semibold text-primary">{role.title}</h4>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700/50 px-3 py-1 rounded-full w-fit">
                      {role.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {role.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed"
                      >
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
