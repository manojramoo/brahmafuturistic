import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  template: `
    <section class="page-section soft-bg">
      <div class="container narrow tiny-text">
        <h1>Gallery & Video Moments</h1>
        <p>
          Visual glimpses and recorded satsangs with Dr. YesJ will be curated here soon. The collection will include ceremonial
          photographs, glimpses from consultations, and devotional performances that illustrate “Ancient Technology, Applied
          Insights.”
        </p>
        <p>
          Until the media archive is published, please explore the devotional songs and mantras on the
          <a href="https://www.youtube.com/@BrahmaFuturist" target="_blank" rel="noopener">@BrahmaFuturist YouTube channel</a>
          for spiritual guidance and inspiration.
        </p>
        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>
  `
})
export class GalleryComponent {}
