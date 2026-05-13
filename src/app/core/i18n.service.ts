import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { LANG_CODES, LangCode, MESSAGES } from './translations';

const STORAGE_KEY = 'pp.lang';

@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  /** Current UI language */
  readonly lang = signal<LangCode>('ru');

  readonly isBrowser = isPlatformBrowser(this.platformId);

  /** Call once before first paint (APP_INITIALIZER) */
  hydrateFromStorage(): void {
    if (!this.isBrowser) return;
    const raw = localStorage.getItem(STORAGE_KEY);
    const next = LANG_CODES.includes(raw as LangCode) ? (raw as LangCode) : 'ru';
    this.lang.set(next);
    this.applyDocumentState();
  }

  setLang(code: LangCode): void {
    this.lang.set(code);
    if (this.isBrowser) {
      localStorage.setItem(STORAGE_KEY, code);
    }
    this.applyDocumentState();
  }

  t(key: string): string {
    const pack = MESSAGES[this.lang()];
    return pack[key] ?? MESSAGES.en[key] ?? key;
  }

  categoryLabel(categoryKey: string): string {
    return this.t(`cat.${categoryKey}`);
  }

  galleryTitle(titleKey: string): string {
    return this.t(`gallery.${titleKey}`);
  }

  galleryOpenAria(titleKey: string): string {
    const title = this.galleryTitle(titleKey);
    return this.t('gallery.openAria').replace('{title}', title);
  }

  private applyDocumentState(): void {
    const lang = this.lang();
    this.document.documentElement.lang = lang;
    this.title.setTitle(this.t('meta.title'));
    this.meta.updateTag({ name: 'description', content: this.t('meta.description') });
  }
}
