import React from 'react';
import { Instagram, Linkedin, Youtube, Globe } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-10 h-10" />
              <span className="font-bold text-xl text-white">
                Resto Jobs <span className="text-gold-500">Digital</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Empowering hospitality brands with data-driven digital strategies. We turn engagement into reservations.
            </p>
          </div>

          {/* Contact - Middle */}
          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>support@restrohub.link</li>
              <li>www.restrohub.link</li>
              <li>+91 99808 56523</li>
              <li className="leading-relaxed">Resto Jobs, 132, 2nd Floor, 15th Main Road, 4th Block, Koramangala, Bengaluru - 560034</li>
            </ul>
          </div>

          {/* Socials - Right */}
          <div className="col-span-1 md:text-right">
             <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Connect</h4>
             <div className="flex gap-4 md:justify-end">
                <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-gold-500 hover:bg-white/10 transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-gold-500 hover:bg-white/10 transition-all">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-gold-500 hover:bg-white/10 transition-all">
                  <Youtube size={20} />
                </a>
                <a href="https://www.restrohub.link" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-gold-500 hover:bg-white/10 transition-all">
                  <Globe size={20} />
                </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Resto Jobs Digital. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;