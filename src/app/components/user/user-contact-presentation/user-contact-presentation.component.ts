import { Component, Input } from '@angular/core';
import { Icon, Icons } from '../../../enums/icons.enum';

@Component({
  selector: 'app-user-contact-presentation',
  standalone: true,
  imports: [],
  templateUrl: './user-contact-presentation.component.html',
  styleUrl: './user-contact-presentation.component.scss'
})
export class UserContactPresentationComponent {

  @Input({required:true}) value:string = '';
  @Input({required:true}) icon:Icon = Icons.PlaceholderIcon;
  
}
