import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured approach to ensure consistent delivery and measurable results.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative bg-surface p-8 rounded-xl border border-white/5 lg:bg-transparent lg:border-none lg:p-0"
              >
                {/* Step Number Bubble */}
                <div className="w-24 h-24 rounded-full bg-background border-4 border-surface lg:border-background flex items-center justify-center relative z-10 mb-6 mx-auto lg:mx-0 shadow-xl">
                  <div className="w-20 h-20 rounded-full bg-surface border border-gold-500/20 flex items-center justify-center text-2xl font-bold text-gold-500">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 text-center lg:text-left">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;