import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { certifications } from '../data/portfolioData';

const BadgeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="py-24 bg-secondary relative overflow-hidden" ref={ref}>
      {/* Subtle background decoration matching the site's grain/blob style */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block text-accent font-medium mb-4 tracking-wider uppercase text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Credentials
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-display font-black">
            Certifi<span className="text-accent">cations</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${cert.color}`} />

              <div className="p-6">
                {/* Icon + issuer row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} text-white`}
                  >
                    <BadgeIcon />
                  </span>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-primary mb-1 group-hover:text-accent transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm text-gray-500 mb-4">{cert.issuer}</p>

                {/* Credential ID */}
                {cert.credentialId && (
                  <p className="text-xs text-gray-400 mb-4 font-mono">
                    ID: {cert.credentialId}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify link */}
                {cert.verifyUrl && (
                  <motion.a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-light transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    Verify Certificate
                    <ExternalLinkIcon />
                  </motion.a>
                )}
              </div>

              {/* Hover left border highlight */}
              <motion.div
                className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${cert.color}`}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.2 }}
                style={{ originY: 0 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;