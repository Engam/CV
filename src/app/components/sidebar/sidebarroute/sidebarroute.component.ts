import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from '../../icon/icon.component';
import { MainRoute } from '../../../interfaces/routes.interface';

@Component({
  selector: 'app-sidebarroute',
  standalone: true,
  imports: [
    RouterModule,
    IconComponent

  ],
  templateUrl: './sidebarroute.component.html',
  styleUrl: './sidebarroute.component.scss'
})
export class SidebarrouteComponent {

  @Input({required: true}) route: MainRoute = {
    path: '',
    name: '',
    icon: '',
  }
}
