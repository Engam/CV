import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { UserSignal } from '../../signals/user/user.signal';
import { UserPresentationContainerComponent } from '../../components/user/user-presentation-container/user-presentation-container.component';
import { PageTitleComponent } from '../../components/page-title/page-title.component';
import { UserService } from '../../services/user.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    UserPresentationContainerComponent,
    PageTitleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
  ]
})
export class HomeComponent {

  firstname = this.user.select('firstname');
  image = this.user.select('image');
  lastname = this.user.select('lastname');
  email = this.user.select('email');
  phone = this.user.select('phone');
  github = this.user.select('github');

  constructor(
    private user: UserSignal
  ) {
    
  }


}
