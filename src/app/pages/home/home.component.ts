import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="page-section soft-bg">
      <div class="container narrow tiny-text">
        <h1>About Dr. YesJ</h1>
        <p>
          Dr. YesJ, with over 35 years of experience, blends ancient astro-technology with practical insights to guide people
          toward peace, clarity, and strength. Trained by revered Gurus and mentors, and as the author of five books (three in
          English and two in Tamil) — ranging from motivational works and inspirational poems to customer insights and devotional
          songs — his mission, “Ancient Technology, Applied Insights”, helps individuals prevent struggles, overcome obstacles,
          and walk confidently toward a brighter future.
        </p>
        <p>
          Dr. YesJ has also composed numerous devotional songs dedicated to various temples and deities, and created many
          mantras from his spiritual insights, all of which are available on his YouTube channel @BrahmaFuturist, offering
          guidance, inspiration, and spiritual connection to a wider audience.
        </p>
        <p class="tagline">Prediction, Prevention and Prosper</p>
        <div class="section-actions">
          <a class="btn primary" routerLink="/founder">Read More…</a>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container narrow tiny-text">
        <h2>Ancient Technology, Applied Insights: The Pathway of Astrology</h2>
        <p>
          Astrology, a Vedic science rooted in the ancient Gurukul system, provides a methodology to understand our past,
          present, and future. The sages of old studied the movements of the Grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus,
          Saturn, and the shadow grahas Rahu and Ketu — to reveal how they influence human life.
        </p>
        <p>
          Much like a modern GPS guides us to navigate obstacles efficiently, astrology offers insight into challenges,
          highlights the best path, and helps individuals make informed decisions. Through this fusion of ancient wisdom and
          practical application, Dr. YesJ empowers people to anticipate challenges, align with cosmic influences, and achieve
          clarity, peace, and strength in their life journey.
        </p>
        <p class="tagline">Prediction, Prevention and Prosper</p>
        <div class="section-actions">
          <a class="btn outline" routerLink="/approach">@ Read More…</a>
        </div>
      </div>
    </section>

    <section class="page-section soft-bg">
      <div class="container narrow tiny-text">
        <h2>Explore the Wisdom of Dr. YesJ</h2>
        <p>Inspiring minds, guiding hearts – available in English and Tamil.</p>
        <p>Dr. YesJ is the author of five insightful books that inspire, guide, and empower readers:</p>
        <ul class="book-list">
          <li>நேர்மறையாக சிந்திப்போம் என்றமகள் பெறுவோம் (Think Positively, Reap the Benefits) – Tamil</li>
          <li>பஞ்ச துதி (Pancha Thuthi) – Tamil</li>
          <li>Optimistic Living – English</li>
          <li>Soul Soothers – English</li>
          <li>Balancing Customer Expectations: The Truths Unveiled – English</li>
        </ul>
        <p>
          <strong>Order your copy on Amazon:</strong>
          <a
            href="https://www.amazon.ca/s?k=jagadeesan+subramanian+book&crid=HSHTUK4EVS6B&sprefix=jagadeesan+subramanian%2Caps%2C127&ref=nb_sb_ss_saint-en-refocus-candidate_2_22"
            target="_blank"
            rel="noopener"
            >Order Now</a
          >
        </p>
        <p class="external-link">
          <a
            href="https://www.amazon.ca/s?k=jagadeesan+subramanian+book&crid=HSHTUK4EVS6B&sprefix=jagadeesan+subramanian%2Caps%2C127&ref=nb_sb_ss_saint-en-refocus-candidate_2_22"
            target="_blank"
            rel="noopener"
            >https://www.amazon.ca/s?k=jagadeesan+subramanian+book&amp;crid=HSHTUK4EVS6B&amp;sprefix=jagadeesan+subramanian%2Caps%2C127&amp;ref=nb_sb_ss_saint-en-refocus-candidate_2_22</a
          >
        </p>
        <p>
          <strong>Devotional Songs &amp; Mantras:</strong> Explore Dr. YesJ’s spiritual compositions, including devotional songs and
          mantras, on his YouTube channel @BrahmaFuturist for inspiration, guidance, and connection to the divine.
        </p>
        <p class="external-link">
          <a href="https://www.youtube.com/@BrahmaFuturist" target="_blank" rel="noopener"
            >https://www.youtube.com/@BrahmaFuturist</a
          >
        </p>
        <p class="tagline">Prediction, Prevention and Prosper</p>
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
