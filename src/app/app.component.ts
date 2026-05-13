import { Component, HostListener, effect, inject, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LANG_CODES, LangCode } from './core/translations';
import { I18nService } from './core/i18n.service';
import { ThemeService } from './core/theme.service';
import { TranslatePipe } from './core/translate.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, TranslatePipe, UpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly year = new Date().getFullYear();
  readonly navOpen = signal(false);
  readonly headerSolid = signal(false);
  readonly langs = LANG_CODES;
  readonly i18n = inject(I18nService);
  readonly theme = inject(ThemeService);

  constructor() {
    effect(() => {
      if (typeof document === 'undefined') return;
      const open = this.navOpen();
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  setLang(code: LangCode): void {
    this.i18n.setLang(code);
    this.closeNav();
  }

  toggleNav(): void {
    this.navOpen.update((v) => !v);
  }

  closeNav(): void {
    this.navOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY || document.documentElement.scrollTop;
    this.headerSolid.set(y > 48);
  }
}
