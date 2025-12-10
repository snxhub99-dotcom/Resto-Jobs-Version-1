import React, { useState } from 'react';
import { Send, Clock, Phone, Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    brand: '',
    city: '',
    phone: '',
    email: '',
    budget: '',
    callTime: '',
    services: [] as string[]
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to fill your tables?
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Book a free strategy call to discuss your growth potential. We'll analyze your current setup and propose a custom roadmap.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface border border-white/10 rounded-lg text-gold-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400">support@restrohub.link</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface border border-white/10 rounded-lg text-gold-500">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Website</h4>
                  <p className="text-gray-400">www.restrohub.link</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface border border-white/10 rounded-lg text-gold-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">WhatsApp / Call</h4>
                  <p className="text-gray-400">+91 99808 56523</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-surface border border-white/10 rounded-lg text-gold-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">HQ</h4>
                  <p className="text-gray-400 max-w-xs">Resto Jobs, 132, 2nd Floor, 15th Main Road, 4th Block, Koramangala, Bengaluru - 560034</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface p-8 rounded-2xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Clock size={20} className="text-gold-500" /> Book Strategy Call
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name="role" 
                  placeholder="Your Role (e.g. Owner)" 
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="brand" 
                  placeholder="Brand / Restaurant Name" 
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  onChange={handleInputChange}
                  required
                />
                <input 
                  type="text" 
                  name="city" 
                  placeholder="City" 
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="WhatsApp Number" 
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  onChange={handleInputChange}
                  required
                />
                 <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  onChange={handleInputChange}
                  required
                />
              </div>

              <select 
                name="budget"
                className="w-full bg-background border border-white/10 rounded-lg p-3 text-gray-400 focus:outline-none focus:border-gold-500 transition-colors"
                onChange={handleInputChange}
                required
              >
                <option value="">Select Monthly Budget Range</option>
                <option value="1k-3k">$1,000 - $3,000</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k+">$5,000+</option>
              </select>

               <input 
                  type="text" 
                  name="callTime" 
                  placeholder="Preferred Call Time" 
                  className="w-full bg-background border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                  onChange={handleInputChange}
                />

              <div className="pt-4 pb-2">
                <label className="text-sm text-gray-400 block mb-3">Services Interested In:</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Social Media', 'Paid Ads', 'SEO', 'Automation'].map(service => (
                    <label key={service} className="flex items-center space-x-2 text-sm text-gray-300 cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="form-checkbox h-4 w-4 text-gold-500 rounded border-gray-600 bg-background focus:ring-0 focus:ring-offset-0"
                        checked={formData.services.includes(service)}
                        onChange={() => handleCheckboxChange(service)}
                      />
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full bg-gold-500 text-background font-bold py-4 rounded-lg hover:bg-gold-400 transition-colors flex items-center justify-center gap-2">
                Submit Request <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;