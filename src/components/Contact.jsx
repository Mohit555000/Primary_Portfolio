import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { socialLinks } from '../data/portfolioData';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-accent to-accent-light text-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-5xl md:text-6xl font-display font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        
        <motion.p 
          className="text-xl mb-12 max-w-2xl mx-auto opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have a project in mind or want to collaborate? Reach out through any of these platforms.
        </motion.p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl hover:bg-white/20 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d={social.icon} />
              </svg>
              <span className="font-medium">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
