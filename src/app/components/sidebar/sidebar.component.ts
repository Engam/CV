import { Component } from '@angular/core';
import { MainRoute } from '../../interfaces/routes.interface';
import { SidebarrouteComponent } from './sidebarroute/sidebarroute.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    SidebarrouteComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  routes:MainRoute[] = [
    { path: 'home', name: 'Home', icon: 'home',},
    { path: 'portefolio', name: 'Portefolio',icon: 'apps' }
  ]
  
}
