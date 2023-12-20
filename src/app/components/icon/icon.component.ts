import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {

  @Input({required: true}) value: string = '';
  @Input() type: 'material' | 'local' = 'material';
  @Input() alt: string = '';
  
}
