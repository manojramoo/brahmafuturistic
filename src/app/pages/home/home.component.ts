import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Vedic Astrology for Visionaries</p>
          <h1>Awaken your cosmic intelligence and lead with inner certainty.</h1>
          <p class="lead">
            Astral Vedang blends timeless Jyotish lineage, sacred rituals, and mindful futurism to guide seekers, creators, and
            conscious organisations toward purpose-aligned expansion.
          </p>
          <div class="hero-actions">
            <a class="btn primary" routerLink="/contact">Book a consultation</a>
            <a class="btn ghost" routerLink="/services">Explore services</a>
          </div>
          <div class="trust-points">
            <div>
              <strong>12+ yrs</strong>
              <span>lineage-rooted practice</span>
            </div>
            <div>
              <strong>500+</strong>
              <span>transformational sessions</span>
            </div>
            <div>
              <strong>30 day</strong>
              <span>integration support</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="orbit"></div>
          <div class="crystal"></div>
          <div class="halo halo-one"></div>
          <div class="halo halo-two"></div>
          <div class="sigil">ॐ</div>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
