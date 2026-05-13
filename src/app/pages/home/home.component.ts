import { Component, HostListener, inject, signal } from '@angular/core';
import { GALLERY_ITEMS, GalleryItem } from '../../data/gallery-items';
import { I18nService } from '../../core/i18n.service';
import { TranslatePipe } from '../../core/translate.pipe';

@Component({
  selector: 'app-home',
  imports: [TranslatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly i18n = inject(I18nService);
  readonly contactEmail = 'hello@example.com';
  readonly items = GALLERY_ITEMS;
  readonly lightboxItem = signal<GalleryItem | null>(null);

  openLightbox(item: GalleryItem): void {
    this.lightboxItem.set(item);
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxItem.set(null);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.lightboxItem()) {
      this.closeLightbox();
    }
  }
}
