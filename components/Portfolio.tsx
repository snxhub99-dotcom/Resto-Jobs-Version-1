import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { TrendingUp, CheckCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-surface relative overflow-hidden">
        {/* Subtle decorative ring */}
      <div className="absolute -left-20 top-1/4 w-64 h-64 border-4 border-gold-500/5 rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Success Stories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real results for real brands. See how we've helped our partners grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl overflow-hidden border border-white/10 flex flex-col h-full hover:border-gold-500/30 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10 bg-gold-500 text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {project.category}
                </div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                
                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-1">Challenge</h4>
                    <p className="text-sm text-gray-300">{project.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-1">Solution</h4>
                    <p className="text-sm text-gray-300">{project.solution}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/10 p-2 rounded-full text-green-400 mt-1">
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <h4 className="text-xs text-green-400 uppercase tracking-wide font-bold">Impact</h4>
                      <p className="text-sm text-white font-medium">{project.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;