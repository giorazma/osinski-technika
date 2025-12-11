import React from 'react';
import { createRoot } from 'react-dom/client';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Services } from './components/Services';
import { EmergencyCTA } from './components/EmergencyCTA';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <EmergencyCTA />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);