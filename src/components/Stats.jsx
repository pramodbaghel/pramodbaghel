import { motion } from 'framer-motion';
import { statsData } from '../data/personalInfo';
import { useCountUp } from '../hooks/useCountUp';

function StatItem({ value, suffix, label, delay }) {
  const { count, ref } = useCountUp(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </div>
      <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium">
        {label}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-white dark:bg-slate-800/50 border-y border-border dark:border-slate-700">
      <div className="section-container py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
