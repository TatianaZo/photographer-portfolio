import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TranslatePipe } from '../../../core/translate.pipe';

const LEGAL_IDS = ['privacy', 'terms', 'cookies', 'offer'] as const;
type LegalId = (typeof LEGAL_IDS)[number];

function isLegalId(id: string | null | undefined): id is LegalId {
  return !!id && (LEGAL_IDS as readonly string[]).includes(id);
}

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [RouterLink, TranslatePipe],
  templateUrl: './legal-page.component.html',
  styleUrl: './legal-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly section = signal<LegalId | null>(null);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((pm) => {
      const id = pm.get('id');
      if (isLegalId(id)) {
        this.section.set(id);
        window.scrollTo(0, 0);
      } else {
        void this.router.navigateByUrl('/');
      }
    });
  }
}
