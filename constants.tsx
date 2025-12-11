import { 
  Wrench, 
  Clock, 
  ShieldCheck, 
  ThumbsUp, 
  Droplets, 
  Flame, 
  Pipette, 
  Activity, 
  Search,
  Hammer
} from 'lucide-react';
import { ServiceItem, TestimonialItem, FAQItem, FeatureItem } from './types';

export const BUSINESS_INFO = {
  name: "Osinski-technika grzewcza usługi hydrauliczne",
  phone: "513 730 375",
  formattedPhone: "513 730 375",
  address: "Oławska 9, 50-123 Wrocław",
  email: "kontakt@osinski-technika.pl",
  hours: "Czynne 24h / 7 dni w tygodniu",
  rating: 4.4,
  reviewCount: 24
};

export const NAV_LINKS = [
  { name: "Start", href: "#home" },
  { name: "Usługi", href: "#services" },
  { name: "O nas", href: "#about" },
  { name: "Opinie", href: "#reviews" },
  { name: "Kontakt", href: "#contact" },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Pogotowie 24/7",
    description: "Jesteśmy dostępni o każdej porze dnia i nocy. Awaria nie wybiera godziny, my też nie.",
    icon: Clock
  },
  {
    title: "Dojazd do Klienta",
    description: "Pełny serwis mobilny na terenie całego Wrocławia i okolic. Posiadamy w pełni wyposażone auta.",
    icon: Wrench
  },
  {
    title: "Uczciwe Ceny",
    description: "Przejrzysty cennik i brak ukrytych kosztów. Wycena przed rozpoczęciem prac.",
    icon: ShieldCheck
  },
  {
    title: "Wysoka Jakość",
    description: "Średnia ocena 4.4/5 potwierdzona przez 24 zweryfikowane opinie klientów.",
    icon: ThumbsUp
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: "Pogotowie Hydrauliczne",
    description: "Natychmiastowa reakcja na pęknięte rury i wycieki.",
    fullDescription: "Nasze pogotowie hydrauliczne działa 24/7. Usuwamy nagłe awarie, pęknięcia rur, i zatrzymujemy wycieki wody, aby zminimalizować szkody w Twoim domu.",
    icon: Droplets
  },
  {
    id: 2,
    title: "Instalacje Grzewcze",
    description: "Naprawa i montaż systemów C.O. oraz grzejników.",
    fullDescription: "Kompleksowa obsługa systemów grzewczych. Od odpowietrzania grzejników, przez wymianę zaworów, aż po instalację nowoczesnych kotłów i pieców.",
    icon: Flame
  },
  {
    id: 3,
    title: "Udrażnianie Rur",
    description: "Mechaniczne i ciśnieniowe udrażnianie kanalizacji.",
    fullDescription: "Skuteczne usuwanie zatorów w toaletach, zlewach i pionach kanalizacyjnych przy użyciu profesjonalnego sprzętu elektromechanicznego.",
    icon: Pipette
  },
  {
    id: 4,
    title: "Inspekcja Systemów",
    description: "Diagnostyka kamerą termowizyjną i inspekcyjną.",
    fullDescription: "Lokalizacja wycieków i ocena stanu instalacji bez konieczności kucia ścian. Precyzyjna diagnostyka problemu.",
    icon: Search
  },
  {
    id: 5,
    title: "Montaż Armatury",
    description: "Instalacja kranów, toalet, pryszniców i wanien.",
    fullDescription: "Profesjonalny biały montaż. Wymiana baterii, montaż kabin prysznicowych, podłączanie pralek i zmywarek.",
    icon: Hammer
  },
  {
    id: 6,
    title: "Konserwacja",
    description: "Przeglądy okresowe i zapobieganie awariom.",
    fullDescription: "Regularne przeglądy instalacji wodno-kanalizacyjnych i grzewczych, które pozwalają uniknąć kosztownych awarii w przyszłości.",
    icon: Activity
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    name: "Anna K.",
    rating: 5,
    text: "Bardzo dobry fachowiec i naprawdę miły człowiek. Przyjechał w środku nocy do pękniętej rury. Gorąco polecam!",
    date: "2 tygodnie temu"
  },
  {
    id: 2,
    name: "Piotr W.",
    rating: 5,
    text: "Wszystko zrobione szybko, sprawnie i bardzo dokładnie. Cena adekwatna do jakości usługi. Pełen profesjonalizm.",
    date: "1 miesiąc temu"
  },
  {
    id: 3,
    name: "Marek Z.",
    rating: 4,
    text: "Świetna komunikacja i pomoc na każdym etapie. Pan hydraulik wytłumaczył co się stało i jak uniknąć tego w przyszłości.",
    date: "2 miesiące temu"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Ile kosztuje wezwanie w nocy?",
    answer: "Stawki za wizyty nocne (22:00 - 6:00) oraz w święta są nieco wyższe niż standardowe. Dokładną wycenę podajemy telefonicznie przed przyjazdem, więc nie ma ukrytych kosztów."
  },
  {
    question: "Jak szybko możecie przyjechać?",
    answer: "W przypadku awarii krytycznych na terenie Wrocławia staramy się dotrzeć w ciągu 30-60 minut od zgłoszenia, w zależności od natężenia ruchu."
  },
  {
    question: "Jakie obszary obsługujecie?",
    answer: "Obsługujemy cały Wrocław (Stare Miasto, Krzyki, Fabryczna, Psie Pole, Śródmieście) oraz bezpośrednie okolice miasta."
  },
  {
    question: "Czy dajecie gwarancję na wykonaną pracę?",
    answer: "Tak, na wszystkie nasze usługi oraz dostarczone przez nas części udzielamy gwarancji. Zależy nam na Twoim spokoju i bezpieczeństwie."
  },
  {
    question: "Jak umówić się na wizytę?",
    answer: "W sprawach pilnych prosimy o kontakt telefoniczny pod numerem 513 730 375. W sprawach mniej pilnych można skorzystać z formularza kontaktowego na stronie."
  }
];