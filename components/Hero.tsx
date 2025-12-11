import React from 'react';
import { Phone, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/Button';
import { BUSINESS_INFO } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/101/1920/1080" 
          alt="Profesjonalny hydraulik przy pracy" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 bg-accent/90 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-fade-in-up">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            POGOTOWIE 24/7 WROCŁAW
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Szybka pomoc hydrauliczna <br />
            <span className="text-accent">dokładnie wtedy</span>, kiedy jej potrzebujesz.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
            Profesjonalne usługi hydrauliczne i grzewcze. Błyskawiczny dojazd, 
            uczciwe wyceny i gwarancja na wykonane naprawy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              ZADZWOŃ: {BUSINESS_INFO.formattedPhone}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2"
            >
              DARMOWA WYCENA
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl inline-flex border border-white/20">
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-sm font-medium">
              <span className="font-bold text-white text-lg block leading-none">{BUSINESS_INFO.rating}/5.0</span>
              <span className="text-gray-300">na podstawie {BUSINESS_INFO.reviewCount} opinii</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};