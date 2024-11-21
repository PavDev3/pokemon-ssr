import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-404',
  imports: [RouterLink],
  templateUrl: './page-404.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page404Component {}
