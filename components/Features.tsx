import React from 'react';
import { FEATURES } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Dlaczego warto nam zaufać?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Łączymy wieloletnie doświadczenie z nowoczesnym sprzętem. Nasz priorytet to Twoje bezpieczeństwo i satysfakcja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-accent group"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};