import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Specialized Digital Growth for <span className="text-gold-500">Hospitality</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Resto Jobs isn't just a marketing agency; we are your partner in hospitality growth. We serve restaurants, cafés, QSRs, and cloud kitchens, leveraging PAN India experience to solve the unique challenges of the food business.
            </p>
            <p className="text-gray-400">
              We understand the difference between a Friday night rush and a Monday lull, and we build digital strategies that fill those gaps, ensuring consistent revenue and brand loyalty.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border border-white/10 p-6 rounded-xl flex flex-col items-center justify-center text-center hover:border-gold-500/50 transition-colors"
              >
                <div className="p-3 bg-gold-500/10 rounded-full mb-3 text-gold-500">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;