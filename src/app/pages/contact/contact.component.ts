import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="page-section">
      <div class="container narrow tiny-text">
        <h1>Book An Appointment</h1>
        <p>Personal / Professional / Prashanna</p>

        <h2>1. Personal</h2>
        <ul class="simple-list">
          <li>Life Journey</li>
          <li>Love &amp; Relationships</li>
          <li>Health &amp; Happiness</li>
          <li>Childbirth &amp; Children’s Wellness</li>
          <li>Legal Matters &amp; Case Warnings</li>
        </ul>

        <h2>2. Professional</h2>
        <ul class="simple-list">
          <li>Career Guidance</li>
          <li>Job or Business Decisions</li>
          <li>Growth &amp; Development</li>
          <li>Financial Wellbeing</li>
          <li>Critical Situations &amp; Strategic Decisions</li>
        </ul>

        <h2>3. Vastu / Science of Earth Positioning</h2>
        <p>
          Harmonize your living and working environments by aligning them with the sacred science of Vastu to create supportive,
          balanced spaces.
        </p>

        <h2>4. Prashanna – One-to-One In-Person Consultation</h2>
        <ul class="simple-list">
          <li>Nava Prashanna</li>
          <li>Color Prashanna</li>
          <li>Suya Prashanna</li>
          <li>Choli Prashanna</li>
          <li>Deva Prashanna</li>
          <li>Saha Deva Prashanna</li>
          <li>Numeri Prashanna</li>
        </ul>

        <h2>Products and Supports</h2>
        <ul class="simple-list">
          <li>Gems &amp; Stones</li>
          <li>Yantras</li>
          <li>Mantras</li>
          <li>Graha Rangolis &amp; Other Support Items</li>
        </ul>

        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>

    <section class="page-section soft-bg">
      <div class="container narrow tiny-text">
        <h2>Request a Consultation</h2>
        <p>
          Share your details below to begin the process. Precise birth information enables Dr. YesJ to craft accurate insights
          for your journey.
        </p>
        <form class="contact-form">
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
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Share your birth details and questions"></textarea>
          </div>
          <button class="btn primary" type="submit">Submit Request</button>
          <p class="privacy">
            All information shared remains confidential. Dr. YesJ will never disclose personal details and may only reference
            anonymised experiences to illustrate guidance.
          </p>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {}
