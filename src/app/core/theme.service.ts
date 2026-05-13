import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { ThemeId } from './translations';

const STORAGE_KEY = 'pp.theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  readonly isBrowser = isPlatformBrowser(this.platformId);

  /** Active color theme */
  readonly themeId = signal<ThemeId>('dark');

  hydrateFromStorage(): void {
    if (!this.isBrowser) return;
    const raw = localStorage.getItem(STORAGE_KEY);
    const next: ThemeId = raw === 'light' || raw === 'dark' ? raw : 'dark';
    this.themeId.set(next);
    this.document.documentElement.setAttribute('data-theme', next);
    this.document.documentElement.style.colorScheme = next;
  }

  setTheme(next: ThemeId): void {
    this.themeId.set(next);
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, next);
    }
    this.document.documentElement.setAttribute('data-theme', next);
    this.document.documentElement.style.colorScheme = next;
  }
}
