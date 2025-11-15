import { Component } from '@angular/core';

@Component({
  selector: 'app-approach',
  standalone: true,
  template: `
    <section class="page-section hero-panel gradient-hero">
      <div class="container narrow tiny-text">
        <p class="eyebrow accent">Vedic Astrology, Reimagined</p>
        <h1>Ancient Technology, Applied Insights</h1>
        <p class="lead">
          Astrology is more than prediction — it is the disciplined methodology for understanding our past, present, and future.
          Drawing from the ancient Gurukul lineage, Dr. YesJ brings forward a living science that translates cosmic movements into
          practical wisdom for seekers across the world.
        </p>
        <div class="pill-group">
          <span class="pill">Graha Intelligence</span>
          <span class="pill">Spiritual Discipline</span>
          <span class="pill">Practical Navigation</span>
        </div>
      </div>
    </section>

    <section class="page-section">
      <div class="container narrow tiny-text">
        <div class="glass-panel">
          <p>
            In the ancient Gurukul system, enlightened masters imparted knowledge directly to devoted disciples. Sages cultivated
            the ability to leave the physical body using the technique of Anima, travelling across the universe to observe the
            movements of the Grahas (planets). Through these journeys they mapped how celestial forces influence life on Earth and
            sculpt the trajectory of human destiny.
          </p>
          <p>
            The seven primary Grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus, and Saturn — together with the shadow grahas Rahu
            and Ketu, hold the most significant sway over our lives. Understanding their rhythms reveals the hidden architecture of
            events, relationships, and opportunities that are woven into every chart.
          </p>
        </div>

        <div class="feature-grid">
          <article class="feature-card">
            <h3>Cosmic Cartography</h3>
            <p>
              Just as an experienced traveller consults the most precise map before setting out, astrology provides a view of the
              terrain ahead. It highlights favourable paths, illuminates detours, and alerts us to potential delays before they
              surface.
            </p>
          </article>
          <article class="feature-card">
            <h3>Guided Foresight</h3>
            <p>
              Knowing the movements of the Grahas equips seekers with the ability to prepare, to respond with clarity, and to align
              their actions with auspicious timings. The process converts uncertainty into strategic steps that honour free will.
            </p>
          </article>
          <article class="feature-card">
            <h3>Living Tradition</h3>
            <p>
              Dr. YesJ translates timeless wisdom into guidance that fits modern contexts without dilution. Each consultation is a
              collaboration that empowers individuals to anticipate challenges, embrace opportunities, and move forward with grace.
            </p>
          </article>
        </div>

        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-step">1</span>
            <h3>Decode the Chart</h3>
            <p>
              Detailed birth information becomes the blueprint. The Janma Kundali reveals the placement of each Graha and the
              karmic story it activates.
            </p>
          </div>
          <div class="timeline-item">
            <span class="timeline-step">2</span>
            <h3>Interpret the Movements</h3>
            <p>
              Transits, dashas, and yogas are examined to identify the phases of opportunity, caution, and transformation that lie
              ahead.
            </p>
          </div>
          <div class="timeline-item">
            <span class="timeline-step">3</span>
            <h3>Apply the Insight</h3>
            <p>
              Practical steps, spiritual disciplines, and remedies are aligned with the seeker’s goals — turning awareness into
              action that creates tangible progress.
            </p>
          </div>
        </div>

        <div class="quote-panel">
          <p>
            Through this fusion of ancient wisdom and practical application, Dr. YesJ empowers individuals to align with cosmic
            influences, anticipate challenges, and achieve clarity, peace, and strength in their journey. This is the essence of his
            mission: “Ancient Technology, Applied Insights.”
          </p>
        </div>

        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>
  `
})
export class ApproachComponent {}
