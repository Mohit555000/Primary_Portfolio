import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { education } from '../data/portfolioData';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="education" className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          className="text-5xl md:text-6xl font-display font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        
        <div className="space-y-8">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              className="relative pl-8 pb-8 border-l-2 border-accent last:pb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent rounded-full -translate-x-[9px]"></div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex flex-wrap justify-between items-start mb-3">
                  <h3 className="text-2xl font-display font-bold">{item.degree}</h3>
                  <span className="text-accent font-medium">{item.year}</span>
                </div>
                <p className="text-lg text-gray-700 mb-2">{item.institution}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
