import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'pricing-page',
    imports: [CommonModule],
    templateUrl: './pricing-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  ngOnInit() {
    this.title.setTitle('Pricing');
    this.meta.updateTag({ name: 'description', content: 'Pricing page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'pricing, page, Angular, Tailwind, TypeScript',
    });
  }
}
