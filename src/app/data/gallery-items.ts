export interface GalleryItem {
  id: string;
  src: string;
  /** Key for i18n: gallery.{titleKey} */
  titleKey: string;
  /** Key for i18n: cat.{categoryKey} */
  categoryKey: string;
  /** CSS grid row span for masonry rhythm */
  rowSpan: 1 | 2;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', src: 'gallery/01.png', titleKey: 'g01', categoryKey: 'adventure', rowSpan: 2 },
  { id: '2', src: 'gallery/02.png', titleKey: 'g02', categoryKey: 'landscape', rowSpan: 1 },
  { id: '3', src: 'gallery/03.png', titleKey: 'g03', categoryKey: 'landscape', rowSpan: 2 },
  { id: '4', src: 'gallery/04.jpg', titleKey: 'g04', categoryKey: 'travel', rowSpan: 1 },
  { id: '5', src: 'gallery/05.png', titleKey: 'g05', categoryKey: 'portrait', rowSpan: 1 },
  { id: '6', src: 'gallery/06.png', titleKey: 'g06', categoryKey: 'portrait', rowSpan: 2 },
  { id: '7', src: 'gallery/07.png', titleKey: 'g07', categoryKey: 'portrait', rowSpan: 1 },
  { id: '8', src: 'gallery/08.png', titleKey: 'g08', categoryKey: 'landscape', rowSpan: 2 },
  { id: '9', src: 'gallery/09.jpg', titleKey: 'g09', categoryKey: 'cinematic', rowSpan: 1 },
  { id: '10', src: 'gallery/10.png', titleKey: 'g10', categoryKey: 'cinematic', rowSpan: 2 },
  { id: '11', src: 'gallery/11.png', titleKey: 'g11', categoryKey: 'editorial', rowSpan: 1 },
  { id: '12', src: 'gallery/12.png', titleKey: 'g12', categoryKey: 'cinematic', rowSpan: 1 },
  { id: '13', src: 'gallery/13.png', titleKey: 'g13', categoryKey: 'cinematic', rowSpan: 2 },
  { id: '14', src: 'gallery/14.png', titleKey: 'g14', categoryKey: 'nature', rowSpan: 1 },
  { id: '15', src: 'gallery/15.png', titleKey: 'g15', categoryKey: 'cinematic', rowSpan: 2 },
  { id: '16', src: 'gallery/16.png', titleKey: 'g16', categoryKey: 'cinematic', rowSpan: 1 },
  { id: '17', src: 'gallery/17.png', titleKey: 'g17', categoryKey: 'cinematic', rowSpan: 1 },
  { id: '18', src: 'gallery/18.jpg', titleKey: 'g18', categoryKey: 'still_life', rowSpan: 2 },
  { id: '19', src: 'gallery/19.png', titleKey: 'g19', categoryKey: 'concept', rowSpan: 1 },
  { id: '20', src: 'gallery/20.png', titleKey: 'g20', categoryKey: 'editorial', rowSpan: 2 },
  { id: '21', src: 'gallery/21.png', titleKey: 'g21', categoryKey: 'editorial', rowSpan: 1 },
  { id: '22', src: 'gallery/22.png', titleKey: 'g22', categoryKey: 'fine_art', rowSpan: 1 },
  { id: '23', src: 'gallery/23.png', titleKey: 'g23', categoryKey: 'fine_art', rowSpan: 1 },
];
