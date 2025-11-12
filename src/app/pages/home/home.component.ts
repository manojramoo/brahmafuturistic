import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-content tiny-text">
          <p class="hero-eyebrow">Ancient Technology • Applied Insights</p>
          <h1>Modern astro-technology guidance rooted in timeless wisdom.</h1>
          <p>
            Dr. YesJ blends 35+ years of experience with teachings from revered Gurus to help people move through life with
            clarity, strength, and peace. His holistic mission empowers every seeker to prevent struggles, overcome obstacles,
            and walk confidently toward a brighter future.
          </p>
          <div class="hero-stats">
            <span class="stat-pill">35+ Years Guiding Seekers</span>
            <span class="stat-pill">5 Transformative Books</span>
            <span class="stat-pill">Global Community Support</span>
          </div>
          <div class="section-actions hero-actions">
            <a class="btn primary" routerLink="/contact">Book Appointment</a>
            <a class="btn outline" routerLink="/services">View Services</a>
          </div>
          <ul class="hero-highlights">
            <li>Personalized astro-technology sessions for every life stage.</li>
            <li>Actionable guidance that harmonizes ancient insight with modern needs.</li>
            <li>Compassionate, confidential mentorship focused on well-being.</li>
          </ul>
        </div>
        <div class="hero-visual">
          <div class="orb"></div>
          <div class="surface-card quote-card">
            <p>“Prediction, Prevention and Prosper.”</p>
            <span>— Dr. YesJ</span>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section layered-section">
      <div class="container">
        <div class="surface-card content-card tiny-text">
          <h2>Ancient Technology, Applied Insights: The Pathway of Astrology</h2>
          <p>
            Astrology, a Vedic science rooted in the Gurukul tradition, provides a methodology to understand our past, present,
            and future. The sages of old studied the movements of the Grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn,
            and the shadow grahas Rahu and Ketu — to reveal how they influence human life.
          </p>
          <p>
            Much like a modern GPS guides us around obstacles, astrology offers insight into challenges, highlights the best
            path, and helps individuals make informed decisions. Through this fusion of ancient wisdom and practical application,
            Dr. YesJ empowers people to anticipate challenges, align with cosmic influences, and achieve clarity, peace, and
            strength in their journey.
          </p>
          <div class="insight-grid">
            <article class="insight-card">
              <h3>Guided Preparation</h3>
              <p>Navigate upcoming transitions with foresight that keeps you steady and confident.</p>
            </article>
            <article class="insight-card">
              <h3>Cosmic Alignment</h3>
              <p>Understand planetary movements and harmonize your decisions with their influence.</p>
            </article>
            <article class="insight-card">
              <h3>Practical Outcomes</h3>
              <p>Transform celestial insights into grounded actions for life, career, and relationships.</p>
            </article>
          </div>
          <div class="section-actions">
            <a class="btn outline" routerLink="/approach">Discover the Approach</a>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section soft-bg">
      <div class="container">
        <div class="book-grid">
          <div class="surface-card book-card tiny-text">
            <h2>Explore the Wisdom of Dr. YesJ</h2>
            <p>Inspiring minds, guiding hearts – available in English and Tamil.</p>
            <ul class="book-list">
              <li>நேர்மறையாக சிந்திப்போம் என்றமகள் பெறுவோம் (Think Positively, Reap the Benefits) – Tamil</li>
              <li>பஞ்ச துதி (Pancha Thuthi) – Tamil</li>
              <li>Optimistic Living – English</li>
              <li>Soul Soothers – English</li>
              <li>Balancing Customer Expectations: The Truths Unveiled – English</li>
            </ul>
            <p class="tagline">Prediction, Prevention and Prosper</p>
          </div>
          <div class="surface-card action-card tiny-text">
            <h3>Continue Your Journey</h3>
            <p>
              <strong>Order your copy on Amazon:</strong> Explore these inspiring titles and keep ancient wisdom at your
              fingertips.
            </p>
            <p>
              <strong>Devotional Songs &amp; Mantras:</strong> Experience Dr. YesJ’s spiritual compositions on his @BrahmaFuturist
              YouTube channel for inspiration, guidance, and connection to the divine.
            </p>
            <div class="section-actions">
              <a
                class="btn primary"
                href="https://www.amazon.ca/s?k=jagadeesan+subramanian+book&crid=HSHTUK4EVS6B&sprefix=jagadeesan+subramanian%2Caps%2C127&ref=nb_sb_ss_saint-en-refocus-candidate_2_22"
                target="_blank"
                rel="noopener"
                aria-label="Order Dr. YesJ's books on Amazon (opens in a new tab)"
                >Order on Amazon</a
              >
              <a
                class="btn outline"
                href="https://www.youtube.com/@BrahmaFuturist"
                target="_blank"
                rel="noopener"
                aria-label="Visit the Brahma Futuristic YouTube channel (opens in a new tab)"
                >Visit YouTube Channel</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="page-section notice">
      <div class="container narrow tiny-text">
        <h3>Confidentiality / Privacy of Service</h3>
        <p>
          All predictions are shared only with the concerned individual. If a partner or other family members are present,
          certain private details may not be disclosed. Dr. YesJ will never share any personal information with anyone, including
          partners or family members. However, Dr. YesJ may use examples from past experiences without mentioning any names to
          illustrate a point.
        </p>
      </div>
    </section>
  `
})
export class HomeComponent {}
