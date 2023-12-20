import { Component, Input } from '@angular/core';
import { User } from '../../../interfaces/user.interface';

@Component({
  selector: 'app-user-presentation-container',
  standalone: true,
  imports: [],
  templateUrl: './user-presentation-container.component.html',
  styleUrl: './user-presentation-container.component.scss'
})
export class UserPresentationContainerComponent {

  @Input({required:true}) firstname:string = '';
  @Input({required:true}) lastname:string = '';
  @Input({required:true}) image:string = '';
  @Input({required:true}) email:string = '';
  @Input({required:true}) phone:string = '';
  @Input({required:true}) github:string = '';
  
}
