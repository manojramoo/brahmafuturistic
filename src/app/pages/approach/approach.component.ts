import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Highlight {
  title: string;
  description: string;
}

interface ProcessStep {
  title: string;
  description: string;
}

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="highlights">
      <div class="container highlights-grid">
        <div class="intro">
          <p class="eyebrow">Why seekers choose us</p>
          <h2>Ancient resonance, modern relevance.</h2>
          <p>
            Sessions are immersive, meditative, and lucid. Expect grounded counsel, cosmic timing, and a personalised map of
            remedies attuned to your field.
          </p>
        </div>
        <div class="highlight-cards">
          <article class="highlight-card" *ngFor="let highlight of highlights">
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="process">
      <div class="container">
        <p class="eyebrow">The Astral Vedang approach</p>
        <h2>Each session is a journey through three portals.</h2>
        <div class="process-steps">
          <article class="process-card" *ngFor="let step of process">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </article>
        </div>
      </div>
    </section>
  `
})
export class ApproachComponent {
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
}
