import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  template: `
    <section class="page-section soft-bg">
      <div class="container narrow tiny-text">
        <h1>Testimonials</h1>
        <p>
          Voices from around the world share their gratitude for the guidance of Dr. YesJ. Each reflection honours the precision
          of his insights and the compassion that shapes every consultation.
        </p>
        <ul class="testimonial-list">
          <li>Namrata – India</li>
          <li>Anupama – India</li>
          <li>Mukthiswari Mayi – Malaysia</li>
          <li>Harikrishnan – Malaysia</li>
          <li>Iman – Oman</li>
          <li>Mohammed Al Sulaimi – Oman</li>
          <li>Thilaka Sundari – Australia</li>
          <li>Sundaram – Australia</li>
          <li>Saravanan – Switzerland</li>
          <li>Ravi Chowdary – UAE</li>
          <li>Ibrahim Gailani – UAE</li>
          <li>Amila – USA</li>
          <li>Irina – German</li>
          <li>Trinh – Vietnam</li>
          <li>Mai – Vietnam</li>
          <li>Dorishini – Canada</li>
          <li>Sandeep – Canada</li>
        </ul>
        <p class="tagline">Prediction, Prevention and Prosper</p>
      </div>
    </section>
  `
})
export class TestimonialsComponent {}
