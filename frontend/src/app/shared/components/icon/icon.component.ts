import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ':host { display: contents; }',
})
export class IconComponent {
  readonly name = input.required<'search' | 'shopping-bag' | 'menu'>();
  readonly label = input.required<string>();
  readonly mobileOnly = input(false);
}
