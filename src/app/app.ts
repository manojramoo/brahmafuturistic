import { Component, signal } from '@angular/core';
import { NgFor } from '@angular/common';

interface NavLink {
  label: string;
  href: string;
}

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface Highlight {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface ContactMethod {
  label: string;
  detail: string;
  href: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly navLinks: NavLink[] = [
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Founder', href: '#founder' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  protected readonly services: Service[] = [
    {
      title: 'Personal Kundali Guidance',
      subtitle: 'Precision birth-chart analysis',
      description:
        'Decoding your natal chart with classical Jyotish principles to illuminate life purpose, karma patterns, and planetary support.',
      icon: '🪐'
    },
    {
      title: 'Strategic Muhurta Planning',
      subtitle: 'Auspicious timing intelligence',
      description:
        'Identify cosmically aligned windows for business launches, travel, sacred ceremonies, and milestone events to amplify success.',
      icon: '🕉️'
    },
    {
      title: 'Vastu & Space Harmonization',
      subtitle: 'Energetics of home & workspace',
      description:
        'Re-map spatial flows using traditional Vastu Shastra so that every room resonates with clarity, prosperity, and grounded peace.',
      icon: '🏡'
    },
    {
      title: 'Soul-Path Coaching',
      subtitle: 'Integrative astro mentorship',
      description:
        'Mentored journeys that bridge astrology, meditation, and mantra sadhana to activate your highest potential with compassionate guidance.',
      icon: '🌟'
    }
  ];

  protected readonly highlights: Highlight[] = [
    {
      title: 'Vedic lineage, modern clarity',
      description:
        'Rooted in Parashari and Nadi techniques, translated for present-day seekers, founders, and visionaries ready to evolve.'
    },
    {
      title: 'Holistic remedies that resonate',
      description:
        'Gemstone prescriptions, mantra sadhana, ritual offerings, and conscious habit design crafted uniquely for your chart.'
    },
    {
      title: 'Sacred technology for the future',
      description:
        'We marry spiritual intelligence with mindful futurism, supporting intuitive leadership and soulful innovation.'
    }
  ];

  protected readonly process: ProcessStep[] = [
    {
      title: '01. Celestial Mapping',
      description:
        'Share your birth details and intentions. We align your goals with planetary timelines, clarifying themes and opportunities.'
    },
    {
      title: '02. Guided Immersion',
      description:
        'Enter a curated consultation experience blending Vedic astrology, meditation, and energy attunement practices.'
    },
    {
      title: '03. Integration Blueprint',
      description:
        'Receive a personalised action map with remedies, rituals, and mindful prompts to anchor transformation in daily life.'
    }
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote:
        'The reading was profoundly accurate and actionable. I received timelines for launches and spiritual practices that completely shifted my business momentum.',
      name: 'Nitya Sharma',
      role: 'Founder, Conscious Labs'
    },
    {
      quote:
        'Months later, the remedial plan still grounds me. Astral Vedang bridges ancient wisdom with the language of today—so rare and so needed.',
      name: 'Rahul Iyer',
      role: 'Leadership Coach'
    },
    {
      quote:
        'Every session is a transmission. Clear, compassionate, and deeply aligned with my dharma path.',
      name: 'Meera Desai',
      role: 'Artist & Facilitator'
    }
  ];

  protected readonly faqs: FaqItem[] = [
    {
      question: 'What information do I need to share for a consultation?',
      answer:
        'Your birth date, accurate birth time, and location allow us to cast a precise natal chart. If you are unsure about timing we can discuss rectification options.'
    },
    {
      question: 'Do you offer follow-up support after the session?',
      answer:
        'Yes. Every consultation includes a 30-day integration window with email support and optional accountability sessions to anchor new practices.'
    },
    {
      question: 'Can I book for my team or a special event?',
      answer:
        'Absolutely. We host immersive astro-strategy workshops, group ceremonies, and festival alignments tailored to organisations or private gatherings.'
    }
  ];

  protected readonly contactMethods: ContactMethod[] = [
    {
      label: 'Email',
      detail: 'hello@astralvedang.com',
      href: 'mailto:hello@astralvedang.com'
    },
    {
      label: 'Phone / WhatsApp',
      detail: '+91 98201 12345',
      href: 'tel:+919820112345'
    },
    {
      label: 'Instagram',
      detail: '@astralvedang',
      href: 'https://instagram.com/astralvedang'
    }
  ];

  protected readonly isMenuOpen = signal(false);
  protected readonly year = new Date().getFullYear();

  protected toggleMenu(): void {
    this.isMenuOpen.update((current) => !current);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
