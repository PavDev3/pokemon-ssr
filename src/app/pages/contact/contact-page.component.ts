import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
    selector: 'contact-page',
    imports: [CommonModule],
    templateUrl: './contact-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPageComponent implements OnInit {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  ngOnInit() {
    this.title.setTitle('Contact');
    this.meta.updateTag({ name: 'description', content: 'Contact page' });
    this.meta.updateTag({
      name: 'keywords',
      content: 'contact, page, Angular, Tailwind, TypeScript',
    });
  }
}
