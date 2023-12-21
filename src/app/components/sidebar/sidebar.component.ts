import { Component } from '@angular/core';
import { MainRoute } from '../../interfaces/routes.interface';
import { SidebarrouteComponent } from './sidebarroute/sidebarroute.component';
import { UserSignal } from '../../signals/user/user.signal';

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

  constructor(
    private user: UserSignal
  ) {

  }

  testing() {
    this.user.setState({
      firstname: 'Eksempel',
      lastname: 'Eksempelsen',
      email: 'eksempel.eksempelsen@testing.com',
      github: 'tests',
      id: '2',
      image: 'https://avatars.githubusercontent.com/u/1086700?v=4',
      phone: '0047 12345678',
    })

  }
  
}
