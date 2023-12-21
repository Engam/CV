import { Component, Input, inject } from '@angular/core';
import { UserSignal } from '../../signals/user/user.signal';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [],
  templateUrl: './page-title.component.html',
  styleUrl: './page-title.component.scss'
})
export class PageTitleComponent {
  @Input({ required: true }) title: string = '';
}
