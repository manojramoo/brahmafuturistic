import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-section hero-panel gradient-hero">
      <div class="container narrow tiny-text">
        <p class="eyebrow accent">Voices of Gratitude</p>
        <h1>Testimonials</h1>
        <p class="lead">
          Seekers across continents celebrate the precision of Dr. YesJ’s insights and the compassion woven into every
          interaction. Their reflections show how ancient wisdom, when practiced diligently, becomes a catalyst for conscious
          transformation.
        </p>
      </div>
    </section>

    <section class="page-section soft-bg">
      <div class="container narrow tiny-text">
        <div class="stat-band">
          <article class="stat-card" *ngFor="let highlight of highlights">
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.detail }}</p>
          </article>
        </div>

        <div class="glass-panel">
          <p>
            Each testimonial is a reminder that guidance is a partnership. Dr. YesJ provides clarity, tools, and timing. The
            seeker commits to the discipline required for meaningful change. Together, they co-create outcomes that honour the
            individual’s dharma.
          </p>
        </div>

        <div class="testimonial-grid">
          <article class="testimonial-card" *ngFor="let testimonial of testimonials">
            <span class="testimonial-location">{{ testimonial.location }}</span>
            <h3>{{ testimonial.name }}</h3>
            <p>{{ testimonial.story }}</p>
          </article>
        </div>

        <div class="quote-panel">
          <p>
            “Guidance becomes grace when it is received with humility and enacted with courage. These voices reflect the power of
            steady practice and the presence of a mentor who walks alongside the journey.”
          </p>
        </div>

        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
  protected readonly highlights = [
    {
      title: 'Global Guidance',
      detail: 'Seekers from ten countries share their journeys, demonstrating the universal relevance of Vedic astrology.'
    },
    {
      title: 'Action-Oriented Support',
      detail: 'Every reflection highlights the balance of precise prediction with step-by-step practices that sustain progress.'
    },
    {
      title: 'Compassionate Mentorship',
      detail: 'Clients emphasise the empathy, patience, and encouragement that define every session with Dr. YesJ.'
    }
  ];

  protected readonly testimonials = [
    {
      name: 'Namrata',
      location: 'India',
      story:
        'A career transition that once felt impossible now carries momentum and direction, thanks to disciplined guidance and timely remedies.'
    },
    {
      name: 'Anupama',
      location: 'India',
      story:
        'Clarity on family responsibilities and spiritual practice restored balance in her home and reignited faith in daily rituals.'
    },
    {
      name: 'Mukthiswari Mayi',
      location: 'Malaysia',
      story:
        'Personalised insights into business growth enabled confident decisions and aligned the family enterprise with long-term purpose.'
    },
    {
      name: 'Harikrishnan',
      location: 'Malaysia',
      story:
        'Guidance during a challenging relocation offered calm navigation, ensuring each step was synchronised with favourable planetary periods.'
    },
    {
      name: 'Iman',
      location: 'Oman',
      story:
        'Focused Prashanna sessions gave immediate answers to pressing choices, easing stress and strengthening trust in the process.'
    },
    {
      name: 'Mohammed Al Sulaimi',
      location: 'Oman',
      story:
        'Strategic insights into legal matters illuminated the timing for negotiations and the remedies to maintain stability.'
    },
    {
      name: 'Thilaka Sundari',
      location: 'Australia',
      story:
        'Structured remedies brought harmony to family life abroad, weaving tradition into a contemporary lifestyle.'
    },
    {
      name: 'Sundaram',
      location: 'Australia',
      story:
        'Consistent mentorship supported his entrepreneurial expansion, grounding ambition with a disciplined spiritual routine.'
    },
    {
      name: 'Saravanan',
      location: 'Switzerland',
      story:
        'High-stakes career decisions were managed with confidence after mapping planetary influences and receiving tailored counsel.'
    },
    {
      name: 'Ravi Chowdary',
      location: 'UAE',
      story:
        'A blend of professional and personal guidance clarified priorities and reignited momentum during a pivotal year.'
    },
    {
      name: 'Ibrahim Gailani',
      location: 'UAE',
      story:
        'The consultation reframed challenges as opportunities, inspiring creative projects that are in harmony with cosmic timing.'
    },
    {
      name: 'Amila',
      location: 'USA',
      story:
        'Support through major life shifts created emotional steadiness and a renewed sense of spiritual purpose.'
    },
    {
      name: 'Irina',
      location: 'Germany',
      story:
        'The synthesis of Vedic techniques with modern practicality made cross-cultural transitions feel centered and empowered.'
    },
    {
      name: 'Trinh',
      location: 'Vietnam',
      story:
        'Focused sessions on education choices opened pathways that honour both family expectations and personal aspiration.'
    },
    {
      name: 'Mai',
      location: 'Vietnam',
      story:
        'Remedies designed for wellbeing cultivated inner peace and resilience through demanding professional seasons.'
    },
    {
      name: 'Dorishini',
      location: 'Canada',
      story:
        'Long-distance guidance provided the structure needed to integrate spiritual practice with a fast-paced lifestyle.'
    },
    {
      name: 'Sandeep',
      location: 'Canada',
      story:
        'Strategic planning, anchored by astrological insight, brought clarity to investments and family decisions.'
    }
  ];
}
