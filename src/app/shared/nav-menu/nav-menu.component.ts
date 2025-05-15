import { Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-menu.component.html',
})
export class NavMenuComponent {
  logo = '/logos/logo.svg';
  logoVariant = '/logos/logo-variant.svg';

  private darkThemeSignal = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);
  isDarkTheme = computed(() => this.darkThemeSignal());

  constructor() {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      media.addEventListener('change', (event) => {
        this.darkThemeSignal.set(event.matches);
      });
    }
}
