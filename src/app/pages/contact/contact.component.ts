import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

interface ContactMethod {
  label: string;
  detail: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  template: `
    <section class="contact">
      <div class="container contact-grid">
        <div class="contact-copy">
          <p class="eyebrow">Book your session</p>
          <h2>Ready to converse with the cosmos?</h2>
          <p>
            Share your intentions and we’ll create a consultation container that honours your rhythm. Sessions are hosted online
            and in select cities across India.
          </p>
          <div class="contact-methods">
            <a *ngFor="let method of contactMethods" class="contact-method" [href]="method.href">
              <span class="label">{{ method.label }}</span>
              <span class="detail">{{ method.detail }}</span>
            </a>
          </div>
        </div>
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
            <label for="focus">Intentions</label>
            <select id="focus" name="focus">
              <option value="">Select an area of focus</option>
              <option>Life direction reading</option>
              <option>Business alignment</option>
              <option>Relationship guidance</option>
              <option>Vastu consultation</option>
              <option>Event muhurta</option>
            </select>
          </div>
          <div class="field">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Share your story or questions"></textarea>
          </div>
          <button class="btn primary" type="submit">Send intention</button>
          <p class="privacy">
            By sharing your details you consent to receiving session updates and sacred insights. We respect your privacy and
            will never spam.
          </p>
        </form>
      </div>
    </section>
  `
})
export class ContactComponent {
  protected readonly contactMethods: ContactMethod[] = [
    {
      label: 'Email',
      detail: 'hello@astralvedang.com',
      href: 'mailto:hello@astralvedang.com'
    },
    {
      label: 'Phone / WhatsApp',
      detail: '+91 98201 12345',
      href: 'tel:+919820112345'
    },
    {
      label: 'Instagram',
      detail: '@astralvedang',
      href: 'https://instagram.com/astralvedang'
    }
  ];
}
