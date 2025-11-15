import { Component } from '@angular/core';

@Component({
  selector: 'app-founder',
  standalone: true,
  styles: [
    `
      :host {
        display: block;
      }

      .founder-profile {
        display: grid;
        gap: clamp(1.5rem, 4vw, 2.5rem);
      }

      .founder-card {
        display: grid;
        gap: clamp(1.2rem, 3vw, 2rem);
        grid-template-columns: minmax(0, 1fr);
        align-items: center;
        padding: clamp(1.5rem, 3vw, 2.5rem);
        border-radius: 1.5rem;
        background: rgba(255, 246, 241, 0.94);
        border: 1px solid rgba(92, 16, 22, 0.12);
        box-shadow: 0 1.4rem 3.5rem rgba(92, 16, 22, 0.12);
      }

      .founder-media {
        position: relative;
        display: grid;
        place-items: center;
      }

      .founder-media::before {
        content: '';
        position: absolute;
        inset: 10% 8%;
        border-radius: 1.25rem;
        background: linear-gradient(135deg, rgba(247, 122, 47, 0.18), rgba(92, 16, 22, 0.08));
        z-index: 0;
        filter: blur(0.2rem);
      }

      .founder-media img {
        position: relative;
        z-index: 1;
        display: block;
        width: min(260px, 70vw);
        border-radius: 1.25rem;
        box-shadow: 0 1.2rem 2.8rem rgba(92, 16, 22, 0.18);
      }

      .founder-meta {
        display: grid;
        gap: 1rem;
      }

      .founder-eyebrow {
        font-size: var(--font-size-eyebrow);
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: rgba(48, 20, 22, 0.7);
      }

      .lead {
        font-size: clamp(1.05rem, 2.6vw, 1.25rem);
        line-height: 1.7;
        color: rgba(48, 20, 22, 0.85);
      }

      @media (min-width: 880px) {
        .founder-card {
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1fr);
        }

        .founder-media {
          justify-self: center;
        }
      }
    `
  ],
  template: `
    <section class="page-section soft-bg">
      <div class="container narrow tiny-text founder-profile">
        <div class="founder-card">
          <figure class="founder-media">
            <img src="assets/dr-yesj.png" alt="Portrait of Dr.YesJ" loading="lazy" />
          </figure>
          <div class="founder-meta">
            <p class="founder-eyebrow">Founder &amp; Astro-Technology Mentor</p>
            <h1>Dr.YesJ</h1>
            <p class="lead">
              Dr.YesJ brings with him over 35 years of experience, enriched by wisdom, discipline, and deep spiritual guidance.
            </p>
            <p>
              He hails from the sacred town of Thiruvanaikoil, situated on the banks of the river Cauvery, a place where ancient
              astro-technology and spiritual traditions are abundant. His journey was also shaped by his maternal uncle, Shri
              Karalan, a renowned astrologer, whose influence deepened his connection to this ancient science.
            </p>
          </div>
        </div>
        <p>
          A devoted seeker of knowledge, Dr.YesJ became a disciple of three revered Gurus — Shri Doctor Balan Nair, Shri Suba
          Krishnan, and Shri Shiva Rama Krishnan. Through their blessings, he gained profound wisdom of planetary movements and
          their influence on human life, knowledge he now applies in service of humanity with compassion and truth.
        </p>
        <p>
          Dr.YesJ is also an author of five books — three in English and two in Tamil. His works include:
        </p>
        <ul class="book-list">
          <li>
            <strong>English:</strong> Motivating young minds; inspirational poems; understanding who customers are and how to
            retain them.
          </li>
          <li><strong>Tamil:</strong> Motivational and inspiring content for young minds; devotional songs.</li>
        </ul>
        <p>
          In addition, Dr.YesJ has composed numerous devotional songs dedicated to various temples and deities, and created
          many mantras from his own spiritual insights, all of which are available on his YouTube channel @BrahmaFuturist,
          offering guidance, inspiration, and spiritual connection to a wider audience.
        </p>
        <p>
          In addition to his spiritual masters, Dr.YesJ was professionally molded by Shri Annadurai Vinayagam — a renowned
          Mentor, Life Coach, and Professional Trainer. Under his guidance, Dr.YesJ developed a deep focus on people and their
          well-being. This realization — that it is people who truly shape the world — became the foundation of his life’s
          purpose: to guide individuals toward clarity, peace, and strength by showing them the right path at the right time.
        </p>
        <p>
          Dr.YesJ provides his clients with insights in a way that allows them to relate directly to their current situations
          and approach challenges appropriately. What keeps his clients coming back is the practical and precise nature of his
          guidance, which offers a clear path and actionable steps to overcome the obstacles they face.
        </p>
        <h2>Mission: Ancient Technology, Applied Insights</h2>
        <p>
          Dr.YesJ’s mission reflects his unique approach: harnessing the timeless power of ancient astrological science and
          transforming it into practical, actionable insights that individuals can apply in their modern lives to achieve
          success, peace, and fulfillment.
        </p>
        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>
  `
})
export class FounderComponent {}
