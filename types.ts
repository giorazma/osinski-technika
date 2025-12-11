import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  icon: LucideIcon;
}

export interface TestimonialItem {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}