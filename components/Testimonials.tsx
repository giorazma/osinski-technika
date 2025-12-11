import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Co mówią o nas klienci</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Satysfakcja klientów to nasza najlepsza wizytówka. Sprawdź opinie osób, którym już pomogliśmy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-white rounded-xl p-8 shadow-xl relative">
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12 fill-current" />
              
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 relative z-10">"{review.text}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};