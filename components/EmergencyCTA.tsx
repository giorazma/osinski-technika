import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';
import { BUSINESS_INFO } from '../constants';

export const EmergencyCTA: React.FC = () => {
  return (
    <section className="py-16 bg-red-600 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-black opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-red-800/50 rounded-lg px-4 py-2 mb-4 border border-red-400">
              <AlertTriangle className="w-5 h-5 text-yellow-300 animate-pulse" />
              <span className="font-bold text-yellow-300 uppercase tracking-wider text-sm">Awaria Krytyczna?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Pęknięta rura? Wyciek? Brak ogrzewania?</h2>
            <p className="text-xl text-red-100 mb-2">Jesteśmy dostępni właśnie teraz. Dojazd w 15-30 minut.</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="text-red-600 font-extrabold text-xl py-6 px-10 shadow-lg hover:bg-gray-100"
              onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
            >
              <Phone className="w-6 h-6 mr-3 animate-pulse" />
              {BUSINESS_INFO.formattedPhone}
            </Button>
            <span className="text-sm font-medium text-red-200 opacity-90">
              Średni czas reakcji: &lt; 30 minut
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};