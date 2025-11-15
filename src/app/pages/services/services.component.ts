import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-section hero-panel soft-hero">
      <div class="container narrow tiny-text">
        <p class="eyebrow accent">Holistic Vedic Guidance</p>
        <h1>Services Crafted for Conscious Futures</h1>
        <p class="lead">
          Every consultation with Dr. YesJ is a personalised engagement. The focus is on decoding your chart, translating the
          insight into clear guidance, and supporting you as you implement each step with confidence and devotion.
        </p>
        <div class="pill-group">
          <span class="pill">Prediction</span>
          <span class="pill">Prevention</span>
          <span class="pill">Prosperity</span>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container narrow tiny-text">
        <div class="glass-panel">
          <p>
            Approaching an astrologer requires divine grace and the readiness of one’s karma. While anyone may seek guidance, true
            benefit arises when the seeker follows the counsel offered by Dr. YesJ with faith and discipline. If these words
            resonate, consider it a blessing — the doorway to transformation is already open.
          </p>
          <p>
            Every session delivers methodology and action. Insight alone is never enough; it must be met with personal
            responsibility. Dr. YesJ illuminates the way, yet it is ultimately the individual who decides, acts, and brings the
            vision to life.
          </p>
        </div>

        <div class="service-grid">
          <article class="service-card" *ngFor="let service of coreServices">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </div>

        <section class="service-pillar">
          <h2>The Process Behind Every Session</h2>
          <div class="pillar-grid">
            <article class="pillar-card" *ngFor="let pillar of pillars">
              <h3>{{ pillar.title }}</h3>
              <p>{{ pillar.description }}</p>
            </article>
          </div>
        </section>

        <section class="service-highlight">
          <div class="highlight-card">
            <h2>Prashanna Predictions</h2>
            <p>
              Dedicated question-based astrology provides immediate clarity for pressing situations. Each variation is selected to
              suit the nature of your query and the cosmic climate of the moment.
            </p>
            <ul class="chip-list">
              <li *ngFor="let item of prashanna">{{ item }}</li>
            </ul>
          </div>
          <div class="highlight-card">
            <h2>Continuous Guidance</h2>
            <p>
              Beyond chart interpretation, seekers receive disciplined practices, remedial measures, and lifestyle adjustments that
              anchor the insight in daily life. The commitment is to build resilience, grace, and sustained progress.
            </p>
            <p class="service-note">
              All predictions are designed to be practical, precise, and relevant for life-long application. Following the
              instructions meticulously allows you to foresee challenges, overcome obstacles, and nurture a balanced and
              meaningful life.
            </p>
          </div>
        </section>

        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>
  `
})
export class ServicesComponent {
  protected readonly coreServices = [
    {
      title: 'Astro-Chart / Janma Kundali / Janana Jadagam',
      description:
        'The birth chart is the foundation of prediction. With precise birth details — date, time, and location — Dr. YesJ deciphers your karmic blueprint and provides actionable guidance aligned to your questions.'
    },
    {
      title: 'Astro-Matching / Kundali Matching / Jadagam Porutham',
      description:
        'For couples planning marriage, compatibility is examined through both charts. The consultation highlights strengths, cautions, and the disciplines needed to harmonise the journey together.'
    },
    {
      title: 'Education & Career Guidance',
      description:
        'By analysing the Janma Kundali, potential paths in education and career unfold. Recommendations focus on aligning effort with innate strengths and favourable planetary periods.'
    },
    {
      title: 'Business, Job & Financial Strategy',
      description:
        'Understand the timings and methods for expansion, investment, and career transitions. Insight into planetary support helps you make bold yet calculated decisions for long-term prosperity.'
    },
    {
      title: 'Family & Relationship Harmonisation',
      description:
        'Navigate family dynamics and personal bonds with clarity. Guidance focuses on strengthening relationships while addressing karmic patterns that trigger friction.'
    },
    {
      title: 'Legal & Court Case Navigation',
      description:
        'Evaluate the probabilities and timing around legal matters. Strategic advice prepares you for proceedings and identifies windows for resolution.'
    }
  ];

  protected readonly pillars = [
    {
      title: 'Decode',
      description: 'Precise data gathering and chart analysis reveal the forces at play and the outcomes seeded within your karmic pattern.'
    },
    {
      title: 'Design',
      description: 'Remedial steps, rituals, and lifestyle shifts are curated specifically for your intention and cosmic climate.'
    },
    {
      title: 'Discipline',
      description: 'Ongoing practice and conscious action anchor the guidance, ensuring transformation is sustained and measurable.'
    }
  ];

  protected readonly prashanna = [
    'Nava Prashanna',
    'Color Prashanna',
    'Suya Prashanna',
    'Choli Prashanna',
    'Deva Prashanna',
    'Saha Deva Prashanna',
    'Numeri Prashanna'
  ];
}
