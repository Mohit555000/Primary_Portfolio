import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutInfo } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-5xl md:text-6xl font-display font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-accent-light/20 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-accent/30 rounded-full"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {aboutInfo.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="grid grid-cols-2 gap-6 pt-6">
              {aboutInfo.skills.map((skill, i) => (
                <motion.div 
                  key={skill.label}
                  className="border-l-4 border-accent pl-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <p className="text-sm text-gray-500">{skill.label}</p>
                  <p className="font-medium">{skill.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
