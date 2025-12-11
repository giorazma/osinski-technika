import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Services: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-wider text-sm">Nasza Oferta</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
              Kompleksowe usługi hydrauliczne
            </h2>
          </div>
          <div className="hidden md:block w-32 h-1 bg-accent rounded-full mb-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent">
                  <service.icon size={24} />
                </div>
                <span className="text-xs font-bold text-gray-400">0{service.id}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <button 
                onClick={() => toggleExpand(service.id)}
                className="text-primary font-semibold text-sm flex items-center gap-1 hover:text-accent transition-colors"
              >
                {expandedId === service.id ? 'Zwiń opis' : 'Dowiedz się więcej'}
                {expandedId === service.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  expandedId === service.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-sm text-gray-500 border-t border-gray-200 pt-4">
                    {service.fullDescription}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};