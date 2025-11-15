import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }

      .booking-hero {
        background: radial-gradient(circle at top right, rgba(247, 122, 47, 0.2), transparent 55%),
          linear-gradient(180deg, rgba(255, 246, 241, 0.95), rgba(255, 231, 224, 0.65));
      }

      .booking-hero-card {
        display: grid;
        gap: clamp(1.4rem, 3vw, 2.2rem);
        padding: clamp(1.6rem, 3vw, 2.4rem);
        border-radius: 1.75rem;
        background: rgba(255, 246, 241, 0.92);
        border: 1px solid rgba(92, 16, 22, 0.12);
        box-shadow: 0 1.6rem 3.6rem rgba(92, 16, 22, 0.12);
      }

      .booking-hero-top {
        display: grid;
        gap: 1rem;
      }

      .booking-hero-top h1 {
        margin-bottom: 0.2rem;
      }

      .booking-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.6rem;
      }

      .booking-tags span {
        padding: 0.4rem 0.85rem;
        border-radius: 999px;
        background: rgba(92, 16, 22, 0.08);
        border: 1px solid rgba(92, 16, 22, 0.12);
        font-size: var(--font-size-body-sm);
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .booking-highlight {
        display: grid;
        gap: 0.75rem;
        padding: clamp(1.2rem, 3vw, 1.6rem);
        border-radius: 1.25rem;
        background: rgba(92, 16, 22, 0.07);
        border: 1px solid rgba(92, 16, 22, 0.12);
      }

      .booking-highlight h3 {
        margin: 0;
      }

      .booking-benefits {
        display: grid;
        gap: 0.45rem;
        padding-left: 1.2rem;
        margin: 0;
      }

      .booking-benefits li {
        line-height: 1.6;
      }

      .service-grid {
        display: grid;
        gap: clamp(1.2rem, 3vw, 1.8rem);
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      .service-card {
        display: grid;
        gap: 0.75rem;
        padding: clamp(1.1rem, 2.6vw, 1.6rem);
        border-radius: 1.25rem;
        background: #fff6f1;
        border: 1px solid rgba(92, 16, 22, 0.12);
        box-shadow: 0 0.9rem 2.4rem rgba(92, 16, 22, 0.12);
      }

      .service-card h3 {
        margin: 0;
      }

      .booking-form-card {
        display: grid;
        gap: 1.3rem;
        padding: clamp(1.6rem, 3vw, 2.4rem);
        border-radius: 1.75rem;
        background: rgba(255, 246, 241, 0.94);
        border: 1px solid rgba(92, 16, 22, 0.12);
        box-shadow: 0 1.4rem 3.4rem rgba(92, 16, 22, 0.12);
      }

      .booking-form {
        display: grid;
        gap: 1.2rem;
      }

      .form-grid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      }

      .field {
        display: grid;
        gap: 0.4rem;
      }

      .field-full {
        grid-column: 1 / -1;
      }

      input,
      select,
      textarea {
        width: 100%;
        padding: 0.75rem 0.85rem;
        border-radius: 0.9rem;
        border: 1px solid rgba(92, 16, 22, 0.22);
        background: #fff;
        font: inherit;
      }

      textarea {
        resize: vertical;
        min-height: 160px;
      }

      label {
        font-weight: 600;
        letter-spacing: 0.04em;
      }

      .privacy {
        margin: 0;
        font-size: var(--font-size-body-sm);
        color: rgba(48, 20, 22, 0.75);
      }

      @media (min-width: 960px) {
        .booking-hero-card {
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          align-items: center;
        }
      }

      @media (max-width: 640px) {
        .booking-tags {
          gap: 0.45rem;
        }

        .booking-tags span {
          font-size: var(--font-size-body-xs);
        }
      }
    `
  ],
  template: `
    <section class="page-section booking-hero">
      <div class="container narrow tiny-text">
        <div class="booking-hero-card">
          <div class="booking-hero-top">
            <p class="section-eyebrow">Book an Appointment</p>
            <h1>Guidance for every chapter of life</h1>
            <p>Personal, Professional, Vastu, and Prashanna consultations tailored to your unique journey with Dr.YesJ.</p>
            <div class="booking-tags">
              <span>Personal</span>
              <span>Professional</span>
              <span>Vastu</span>
              <span>Prashanna</span>
              <span>Products &amp; Supports</span>
            </div>
          </div>
          <div class="booking-highlight">
            <h3>Why meet Dr.YesJ?</h3>
            <ul class="booking-benefits">
              <li>35+ years of astro-technology insight</li>
              <li>Actionable remedies grounded in ancient wisdom</li>
              <li>Compassionate guidance for confident decisions</li>
            </ul>
            <a class="btn primary" href="#appointment-form">Start your request</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section soft-bg">
      <div class="container narrow tiny-text">
        <div class="service-grid">
          <article class="service-card">
            <h3>Personal</h3>
            <p>Navigate life's most meaningful transitions with clarity.</p>
            <ul class="simple-list">
              <li>Life Journey</li>
              <li>Love &amp; Relationships</li>
              <li>Health &amp; Happiness</li>
              <li>Childbirth &amp; Children’s Wellness</li>
              <li>Legal Matters &amp; Case Warnings</li>
            </ul>
          </article>
          <article class="service-card">
            <h3>Professional</h3>
            <p>Align your work, business, and financial choices with cosmic timing.</p>
            <ul class="simple-list">
              <li>Career Guidance</li>
              <li>Job or Business Decisions</li>
              <li>Growth &amp; Development</li>
              <li>Financial Wellbeing</li>
              <li>Critical Situations &amp; Strategic Decisions</li>
            </ul>
          </article>
          <article class="service-card">
            <h3>Vastu / Science of Earth Positioning</h3>
            <p>Transform your spaces into sanctuaries that support balance and prosperity.</p>
            <p>
              Harmonize your living and working environments by aligning them with the sacred science of Vastu to create
              supportive, balanced spaces.
            </p>
          </article>
          <article class="service-card">
            <h3>Prashanna – One-to-One</h3>
            <p>Direct, in-person insights for immediate questions and decisive actions.</p>
            <ul class="simple-list">
              <li>Nava Prashanna</li>
              <li>Color Prashanna</li>
              <li>Suya Prashanna</li>
              <li>Choli Prashanna</li>
              <li>Deva Prashanna</li>
              <li>Saha Deva Prashanna</li>
              <li>Numeri Prashanna</li>
            </ul>
          </article>
          <article class="service-card">
            <h3>Products &amp; Supports</h3>
            <p>Receive personalised remedial tools that sustain your progress.</p>
            <ul class="simple-list">
              <li>Gems &amp; Stones</li>
              <li>Yantras</li>
              <li>Mantras</li>
              <li>Graha Rangolis &amp; Other Support Items</li>
            </ul>
          </article>
        </div>
        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>

    <section class="page-section" id="appointment-form">
      <div class="container narrow tiny-text">
        <div class="booking-form-card">
          <h2>Request a Consultation</h2>
          <p>
            Share your details below to begin the process. Precise birth information enables Dr.YesJ to craft accurate insights
            for your journey.
          </p>
          <form class="booking-form">
            <div class="form-grid">
              <div class="field">
                <label for="name">Name</label>
                <input id="name" type="text" name="name" placeholder="Your full name" />
              </div>
              <div class="field">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" placeholder="you@example.com" />
              </div>
              <div class="field">
                <label for="phone">Phone / WhatsApp</label>
                <input id="phone" type="tel" name="phone" placeholder="Include country code" />
              </div>
              <div class="field">
                <label for="focus">Primary Area of Focus</label>
                <select id="focus" name="focus">
                  <option value="">Select an area of focus</option>
                  <option>Personal</option>
                  <option>Professional</option>
                  <option>Vastu</option>
                  <option>Prashanna</option>
                  <option>Products &amp; Supports</option>
                </select>
              </div>
              <div class="field field-full">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Share your birth details, preferred date, and any specific questions"
                ></textarea>
              </div>
            </div>
            <button class="btn primary" type="submit">Submit Request</button>
            <p class="privacy">
              All information shared remains confidential. Dr.YesJ will never disclose personal details and may only reference
              anonymised experiences to illustrate guidance.
            </p>
          </form>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}
