import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Send, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Imię jest wymagane';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany';
    } else if (!/^[0-9\s-+]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Nieprawidłowy format numeru';
    }
    if (!formData.message.trim()) newErrors.message = 'Wiadomość jest wymagana';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <span className="text-accent font-bold uppercase tracking-wider text-sm">Kontakt</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Darmowa wycena w 2 minuty
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Wypełnij formularz, a oddzwonimy z konkretną propozycją i wyceną. 
              W pilnych sprawach zalecamy kontakt telefoniczny.
            </p>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="font-bold text-xl text-primary mb-4">Dane kontaktowe</h3>
              <div className="space-y-4">
                <div>
                  <span className="block text-sm text-gray-500">Telefon alarmowy 24/7</span>
                  <a href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`} className="text-2xl font-bold text-accent hover:text-orange-700 transition-colors">
                    {BUSINESS_INFO.formattedPhone}
                  </a>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Adres</span>
                  <p className="font-medium text-gray-800">{BUSINESS_INFO.address}</p>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Godziny otwarcia</span>
                  <p className="font-medium text-gray-800">{BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dziękujemy!</h3>
                <p className="text-gray-600">Twoje zgłoszenie zostało przyjęte. Oddzwonimy najszybciej jak to możliwe.</p>
                <Button 
                  variant="outline" 
                  className="mt-8 !text-primary !border-primary hover:!bg-primary hover:!text-white"
                  onClick={() => setIsSubmitted(false)}
                >
                  Wyślij nową wiadomość
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'} outline-none transition-all`}
                      placeholder="Jan Kowalski"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'} outline-none transition-all`}
                      placeholder="np. 500 123 456"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Rodzaj usługi</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Wybierz temat...</option>
                    <option value="awaria">Awaria hydrauliczna (Pilne)</option>
                    <option value="ogrzewanie">Naprawa ogrzewania</option>
                    <option value="udrażnianie">Udrażnianie rur</option>
                    <option value="montaż">Montaż / Instalacja</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent'} outline-none transition-all`}
                    placeholder="Opisz krótko problem..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  fullWidth 
                  size="lg" 
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Wyślij zapytanie <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};