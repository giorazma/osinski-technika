import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../constants';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <a 
            href="#home" 
            className="flex flex-col z-50"
            onClick={(e) => scrollToSection(e, '#home')}
          >
            <span className="text-xl md:text-2xl font-bold text-primary tracking-tight">
              OSINSKI<span className="text-accent">-TECHNIKA</span>
            </span>
            <span className="text-xs text-gray-500 font-medium hidden sm:block">
              USŁUGI HYDRAULICZNE WROCŁAW
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-700 hover:text-accent font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] font-bold text-white bg-accent px-2 py-0.5 rounded-full animate-pulse">
                OTWARTE 24/7
              </span>
            </div>
            <Button 
              variant="primary" 
              onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-2 group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>{BUSINESS_INFO.formattedPhone}</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-primary/95 backdrop-blur-md z-40 transform transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }} // Approximate header height
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-2xl font-bold text-white hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-full max-w-xs pt-8 border-t border-white/20">
             <Button 
              variant="accent" 
              fullWidth 
              size="lg"
              onClick={() => window.location.href = `tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS_INFO.formattedPhone}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};