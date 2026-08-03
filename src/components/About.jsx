import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { aboutInfo } from '../data/portfolioData';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-accent/10"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              top: `${10 + i * 8}%`,
              left: `${-10 + i * 3}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-display font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 text-center"
          >
            {aboutInfo.description.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed text-center">
                {paragraph}
              </p>
            ))}
            
            <div className="grid sm:grid-cols-2 gap-6 pt-6 justify-items-center">
              {aboutInfo.skills.map((skill, i) => (
                <motion.div 
                  key={skill.label}
                  className="border-l-4 border-accent pl-4 text-center"
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
