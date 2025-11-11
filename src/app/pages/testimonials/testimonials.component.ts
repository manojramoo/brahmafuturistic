import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="testimonials">
      <div class="container">
        <p class="eyebrow">Client reflections</p>
        <h2>Whispers from the cosmic circle.</h2>
        <div class="testimonial-grid">
          <figure class="testimonial-card" *ngFor="let testimonial of testimonials">
            <blockquote>“{{ testimonial.quote }}”</blockquote>
            <figcaption>
              <span class="name">{{ testimonial.name }}</span>
              <span class="role">{{ testimonial.role }}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container faq-grid">
        <div class="faq-intro">
          <p class="eyebrow">Questions</p>
          <h2>Your curiosity is sacred.</h2>
          <p>
            We honour inquiry. Explore the essentials below and reach out for tailored guidance on collaborations, festivals, or
            retreats.
          </p>
        </div>
        <div class="faq-items">
          <details *ngFor="let item of faqs" open>
            <summary>{{ item.question }}</summary>
            <p>{{ item.answer }}</p>
          </details>
        </div>
      </div>
    </section>
  `
})
export class TestimonialsComponent {
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
}
