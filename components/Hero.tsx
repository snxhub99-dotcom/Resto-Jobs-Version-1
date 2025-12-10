import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-background">
      {/* Background Gradient Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-surface border border-gold-500/30 text-gold-500 text-sm font-semibold tracking-wide">
              Hospitality Marketing Specialists
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Resto Jobs <span className="text-gold-500">Digital</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              Growth Engine for Hospitality Brands.
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              From copy to automation, everything you need to fill tables, boost orders, and scale your restaurant brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-background bg-gold-500 hover:bg-gold-400 transition-all shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40">
                Book Strategy Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 text-base font-medium rounded-lg text-gray-300 hover:bg-surface hover:text-white transition-all">
                Download Portfolio PDF
                <Download className="ml-2 w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-surface">
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-40 z-10" />
              <img 
                src="https://picsum.photos/800/600?grayscale" 
                alt="Marketing Dashboard" 
                className="w-full h-auto object-cover opacity-90 hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Element Mockup */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-background/90 backdrop-blur p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Weekly Conversions</p>
                        <p className="text-3xl font-bold text-white">+127%</p>
                    </div>
                    <div className="h-10 w-24 flex items-end gap-1">
                        <div className="w-full bg-gold-500/20 h-[40%] rounded-sm"></div>
                        <div className="w-full bg-gold-500/40 h-[60%] rounded-sm"></div>
                        <div className="w-full bg-gold-500/60 h-[30%] rounded-sm"></div>
                        <div className="w-full bg-gold-500 h-[80%] rounded-sm"></div>
                    </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;