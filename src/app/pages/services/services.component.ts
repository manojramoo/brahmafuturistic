import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="services">
      <div class="container">
        <p class="eyebrow">Offerings</p>
        <h2>Every interaction is a ritual in motion.</h2>
        <p class="section-lead">
          Crafted for founders, creatives, seekers, and families aligning to higher purpose through the wisdom of the stars.
        </p>
        <div class="service-grid">
          <article class="service-card" *ngFor="let service of services">
            <div class="icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p class="subtitle">{{ service.subtitle }}</p>
            <p>{{ service.description }}</p>
          </article>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
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
}
