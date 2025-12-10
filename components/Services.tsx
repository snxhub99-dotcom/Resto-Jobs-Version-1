import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to the fast-paced nature of the food and beverage industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-surface border border-white/5 hover:border-gold-500/30 p-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/5"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-surface border border-white/10 rounded-lg group-hover:bg-gold-500 group-hover:text-background transition-colors text-gold-500">
                  <service.icon size={32} />
                </div>
                <button className="text-sm text-gray-500 group-hover:text-gold-500 flex items-center font-medium transition-colors">
                  View Case Study <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;