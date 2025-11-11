import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-founder',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="founder">
      <div class="container founder-grid">
        <div class="founder-visual">
          <div class="portrait-glow"></div>
          <div class="portrait"></div>
        </div>
        <div class="founder-copy">
          <p class="eyebrow">Meet the guide</p>
          <h2>Vedica Anand, Astro Guide & Futurist</h2>
          <p>
            Initiated into the Himalayan Jyotish lineage, Vedica weaves Sanskrit mantra, sound therapy, and innovation strategy.
            Her consultations are spacious, poetic, and deeply practical—rooted in dharma, oriented toward the future.
          </p>
          <ul>
            <li>Certified Vedic Astrologer & Vastu consultant</li>
            <li>Facilitator for meditation, breathwork, and mantra immersion</li>
            <li>Advisor to conscious brands, founders, and global change-makers</li>
          </ul>
          <a class="btn primary" routerLink="/contact">Request a session</a>
        </div>
      </div>
    </section>
  `
})
export class FounderComponent {}
