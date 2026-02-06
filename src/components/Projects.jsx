import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);
  
  return (
    <section id="projects" className="py-32 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent-light/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
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
            Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6">
            Featured <span className="text-accent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative"
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid md:grid-cols-12 gap-8 items-center">
                {/* Project Image - Alternating sides */}
                <motion.div 
                  className={`md:col-span-7 relative ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 group-hover:opacity-80 transition-opacity duration-300`}></div>
                    
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                       linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }}></div>
                    
                    {/* Content overlay */}
                    <div className="relative aspect-video flex items-center justify-center p-12">
                      <div className="text-center text-white">
                        <motion.div
                          className="text-6xl font-display font-black mb-4"
                          animate={hoveredProject === project.id ? { scale: 1.1 } : { scale: 1 }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Hover effect border */}
                    <motion.div
                      className="absolute inset-0 border-4 border-white/20 rounded-2xl"
                      initial={{ opacity: 0 }}
                      animate={hoveredProject === project.id ? { opacity: 1 } : { opacity: 0 }}
                    ></motion.div>
                  </div>
                </motion.div>
                
                {/* Project Info */}
                <div className={`md:col-span-5 ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                  >
                    {/* Project number */}
                    <div className="flex items-center gap-4">
                      <span className="text-7xl font-display font-black text-gray-100">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-display font-bold leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, index) => (
                        <motion.span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm font-medium border border-gray-200"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: i * 0.15 + 0.4 + index * 0.05 }}
                          whileHover={{ scale: 1.05, backgroundColor: '#ff6b35', color: '#fff', borderColor: '#ff6b35' }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-accent transition-all font-medium shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </motion.a>
                      
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all font-medium"
                          whileHover={{ scale: 1.05, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Live Demo</span>
                          <svg className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                          </svg>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Divider line */}
              {i < projects.length - 1 && (
                <motion.div
                  className="mt-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.5 }}
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
