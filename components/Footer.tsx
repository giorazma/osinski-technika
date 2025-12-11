import React from 'react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';
import { Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6 tracking-tight">
              OSINSKI<span className="text-accent">-TECHNIKA</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Profesjonalne usługi hydrauliczne we Wrocławiu. Jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu, aby zapewnić bezpieczeństwo Twojego domu.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              {/* Add more social icons if needed */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Szybkie linki</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  Polityka Prywatności
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">Kontakt</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-gray-300 hover:text-white transition-colors font-semibold">
                  {BUSINESS_INFO.formattedPhone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-gray-300">{BUSINESS_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="h-64 rounded-xl overflow-hidden shadow-lg bg-gray-800 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.088663884849!2d17.036669!3d51.107386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9e4c30c8069%3A0x7d27e2a9d8d6f5a!2sO%C5%82awska%209%2C%2050-123%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1625581234567!5m2!1spl!2spl" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy"
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
              title="Mapa dojazdu"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Osinski-technika. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};