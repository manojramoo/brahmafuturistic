import { Component, ViewEncapsulation, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  protected readonly navLinks: NavLink[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Services', path: '/services', exact: false },
    { label: 'Approach', path: '/approach', exact: false },
    { label: 'Founder', path: '/founder', exact: false },
    { label: 'Testimonials', path: '/testimonials', exact: false },
    { label: 'Contact', path: '/contact', exact: false }
  ];

  protected readonly isMenuOpen = signal(false);
  protected readonly year = new Date().getFullYear();

  protected toggleMenu(): void {
    this.isMenuOpen.update((current) => !current);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
