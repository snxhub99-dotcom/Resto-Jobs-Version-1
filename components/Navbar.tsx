import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             {/* Logo */}
            <Logo className="w-12 h-12" />
            <span className="font-bold text-xl tracking-tight text-white">
              Resto Jobs <span className="text-gold-500">Digital</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-gold-500 transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-gold-500 text-background hover:bg-gold-400 px-4 py-2 rounded-md text-sm font-bold transition-all transform hover:scale-105"
              >
                Book Call
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
             <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gold-500 text-background hover:bg-gold-400 px-3 py-2 rounded-md text-base font-bold mt-4"
              >
                Book Strategy Call
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;