import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'about-page',
    imports: [CommonModule],
    templateUrl: './about-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('About');
    this.meta.updateTag({ name: 'description', content: 'About page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'about, page, Angular, Tailwind, TypeScript',
    });
  }
}
