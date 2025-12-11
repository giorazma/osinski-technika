import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { Plus, Minus } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold uppercase tracking-wider text-sm">Baza wiedzy</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">Najczęściej zadawane pytania</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQ_DATA.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-accent' : 'text-gray-800'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-accent flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 border-t border-gray-50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};