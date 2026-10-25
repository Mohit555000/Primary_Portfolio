import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { testimonials } from '../data/portfolioData';

const getInitials = (name) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');

const ChevronIcon = ({ direction }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    {direction === 'prev' ? (
      <polyline points="15 18 9 12 15 6" />
    ) : (
      <polyline points="9 18 15 12 9 6" />
    )}
  </svg>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const total = testimonials.length;
  const testimonial = testimonials[activeIndex];

  const goTo = (nextIndex, dir) => {
    setDirection(dir);
    setActiveIndex((nextIndex + total) % total);
  };

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir * 48 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir * -48 }),
  };

  return (
    <section id="testimonials" className="py-24 bg-secondary relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-light/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
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
            Recommendations
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-display font-black">
            What People <span className="text-accent">Say</span>
          </h2>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
            <div className={`h-1.5 w-full bg-gradient-to-r ${testimonial.color}`} />

            <div className="relative min-h-[280px] px-8 sm:px-12 py-10">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.blockquote
                  key={testimonial.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.28 }}
                  className="m-0"
                >
                  <p className="font-sans text-base sm:text-lg font-normal text-gray-700 leading-7 sm:leading-8 mb-8">
                    “{testimonial.quote}”
                  </p>

                  <footer className="flex items-center gap-4">
                    <span
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} text-white font-display font-bold`}
                      aria-hidden="true"
                    >
                      {getInitials(testimonial.name)}
                    </span>
                    <div>
                      <cite className="not-italic block text-base font-display font-bold text-primary">
                        {testimonial.name}
                      </cite>
                      <p className="text-sm text-gray-500">
                        {testimonial.role} · {testimonial.company}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {testimonial.relationship}
                      </p>
                    </div>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => goTo(activeIndex - 1, -1)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-primary hover:text-accent hover:border-accent hover:shadow-md transition-all"
            >
              <ChevronIcon direction="prev" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => goTo(index, index > activeIndex ? 1 : -1)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? 'w-6 bg-accent' : 'w-2 bg-gray-300 hover:bg-accent-light'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => goTo(activeIndex + 1, 1)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 bg-white text-primary hover:text-accent hover:border-accent hover:shadow-md transition-all"
            >
              <ChevronIcon direction="next" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
